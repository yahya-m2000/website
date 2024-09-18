"use client";

import React, { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type FormField = {
  label: string;
  type?: string;
  placeholderText: string;
  validationRules?: string;
  id: number;
};

type FormProps = {
  title: string;
  description: any; // Rich text data
  submitText: string;
  successMessage: any; // Rich text data
  formFields?: FormField[];
};

const ContactForm: React.FC<{ form: FormProps }> = ({ form }) => {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear error when typing
  };

  // Validation logic based on field type and validation rules
  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    form?.formFields?.forEach((field) => {
      const value = formValues[field.label.toLowerCase().replace(" ", "-")];
      const rules = field.validationRules?.split("|") || [];

      // Required field validation
      if (rules.includes("required") && !value) {
        errors[
          field.label.toLowerCase().replace(" ", "-")
        ] = `${field.label} is required.`;
      }

      // Email validation
      if (field.type === "email" && value && !/^\S+@\S+\.\S+$/.test(value)) {
        errors[field.label.toLowerCase().replace(" ", "-")] =
          "Please enter a valid email address.";
      }

      // Phone number validation (must be all integers)
      if (field.type === "tel" && value && !/^\d+$/.test(value)) {
        errors[field.label.toLowerCase().replace(" ", "-")] =
          "Phone number must contain only digits.";
      }

      // First name validation (must start with an uppercase letter)
      if (
        field.label.toLowerCase() === "name" &&
        value &&
        !/^[A-Z]/.test(value)
      ) {
        errors[field.label.toLowerCase().replace(" ", "-")] =
          "Name must start with an uppercase letter.";
      }

      // Minimum length validation
      const minLengthRule = rules.find((rule) => rule.startsWith("minLength"));
      if (minLengthRule) {
        const minLength = parseInt(minLengthRule.split(":")[1]);
        if (value && value.length < minLength) {
          errors[
            field.label.toLowerCase().replace(" ", "-")
          ] = `${field.label} must be at least ${minLength} characters.`;
        }
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setIsSubmitted(true);
      // Submit the form data here
      console.log("Form submitted successfully!", formValues);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="form-container p-6 border border-gray-300 rounded-md">
      <h2 className="text-2xl font-bold mb-4">{form.title}</h2>

      {/* Render rich text for description */}
      <div className="mb-4">{documentToReactComponents(form.description)}</div>

      <form onSubmit={handleSubmit}>
        {form.formFields?.map((field, index) => (
          <div key={index} className="mb-4">
            <label
              htmlFor={`form-field-${field.id}`}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
            <input
              id={`form-field-${field.id}`}
              name={field.label.toLowerCase().replace(" ", "-")}
              type={field.type || "text"}
              placeholder={field.placeholderText}
              value={
                formValues[field.label.toLowerCase().replace(" ", "-")] || ""
              }
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md ${
                formErrors[field.label.toLowerCase().replace(" ", "-")]
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formErrors[field.label.toLowerCase().replace(" ", "-")] && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors[field.label.toLowerCase().replace(" ", "-")]}
              </p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {form.submitText}
        </button>
      </form>

      {/* Render rich text for success message */}
      {isSubmitted && (
        <div className="mt-4 text-green-600">
          {documentToReactComponents(form.successMessage)}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
