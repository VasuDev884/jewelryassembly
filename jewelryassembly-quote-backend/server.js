import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

console.log('SMTP_HOST =', process.env.SMTP_HOST);
console.log('SMTP_PORT =', process.env.SMTP_PORT);
console.log('SMTP_USER =', process.env.SMTP_USER);
console.log('QUOTE_TO_EMAIL =', process.env.QUOTE_TO_EMAIL);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 5000;

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5176',
  'https://jewelryassembly.vercel.app',
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uploadDir = path.join(__dirname, 'uploads');
const dataDir = path.join(__dirname, 'data');
const quotesFile = path.join(dataDir, 'quotes.json');

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(quotesFile)) fs.writeFileSync(quotesFile, '[]');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/\s+/g, '-');
    cb(null, `${Date.now()}-${safeName}`);
  },
});

const upload = multer({ storage });

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  family: 4,
});

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.post('/api/quote', upload.single('file'), async (req, res) => {
  try {
    const {
      fullName,
      companyName,
      email,
      phone,
      serviceNeeded,
      productType,
      estimatedQuantity,
      timeline,
      budgetRange,
      projectDetails,
    } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ message: 'Full name and email are required' });
    }

    const newQuote = {
      id: Date.now(),
      fullName,
      companyName,
      email,
      phone,
      serviceNeeded,
      productType,
      estimatedQuantity,
      timeline,
      budgetRange,
      projectDetails,
      file: req.file
        ? {
            originalname: req.file.originalname,
            filename: req.file.filename,
            path: req.file.path,
            mimetype: req.file.mimetype,
            size: req.file.size,
          }
        : null,
      createdAt: new Date().toISOString(),
    };

    const existingQuotes = JSON.parse(fs.readFileSync(quotesFile, 'utf-8'));
    existingQuotes.push(newQuote);
    fs.writeFileSync(quotesFile, JSON.stringify(existingQuotes, null, 2));

    const mailOptions = {
      from: `"Jewelry Assembly Website" <${process.env.SMTP_FROM}>`,
      to: process.env.QUOTE_TO_EMAIL,
      subject: `New Quote Request from ${fullName}`,
      text: [
        `Full Name: ${fullName || ''}`,
        `Company: ${companyName || ''}`,
        `Email: ${email || ''}`,
        `Phone: ${phone || ''}`,
        `Service Needed: ${serviceNeeded || ''}`,
        `Product Type: ${productType || ''}`,
        `Quantity: ${estimatedQuantity || ''}`,
        `Timeline: ${timeline || ''}`,
        `Budget: ${budgetRange || ''}`,
        `Details: ${projectDetails || ''}`,
        `File: ${req.file ? req.file.originalname : 'No file uploaded'}`,
      ].join('\n'),
    };

    if (req.file) {
      mailOptions.attachments = [
        {
          filename: req.file.originalname,
          path: req.file.path,
        },
      ];
    }

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    res.status(200).json({
      message: 'Quote request submitted successfully',
      quote: newQuote,
    });
  } catch (error) {
    console.error('SERVER ERROR:', error);
    res.status(500).json({
      message: error.message || 'Internal server error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});