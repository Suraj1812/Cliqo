"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { siteConfig } from "@/lib/site-config";

type TeamType = "NBFC" | "Fintech app" | "Digital bank" | "Gig platform" | "";

type ContactFormValues = {
  fullName: string;
  workEmail: string;
  company: string;
  teamType: TeamType;
  message: string;
};

type SubmissionState =
  | { type: "idle"; message: string }
  | { type: "error"; message: string }
  | { type: "success"; message: string };

const initialValues: ContactFormValues = {
  fullName: "",
  workEmail: "",
  company: "",
  teamType: "",
  message: "",
};

const initialSubmissionState: SubmissionState = { type: "idle", message: "" };

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(values: ContactFormValues) {
  if (!values.fullName.trim()) {
    return "Please add your full name.";
  }

  if (!isValidEmail(values.workEmail)) {
    return "Please enter a valid work email.";
  }

  if (!values.company.trim()) {
    return "Please add your company name.";
  }

  if (!values.teamType) {
    return "Please choose the team type that best matches you.";
  }

  if (!values.message.trim()) {
    return "Please tell Cliqo what you want to explore.";
  }

  return null;
}

function buildMailtoLink(values: ContactFormValues) {
  const subject = `Cliqo demo request from ${values.company}`;
  const body = [
    `Full name: ${values.fullName}`,
    `Work email: ${values.workEmail}`,
    `Company: ${values.company}`,
    `Team type: ${values.teamType}`,
    "",
    "What they want to explore:",
    values.message,
  ].join("\n");

  return `mailto:${siteConfig.contact.salesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [submissionState, setSubmissionState] = useState<SubmissionState>(initialSubmissionState);

  function updateField<Key extends keyof ContactFormValues>(field: Key, value: ContactFormValues[Key]) {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationMessage = validateForm(values);

    if (validationMessage) {
      setSubmissionState({ type: "error", message: validationMessage });
      return;
    }

    window.location.assign(buildMailtoLink(values));
    setSubmissionState({
      type: "success",
      message: `Your email client should open with a draft addressed to ${siteConfig.contact.salesEmail}. If it does not, email the team directly using that address.`,
    });
  }

  return (
    <form className="mt-10 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
      <label className="space-y-2 text-sm font-medium text-slate">
        Full name
        <input
          type="text"
          name="fullName"
          autoComplete="name"
          placeholder="Aarav Mehta"
          value={values.fullName}
          onChange={(event) => updateField("fullName", event.target.value)}
          required
        />
      </label>
      <label className="space-y-2 text-sm font-medium text-slate">
        Work email
        <input
          type="email"
          name="workEmail"
          autoComplete="email"
          placeholder="you@company.com"
          value={values.workEmail}
          onChange={(event) => updateField("workEmail", event.target.value)}
          required
        />
      </label>
      <label className="space-y-2 text-sm font-medium text-slate">
        Company
        <input
          type="text"
          name="company"
          autoComplete="organization"
          placeholder="Your organization"
          value={values.company}
          onChange={(event) => updateField("company", event.target.value)}
          required
        />
      </label>
      <label className="space-y-2 text-sm font-medium text-slate">
        Team type
        <select
          name="teamType"
          value={values.teamType}
          onChange={(event) => updateField("teamType", event.target.value as TeamType)}
          required
        >
          <option value="">Select</option>
          <option value="NBFC">NBFC</option>
          <option value="Fintech app">Fintech app</option>
          <option value="Digital bank">Digital bank</option>
          <option value="Gig platform">Gig platform</option>
        </select>
      </label>
      <label className="space-y-2 text-sm font-medium text-slate sm:col-span-2">
        What do you want to explore?
        <textarea
          name="message"
          autoComplete="off"
          placeholder="Income verification, underwriting workflows, embedded credit, monitoring, or partnership details."
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          required
        />
      </label>
      <div className="sm:col-span-2 flex flex-col gap-4">
        <button
          type="submit"
          className="rounded-full bg-deep px-6 py-3 text-sm font-semibold text-sand transition hover:-translate-y-0.5 sm:w-fit"
        >
          Request Demo
        </button>
        <p className="text-sm text-slate/75">
          Submitting opens a pre-filled email draft so your team can send the request directly to Cliqo.
        </p>
        <p
          className={`text-sm ${submissionState.type === "error" ? "text-red-700" : "text-slate/75"}`}
          aria-live="polite"
        >
          {submissionState.message}
        </p>
      </div>
    </form>
  );
}
