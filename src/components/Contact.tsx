"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Send } from "lucide-react";
import { MotionButton } from "./MotionLink";

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.email({ message: "Please enter a valid email." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type RefProp = React.RefObject<HTMLElement | null>;

interface ContactProps {
  refProp?: RefProp;
  darkMode?: boolean;
}

const Contact = ({ refProp, darkMode = true }: ContactProps) => {
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: z.infer<typeof contactFormSchema>) {
    setSubmitStatus("success");
    setSubmitMessage(`Thanks ${data.name || "there"}! Message queued (demo).`);
    reset();
  }

  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage("");
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  return (
    <motion.section
      ref={refProp}
      id="contact"
      className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Mail className="w-8 h-8 mr-3 text-blue-500" />
          <h2 className="text-4xl font-bold">Get In Touch</h2>
        </div>
        <p
          className={`text-xl mb-12 text-center ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className="flex justify-center mb-12">
          <MotionButton
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center text-lg font-semibold text-white cursor-pointer"
            onClick={() =>
              (window.location.href = "mailto:javidangrbnl@gmail.com")
            }
          >
            <Mail className="w-5 h-5 mr-2" />
            Send me an Email
          </MotionButton>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                className={`block mb-2 text-sm font-semibold ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                {...register("name")}
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-900 border border-gray-700 focus:border-blue-500 text-white"
                    : "bg-white border border-gray-300 focus:border-blue-500 text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  errors.name ? "border-red-500 focus:border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                className={`block mb-2 text-sm font-semibold ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-900 border border-gray-700 focus:border-blue-500 text-white"
                    : "bg-white border border-gray-300 focus:border-blue-500 text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                  errors.email ? "border-red-500 focus:border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              className={`block mb-2 text-sm font-semibold ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Subject
            </label>
            <input
              type="text"
              placeholder="Project Inquiry"
              {...register("subject")}
              className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-900 border border-gray-700 focus:border-blue-500 text-white"
                  : "bg-white border border-gray-300 focus:border-blue-500 text-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                errors.subject ? "border-red-500 focus:border-red-500" : ""
              }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>
          <div>
            <label
              className={`block mb-2 text-sm font-semibold ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Message
            </label>
            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              {...register("message")}
              className={`w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none ${
                darkMode
                  ? "bg-gray-900 border border-gray-700 focus:border-blue-500 text-white"
                  : "bg-white border border-gray-300 focus:border-blue-500 text-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                errors.message ? "border-red-500 focus:border-red-500" : ""
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          {submitMessage && (
            <div
              className={`p-3 rounded-lg text-center mb-4 ${
                submitStatus === "success"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {submitMessage}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                {" "}
                <Send className="w-5 h-5 mr-2" /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
