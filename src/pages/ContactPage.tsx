import React, { useState } from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Clock,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    purpose: 'Internship Opportunity',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(
      `[Portfolio Inquiry - ${formState.purpose}] from ${formState.name || 'Recruiter'}`
    );
    const body = encodeURIComponent(
      `Hello Manan,\n\nName: ${formState.name}\nOrganization: ${formState.organization || 'N/A'}\nEmail: ${formState.email}\nPurpose: ${formState.purpose}\n\nMessage:\n${formState.message}\n`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================
            PAGE HEADER
        ============================================================ */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9e174f] mb-2 block">
            REACH OUT DIRECTLY
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            I am actively seeking internship and entry-level opportunities. Whether you have an open role, an operational project, or want to discuss my background, I would be glad to connect.
          </p>
        </div>

        {/* ============================================================
            CONTACT GRID: CHANNELS & INTERACTIVE FORM
        ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9e174f]">
                    Primary Email
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#9e174f] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-display font-bold text-base sm:text-lg text-slate-900 hover:text-[#9e174f] transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
                <p className="text-xs text-slate-500 mt-1">
                  Checked daily. Fast responses to recruiter and college inquiries.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-3 py-1.5 rounded-md bg-[#9e174f] text-white text-xs font-bold hover:bg-[#831843] transition-colors"
                >
                  Compose Email
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9e174f]">
                    Direct Phone & Mobile
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#9e174f] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-display font-bold text-base sm:text-lg text-slate-900 hover:text-[#9e174f] transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
                <p className="text-xs text-slate-500 mt-1">
                  Available for phone screenings, interviews, and coordinator calls.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="px-3 py-1.5 rounded-md bg-[#9e174f] text-white text-xs font-bold hover:bg-[#831843] transition-colors"
                >
                  Call Now
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Location & Availability Card */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <MapPin className="w-4 h-4 text-[#9e174f]" />
                <span>Base Location</span>
              </div>
              <div className="text-sm font-semibold text-slate-900">
                {PERSONAL_INFO.location}
              </div>

              <div className="pt-3 border-t border-slate-200/70 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#9e174f]" />
                  <span>Timezone: Indian Standard Time (IST, UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-[#9e174f]" />
                  <span>Preference: Hyderabad (On-site / Hybrid) or Remote</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-[#9e174f]" />
                  <span>College: St. Joseph's Degree and PG College</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
              
              <div className="mb-6">
                <h3 className="font-display font-extrabold text-xl text-slate-900">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out this form or click below to launch your default email client directly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-rose-50/70 border border-rose-200 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white text-[#9e174f] flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-lg">
                      Thank You, {formState.name}!
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mt-1">
                      Your message details have been recorded. You can also send this inquiry directly via your email app to ensure instant delivery.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={generateMailtoUrl()}
                      className="px-4 py-2 rounded-lg bg-[#9e174f] text-white text-xs font-bold hover:bg-[#831843] transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open Pre-filled Email Client</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name <span className="text-[#9e174f]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe / HR Coordinator"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#9e174f]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address <span className="text-[#9e174f]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. hr@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#9e174f]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Company / College / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Enterprise Ltd. / Agency"
                        value={formState.organization}
                        onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#9e174f]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Inquiry Nature
                      </label>
                      <select
                        value={formState.purpose}
                        onChange={(e) => setFormState({ ...formState, purpose: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#9e174f]"
                      >
                        <option value="Internship Opportunity">Internship Opportunity</option>
                        <option value="Entry-Level Job Role">Entry-Level Job Role</option>
                        <option value="College / Academic Inquiry">College / Academic Inquiry</option>
                        <option value="Mentorship & Networking">Mentorship & Networking</option>
                        <option value="General Conversation">General Conversation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message <span className="text-[#9e174f]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Share details about the role, internship dates, project scope, or questions..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#9e174f]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#9e174f] hover:bg-[#831843] active:bg-[#701036] text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Direct%20Inquiry%20from%20Portfolio`}
                      className="text-xs font-semibold text-[#9e174f] hover:underline"
                    >
                      Or send directly via email client →
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
