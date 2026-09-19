import { useMemo, useState } from "react";
import { encodeForm } from "../../utils/netlify";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";

const initialState = {
  "form-name": "contact",
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  "bot-field": "",
};

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
}

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Your full name is required.";
    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!isEmail(form.email)) e.email = "Please enter a valid email address.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Please enter your travel details or message.";
    return e;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  const onChange = (key) => (ev) => {
    setForm((p) => ({ ...p, [key]: ev.target.value }));
  };

  const onBlur = (key) => () => {
    setTouched((p) => ({ ...p, [key]: true }));
  };

  const fieldError = (key) => touched[key] && errors[key];

  async function onSubmit(e) {
    e.preventDefault();

    setTouched({ name: true, email: true, subject: true, message: true });
    if (hasErrors) return;
    if (form["bot-field"]) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(form),
      });

      setStatus("success");
      setForm(initialState);

      const url = new URL(window.location.href);
      url.searchParams.set("success", "1");
      window.history.replaceState({}, "", url.toString());
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong submitting your form. Please try again or message us directly on WhatsApp.");
    }
  }

  return (
    <div className="card-luxury p-8 md:p-10 bg-white border border-[#D9A441]/30">
      <div className="space-y-2 mb-6">
        <h2 className="font-serif-heading text-2xl md:text-3xl font-bold text-[#12372A]">
          Plan Your Custom Trip
        </h2>
        <p className="text-xs text-muted leading-relaxed font-sans-body">
          Fill in your details below and our team will get back to you with a free custom itinerary quote.
        </p>
      </div>

      {status === "success" && (
        <div
          className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center gap-3"
          role="status"
        >
          <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
          <span>Thank you! Your message has been received. We will respond via email/WhatsApp shortly.</span>
        </div>
      )}

      {status === "error" && (
        <div
          className="mb-6 p-4 rounded-xl bg-red-50 border border-red-300 text-red-800 text-xs font-semibold flex items-center gap-3"
          role="alert"
        >
          <AlertCircle size={20} className="text-red-600 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={onSubmit}
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot */}
        <p className="hidden">
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" value={form["bot-field"]} onChange={onChange("bot-field")} />
          </label>
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold text-[#12372A] uppercase tracking-wider mb-1.5" htmlFor="name">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={onChange("name")}
              onBlur={onBlur("name")}
              className={`w-full bg-[#FAF8F3] px-4 py-3 text-xs font-medium text-gray-800 outline-none rounded-xl border transition-colors ${
                fieldError("name") ? "border-red-500 bg-red-50/20" : "border-[#12372A]/15 focus:border-[#D9A441]"
              }`}
              placeholder="e.g. John Smith"
              autoComplete="name"
            />
            {fieldError("name") && (
              <div className="mt-1 text-[11px] text-red-600 font-medium">
                {errors.name}
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#12372A] uppercase tracking-wider mb-1.5" htmlFor="email">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={onChange("email")}
              onBlur={onBlur("email")}
              className={`w-full bg-[#FAF8F3] px-4 py-3 text-xs font-medium text-gray-800 outline-none rounded-xl border transition-colors ${
                fieldError("email") ? "border-red-500 bg-red-50/20" : "border-[#12372A]/15 focus:border-[#D9A441]"
              }`}
              placeholder="you@example.com"
              autoComplete="email"
            />
            {fieldError("email") && (
              <div className="mt-1 text-[11px] text-red-600 font-medium">
                {errors.email}
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#12372A] uppercase tracking-wider mb-1.5" htmlFor="phone">
            Phone / WhatsApp Number (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={onChange("phone")}
            className="w-full bg-[#FAF8F3] border border-[#12372A]/15 focus:border-[#D9A441] px-4 py-3 text-xs font-medium text-gray-800 outline-none rounded-xl transition-colors"
            placeholder="+44 7X XXX XXXX or +94 7X XXX XXXX"
            autoComplete="tel"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#12372A] uppercase tracking-wider mb-1.5" htmlFor="subject">
            Inquiry Subject / Tour Package *
          </label>
          <input
            id="subject"
            name="subject"
            value={form.subject}
            onChange={onChange("subject")}
            onBlur={onBlur("subject")}
            className={`w-full bg-[#FAF8F3] px-4 py-3 text-xs font-medium text-gray-800 outline-none rounded-xl border transition-colors ${
              fieldError("subject") ? "border-red-500 bg-red-50/20" : "border-[#12372A]/15 focus:border-[#D9A441]"
            }`}
            placeholder="e.g. 7 Days Tour Package / Private Driver Request / Custom Itinerary"
          />
          {fieldError("subject") && (
            <div className="mt-1 text-[11px] text-red-600 font-medium">
              {errors.subject}
            </div>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#12372A] uppercase tracking-wider mb-1.5" htmlFor="message">
            Travel Details & Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={onChange("message")}
            onBlur={onBlur("message")}
            rows={5}
            className={`w-full bg-[#FAF8F3] px-4 py-3 text-xs font-medium text-gray-800 outline-none rounded-xl border transition-colors resize-none ${
              fieldError("message") ? "border-red-500 bg-red-50/20" : "border-[#12372A]/15 focus:border-[#D9A441]"
            }`}
            placeholder="Please mention arrival dates, number of travelers, interests (wildlife, beaches, tea country), and preferred hotels."
          />
          {fieldError("message") && (
            <div className="mt-1 text-[11px] text-red-600 font-medium">
              {errors.message}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary w-full py-4 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending Your Inquiry...
            </>
          ) : (
            <>
              <Send size={16} /> Send Travel Request
            </>
          )}
        </button>

        <div className="text-[11px] text-muted text-center pt-2">
          🔒 Your privacy is respected. Powered by Netlify Forms with secure transmission.
        </div>
      </form>
    </div>
  );
}