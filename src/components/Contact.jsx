import { useState } from 'react';
import { Mail, Check, Copy, Send, MessageSquare, ArrowUpRight } from 'lucide-react';

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const PROJECT_TYPES = [
  'Full-stack Web App',
  'GIS & Spatial Project',
  'Company Landing Page',
  'Technical Consultation'
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Full-stack Web App',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('alfakhri323@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formState.name.trim()) errs.name = 'Please provide your name';
    if (!formState.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = 'Please enter a valid email format';
    }
    if (!formState.message.trim()) {
      errs.message = 'Please include a brief message';
    } else if (formState.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    setTimeout(() => {
      // Compose mailto query to trigger real client action
      const subject = encodeURIComponent(`[Inquiry: ${formState.projectType}] from ${formState.name}`);
      const body = encodeURIComponent(
        `Hi Al-Fakhri,\n\nName: ${formState.name}\nEmail: ${formState.email}\nProject Type: ${formState.projectType}\n\nMessage:\n${formState.message}`
      );
      window.location.href = `mailto:alfakhri323@gmail.com?subject=${subject}&body=${body}`;

      setStatus('success');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#090a0f] border-t border-white/[0.06] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-3">
            04 / Collaboration & Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight mb-4">
            Initiate a Conversation.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Have a project in mind, need geospatial data integration, or seeking a full-stack engineer? Leave a message below or reach out via direct channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Connections */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card */}
            <div className="bg-[#11131a] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg">
              <span className="text-xs font-mono uppercase text-zinc-400 block mb-2">Direct Channel</span>
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                alfakhri323@gmail.com
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Average response time: within 24 hours on business days.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-zinc-200 hover:text-white border border-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:alfakhri323@gmail.com"
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Client</span>
                </a>
              </div>
            </div>

            {/* Social Links List */}
            <div className="bg-[#11131a] border border-white/10 rounded-2xl p-6 shadow-lg">
              <span className="text-xs font-mono uppercase text-zinc-400 block mb-4">
                Verified Social Profiles
              </span>

              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/fatih-al-fakhri-muhammad-8245b3327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0c0d12] border border-white/5 hover:border-blue-500/30 text-zinc-300 hover:text-white transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Connect on LinkedIn"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <div>
                      <p className="text-sm font-semibold">LinkedIn</p>
                      <p className="text-xs text-zinc-500">Professional network & updates</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://github.com/alfakhrii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0c0d12] border border-white/5 hover:border-blue-500/30 text-zinc-300 hover:text-white transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Explore GitHub repositories"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-blue-400" />
                    <div>
                      <p className="text-sm font-semibold">GitHub</p>
                      <p className="text-xs text-zinc-500">Repositories, commits & codebases</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://www.instagram.com/allfakhrii_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0c0d12] border border-white/5 hover:border-blue-500/30 text-zinc-300 hover:text-white transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Follow on Instagram"
                >
                  <div className="flex items-center gap-3">
                    <InstagramIcon className="w-4 h-4 text-blue-400" />
                    <div>
                      <p className="text-sm font-semibold">Instagram</p>
                      <p className="text-xs text-zinc-500">Personal highlights & design</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-[#11131a] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-heading font-bold text-white">
                Send an Inquiry
              </h3>
            </div>

            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-heading font-bold text-white">Message Prepared</h4>
                <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Your mail client has been opened with your inquiry pre-filled. If it didn't open automatically, you can always write directly to <span className="text-blue-400 font-mono">alfakhri323@gmail.com</span>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setFormState({ name: '', email: '', projectType: 'Full-stack Web App', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3 rounded-xl bg-[#090a0f] border text-sm text-white placeholder-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#090a0f] border text-sm text-white placeholder-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Project Type Picker */}
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                    Project Domain or Scope
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormState({ ...formState, projectType: type })}
                        className={`p-2.5 rounded-lg text-xs font-medium text-center border transition-all ${
                          formState.projectType === type
                            ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                            : 'bg-[#090a0f] text-zinc-400 border-white/5 hover:border-white/10 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                    Project Details or Inquiry <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your timeline, project requirements, or ideas..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#090a0f] border text-sm text-white placeholder-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      errors.message ? 'border-red-500' : 'border-white/10'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Preparing Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
