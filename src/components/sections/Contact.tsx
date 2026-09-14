"use client";

import React, { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { personalInfo } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Github,
  Linkedin,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileError, setTurnstileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number";
    } else if (formData.phone.trim().length < 6) {
      errs.phone = "Please enter a valid phone number with country/area code";
    }
    if (!formData.subject.trim()) {
      errs.subject = "Please enter a subject";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!turnstileToken) {
      setTurnstileError("Please complete the security verification before submitting.");
      return;
    }

    setIsSubmitting(true);
    setServerError(null);
    setTurnstileError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTurnstileToken(null);
        turnstileRef.current?.reset();
      } else {
        setServerError(
          data.message || "Something went wrong. Please try again.",
        );
        setTurnstileToken(null);
        turnstileRef.current?.reset();
      }
    } catch {
      setServerError("Network error. Please try again or email directly.");
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#F4FAFF] relative overflow-hidden border-y border-[#E5EDF7]"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's build something"
          gradientTitle="interesting."
          description="I am open to Full-Stack, Software Engineering, and AI/GenAI opportunities. Feel free to reach out directly or send a message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <FadeInView>
              <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#E5EDF7] shadow-po-sm">
                <h3 className="text-xl font-bold text-[#0A1235] mb-2">
                  Contact Information
                </h3>
                <p className="text-xs text-[#5D6C87] mb-6">
                  Available for full-time engineering roles, technical
                  architecture consultation, and high-impact SaaS builds.
                </p>

                <div className="space-y-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F4FAFF] border border-[#E5EDF7] hover:border-[#1677FF]/40 hover:bg-white transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1677FF]/10 text-[#1677FF] flex items-center justify-center shrink-0 group-hover:bg-[#1677FF] group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#5D6C87] uppercase block">
                        Email Address
                      </span>
                      <span className="text-sm font-semibold text-[#0A1235] group-hover:text-[#1677FF] transition-colors">
                        {personalInfo.email}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F4FAFF] border border-[#E5EDF7] hover:border-[#1677FF]/40 hover:bg-white transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1677FF]/10 text-[#1677FF] flex items-center justify-center shrink-0 group-hover:bg-[#1677FF] group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#5D6C87] uppercase block">
                        Phone / WhatsApp
                      </span>
                      <span className="text-sm font-semibold text-[#0A1235] group-hover:text-[#1677FF] transition-colors">
                        {personalInfo.phone}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F4FAFF] border border-[#E5EDF7]">
                    <div className="w-10 h-10 rounded-lg bg-[#1677FF]/10 text-[#1677FF] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#5D6C87] uppercase block">
                        Location
                      </span>
                      <span className="text-sm font-semibold text-[#0A1235]">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-6 mt-6 border-t border-[#E5EDF7]">
                  <span className="text-xs font-mono uppercase text-[#5D6C87] block mb-3">
                    Connect Online
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={personalInfo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#E5EDF7] bg-[#F4FAFF] text-xs font-mono text-[#0A1235] hover:bg-white hover:text-[#1677FF] hover:border-[#1677FF]/40 transition-all"
                    >
                      <Github className="w-4 h-4 text-[#1677FF]" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={personalInfo.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#E5EDF7] bg-[#F4FAFF] text-xs font-mono text-[#0A1235] hover:bg-white hover:text-[#1677FF] hover:border-[#1677FF]/40 transition-all"
                    >
                      <Linkedin className="w-4 h-4 text-[#1677FF]" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Right Column: Interactive Real Contact Form */}
          <div className="lg:col-span-7">
            <FadeInView delay={0.1}>
              <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#E5EDF7] shadow-po-md">
                {isSuccess ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A1235]">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-[#5D6C87] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. I have received your message
                      and will reply to your email shortly.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSuccess(false)}
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-[#0A1235] mb-2">
                      Send a Message
                    </h3>

                    {serverError && (
                      <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-mono font-medium text-[#0A1235] mb-1"
                        >
                          Full Name{" "}
                          <span className="text-rose-500 font-bold ml-0.5">
                            *
                          </span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Morgan"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#1677FF] ${
                            errors.name
                              ? "border-rose-300 bg-rose-50/50"
                              : "border-[#E5EDF7] bg-[#F4FAFF] focus:bg-white"
                          }`}
                        />
                        {errors.name && (
                          <span className="text-[11px] text-rose-500 mt-1 block">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-mono font-medium text-[#0A1235] mb-1"
                        >
                          Email Address{" "}
                          <span className="text-rose-500 font-bold ml-0.5">
                            *
                          </span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. alex@company.com"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#1677FF] ${
                            errors.email
                              ? "border-rose-300 bg-rose-50/50"
                              : "border-[#E5EDF7] bg-[#F4FAFF] focus:bg-white"
                          }`}
                        />
                        {errors.email && (
                          <span className="text-[11px] text-rose-500 mt-1 block">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-mono font-medium text-[#0A1235] mb-1"
                        >
                          Phone Number{" "}
                          <span className="text-rose-500 font-bold ml-0.5">
                            *
                          </span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#1677FF] ${
                            errors.phone
                              ? "border-rose-300 bg-rose-50/50"
                              : "border-[#E5EDF7] bg-[#F4FAFF] focus:bg-white"
                          }`}
                        />
                        {errors.phone && (
                          <span className="text-[11px] text-rose-500 mt-1 block">
                            {errors.phone}
                          </span>
                        )}
                      </div>

                      {/* Subject */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-xs font-mono font-medium text-[#0A1235] mb-1"
                        >
                          Subject{" "}
                          <span className="text-rose-500 font-bold ml-0.5">
                            *
                          </span>
                        </label>
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="e.g. Full-Stack role or GenAI project"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#1677FF] ${
                            errors.subject
                              ? "border-rose-300 bg-rose-50/50"
                              : "border-[#E5EDF7] bg-[#F4FAFF] focus:bg-white"
                          }`}
                        />
                        {errors.subject && (
                          <span className="text-[11px] text-rose-500 mt-1 block">
                            {errors.subject}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono font-medium text-[#0A1235] mb-1"
                      >
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share the project scope, role, timeline, technical needs, or questions you have..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5EDF7] bg-[#F4FAFF] focus:bg-white text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#1677FF] resize-y"
                      />
                    </div>

                    {/* Security Verification */}
                    <div>
                      {turnstileSiteKey ? (
                        <>
                          <Turnstile
                            ref={turnstileRef}
                            siteKey={turnstileSiteKey}
                            options={{ theme: "light" }}
                            onSuccess={(token) => {
                              setTurnstileToken(token);
                              setTurnstileError(null);
                              setServerError(null);
                            }}
                            onExpire={() => {
                              setTurnstileToken(null);
                              setTurnstileError(
                                "Security verification expired. Please verify again.",
                              );
                            }}
                            onError={() => {
                              setTurnstileToken(null);
                              setTurnstileError(
                                "Security verification could not be completed. Please try again.",
                              );
                            }}
                          />
                          {turnstileError && (
                            <span className="text-[11px] text-rose-500 mt-1 block">
                              {turnstileError}
                            </span>
                          )}
                        </>
                      ) : (
                        <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>
                            Security verification is unavailable. Please try again later.
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      disabled={isSubmitting || !turnstileToken || !turnstileSiteKey}
                      className="w-full font-semibold shadow-md cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
};
