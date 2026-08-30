import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowDown, 
  ArrowUpRight, 
  FileText, 
  Mail, 
  Phone, 
  Check, 
  Copy, 
  Sparkles,
  TrendingUp,
  Users,
  Database,
  BarChart3,
  MapPin
} from 'lucide-react';

export default function Hero({ onOpenResumeModal }) {
  const { personalInfo, heroStats } = portfolioData;
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const getStatIcon = (index) => {
    switch (index) {
      case 0: return <TrendingUp className="w-4 h-4 text-emerald-500" />;
      case 1: return <Users className="w-4 h-4 text-blue-500" />;
      case 2: return <Database className="w-4 h-4 text-indigo-500" />;
      case 3: return <BarChart3 className="w-4 h-4 text-amber-500" />;
      default: return <Sparkles className="w-4 h-4 text-indigo-500" />;
    }
  };

  return (
    <section id="about" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Grid: Text & Profile Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Column: Information & Actions (7 Cols) */}
          <div className="lg:col-span-7">
            {/* Top Status & Campus Tag */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personalInfo.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
                <span>{personalInfo.institution}</span>
                <span className="text-slate-400 dark:text-slate-500">•</span>
                <span className="text-slate-500 dark:text-slate-400">Roll: {personalInfo.rollNo}</span>
              </div>
            </div>

            {/* Main Title & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">{personalInfo.name}</span>.
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-300">
                Product Strategist & Data Analyst.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              {personalInfo.bio}
            </p>

            {/* Primary Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-medium text-xs sm:text-sm hover:bg-indigo-600 dark:hover:bg-slate-200 transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Explore Case Studies & PRDs</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-medium text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 font-medium text-xs sm:text-sm hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Quick Contact & Profile Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {/* IITG Email */}
              <button
                onClick={() => copyToClipboard(personalInfo.emails[0].address, 'iitgEmail')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60 transition-colors cursor-pointer"
                title="Click to copy academic email"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-500" />
                <span>{personalInfo.emails[0].address}</span>
                {copiedItem === 'iitgEmail' ? (
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1"><Check className="w-3 h-3" /> Copied</span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-400" />
                )}
              </button>

              {/* Personal Email */}
              <button
                onClick={() => copyToClipboard(personalInfo.emails[1].address, 'personalEmail')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60 transition-colors cursor-pointer"
                title="Click to copy personal email"
              >
                <Mail className="w-3.5 h-3.5 text-purple-500" />
                <span>{personalInfo.emails[1].address}</span>
                {copiedItem === 'personalEmail' ? (
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1"><Check className="w-3 h-3" /> Copied</span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-400" />
                )}
              </button>

              {/* Phone */}
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60 transition-colors cursor-pointer"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>{personalInfo.phone}</span>
                {copiedItem === 'phone' ? (
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1"><Check className="w-3 h-3" /> Copied</span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-400" />
                )}
              </button>

              {/* GitHub Link */}
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn Link */}
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-500" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-xs sm:max-w-sm">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-emerald-500/20 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-500 -z-10" />

              {/* Profile Card Container */}
              <div className="relative rounded-[2rem] p-3 bg-white dark:bg-[#10121a] border border-slate-200/90 dark:border-slate-800/90 shadow-xl overflow-hidden">
                <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5] bg-slate-100 dark:bg-slate-900">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay for bottom text clarity */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                  {/* Floating Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 dark:bg-[#090a0f]/90 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          {personalInfo.name}
                        </div>
                        <div className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold">
                          B.Tech • IIT Guwahati
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-medium border border-emerald-200/60 dark:border-emerald-800/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Impact Stat Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-200/70 dark:border-slate-800/70">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl bg-white dark:bg-[#11131a] border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:border-indigo-400 dark:hover:border-indigo-600 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                  {getStatIcon(i)}
                </span>
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Metric #{i + 1}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
