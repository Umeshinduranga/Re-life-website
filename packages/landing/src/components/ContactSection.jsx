import React, { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { BsSend, BsCheckCircle } from 'react-icons/bs';

const ContactSection = () => {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') || 'Friend';
    const email = formData.get('email') || '';
    const subject = formData.get('subject') || 'Re-Life Contact';
    const message = formData.get('message') || '';

    const body = `Hi Re-Life team,\n\n${message}\n\n— ${name}\n${email}`;
    const mailtoUrl = `mailto:hello@relife.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSending(true);
    setStatus('Opening your email client...');
    window.location.href = mailtoUrl;
    setTimeout(() => setSending(false), 800);
  };

  return (
    <section id="contact" className="bg-[#e3e8ef] min-h-screen flex items-center px-6 py-10">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Form side */}
        <div className="bg-white shadow-2xl rounded-3xl border border-slate-200 p-8 lg:p-10 space-y-6">
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full">
              <BsCheckCircle className="text-base" />
              We respond in under 24 hours
            </p>
            <h3 className="text-4xl font-black text-slate-900">Let&apos;s work together.</h3>
            <p className="text-slate-600">Or reach us via <span className="text-cyan-700 font-semibold">hello@relife.app</span></p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="block text-sm font-semibold text-slate-700 space-y-2">
                <span>First name</span>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
                  placeholder="Alex"
                />
              </label>
              <label className="block text-sm font-semibold text-slate-700 space-y-2">
                <span>Last name</span>
                <input
                  name="surname"
                  type="text"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
                  placeholder="Doe"
                />
              </label>
            </div>

            <label className="block text-sm font-semibold text-slate-700 space-y-2">
              <span>Email</span>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
                placeholder="you@company.com"
              />
            </label>

            <label className="block text-sm font-semibold text-slate-700 space-y-2">
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition resize-none"
                placeholder="Tell us how we can help"
              ></textarea>
            </label>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 transition disabled:opacity-70"
              >
                <BsSend className="text-lg" />
                {sending ? 'Opening mail app...' : 'Send message'}
              </button>
              {status && <span className="text-sm text-slate-600">{status}</span>}
            </div>
          </form>
        </div>

        {/* Visual side */}
        <div className="relative min-h-[480px] w-full flex items-center justify-center">
          <div
            className="relative w-full h-full max-w-[520px] max-h-[620px] overflow-hidden shadow-2xl border border-white/60"
            style={{
              clipPath: 'path("M150 0c60 0 120 40 170 70s90 70 100 120c10 50-20 110-60 160s-90 90-150 100-130-10-170-50-60-100-40-150 80-90 120-140S90 0 150 0z")',
              background: 'linear-gradient(135deg, rgba(15,23,42,0.85), rgba(15,23,42,0.65))'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop"
              alt="Lake and mountains"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/35 to-slate-900/10" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 drop-shadow-lg">
              <div className="text-sm uppercase tracking-[0.16em] text-slate-200">Recovery, reflected</div>
              <div className="text-2xl font-bold">Calm waters, clearer mind.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
