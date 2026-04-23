# JewelryAssembly Quote Backend

Express backend for the React "Request a Quote" form.

## Features
- POST `/api/quote` to receive quote submissions
- Stores submissions in `data/quotes.json`
- Optional file upload with field name `referenceFile`
- Optional email sending via Nodemailer
- CORS enabled for the React frontend

## Install
```bash
npm install
```

## Setup
Copy the environment file:

### PowerShell
```powershell
Copy-Item .env.example .env
```

### CMD
```bat
copy .env.example .env
```

Update `.env` with your email settings if you want email delivery.

## Run
```bash
npm run dev
```

Server runs at:
```bash
http://localhost:5000
```

## API
### Health
`GET /api/health`

### Submit Quote
`POST /api/quote`

Use either:
- `application/json` for text-only submissions
- `multipart/form-data` if you want to upload a file

### Expected fields
- `fullName` (required)
- `email` (required)
- `companyName`
- `phone`
- `serviceNeeded`
- `estimatedQuantity`
- `timeline`
- `budgetRange`
- `projectDetails`
- `referenceFile` (optional upload)

## Frontend fetch example (JSON)
```js
await fetch('http://localhost:5000/api/quote', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## Frontend fetch example (with file)
```js
const form = new FormData();
form.append('fullName', formData.fullName);
form.append('email', formData.email);
form.append('companyName', formData.companyName);
form.append('referenceFile', selectedFile);

await fetch('http://localhost:5000/api/quote', {
  method: 'POST',
  body: form
});
```
