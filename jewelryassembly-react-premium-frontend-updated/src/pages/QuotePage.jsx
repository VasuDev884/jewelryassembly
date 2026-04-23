import { useRef, useState } from "react";
import { PageShell, SectionHeading, Reveal } from "../components/ui";
import { techPackTips, resourcePanels } from "../components/data";

const initialFormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  serviceNeeded: "",
  productType: "",
  estimatedQuantity: "",
  timeline: "",
  budgetRange: "",
  projectDetails: "",
  file: null,
};

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        file: files && files.length > 0 ? files[0] : null,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setErrorMessage("");

    try {
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== "") {
          payload.append(key, value);
        }
      });

      const response = await fetch("https://jewelryassembly.onrender.com/api/quote", {
        method: "POST",
        body: payload,
      });

      const contentType = response.headers.get("content-type") || "";
      let result = null;

      if (contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();
        throw new Error(text || "Backend did not return JSON");
      }

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit quote request");
      }

      console.log("Quote submitted:", result);
      setSubmitted(true);
      resetForm();
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("Quote form submit error:", error);
      setErrorMessage(error.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container">
          <span className="eyebrow">Request a Quote</span>
          <h1>
            Start your project with a polished lead form and clear production
            expectations.
          </h1>
          <p>
            Submit your project details and our team will review and respond
            with pricing and timelines.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <Reveal>
            <div className="text-panel soft-card">
              <SectionHeading
                title="What to prepare"
                text="The strongest quote requests include quantities, materials, timing, reference images, and as much tech-pack detail as possible."
              />
              <ul className="check-list">
                {techPackTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="field-grid two-col">
                <label>
                  <span>Full Name</span>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  <span>Company Name</span>
                  <input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="field-grid two-col">
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  <span>Phone Number</span>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="field-grid two-col">
                <label>
                  <span>Service Needed</span>
                  <input
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  <span>Product Type</span>
                  <input
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="field-grid two-col">
                <label>
                  <span>Estimated Quantity</span>
                  <input
                    name="estimatedQuantity"
                    value={formData.estimatedQuantity}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  <span>Timeline</span>
                  <input
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <label>
                <span>Budget Range</span>
                <input
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Project Details</span>
                <textarea
                  rows="6"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>File Upload</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  name="file"
                  onChange={handleChange}
                />
              </label>

              <button
                type="submit"
                className="btn btn-primary full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Request a Quote"}
              </button>
              {submitted && (
                <div className="success-card">
                  <h3>✨ Request Received</h3>
                  <p>
                    Our team will review your project and contact you shortly.
                  </p>
                </div>
              )}

              {errorMessage && <p className="form-error">❌ {errorMessage}</p>}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container card-grid two">
          {resourcePanels.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="soft-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
