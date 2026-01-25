"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Loader2 
} from "lucide-react";
import Navbar from "@/components/nav_bar";

export default function SupportPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network delay (1.5 seconds)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  // Reset form to send another message
  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black pt-24 pb-20 px-6">
      <Navbar/>
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Support</h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Have a question about exchange rates, loan eligibility, or bank locations? 
            Our team is here to help you navigate the Ethiopian financial system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800">
                <div className="p-3 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <p className="text-muted-foreground text-sm mb-1">For general inquiries and feedback.</p>
                  <a href="mailto:support@ethiobank.com" className="text-primary font-medium hover:underline">support@ethiobank.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800">
                <div className="p-3 bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <p className="text-muted-foreground text-sm mb-1">Mon-Fri from 8am to 5pm EAT.</p>
                  <a href="tel:+251111234567" className="text-primary font-medium hover:underline">+251 11 123 4567</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800">
                <div className="p-3 bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Visit Us</h3>
                  <p className="text-muted-foreground text-sm">
                    Bole Road, Friendship Building<br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Teaser */}
            <div className="p-6 bg-muted/30 rounded-2xl border border-dashed">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <MessageSquare size={18} /> Common Questions
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>How often are exchange rates updated?</li>
                <li>Can I apply for a loan online?</li>
                <li>Where can I find Swift codes?</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-zinc-800 relative overflow-hidden">
            
            {/* SUCCESS STATE OVERLAY */}
            {isSubmitted ? (
              <div className="w-full h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-2xl font-bold mb-2">Message Received!</h2>
                <p className="text-muted-foreground mb-8">
                  Thank you for contacting us. Our support team will review your message and get back to you within 24 hours.
                </p>
                <button 
                  onClick={handleReset}
                  className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              // FORM STATE
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Send a Message</h2>
                  <p className="text-sm text-muted-foreground">Fill out the form below and we'll reply shortly.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <input 
                      required 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-transparent focus:border-primary focus:bg-white dark:focus:bg-zinc-900 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="Abebe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input 
                      required 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-transparent focus:border-primary focus:bg-white dark:focus:bg-zinc-900 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="Kebede"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-transparent focus:border-primary focus:bg-white dark:focus:bg-zinc-900 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-transparent focus:border-primary focus:bg-white dark:focus:bg-zinc-900 focus:ring-2 focus:ring-primary/20 transition-all outline-none">
                    <option>General Inquiry</option>
                    <option>Technical Issue</option>
                    <option>Data Correction</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea 
                    required 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-transparent focus:border-primary focus:bg-white dark:focus:bg-zinc-900 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}