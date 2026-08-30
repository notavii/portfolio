import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Users, CheckCircle2 } from 'lucide-react';

export default function Leadership() {
  const { leadership } = portfolioData;

  return (
    <section id="leadership" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Leadership & Campus Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Positions of Responsibility
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Managing student organizations, shipping campus digital products for 8,000+ users, and leading cultural & sports operations at IIT Guwahati.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadership.map((pos) => (
            <div
              key={pos.title}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#10121a] border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400/60 dark:hover:border-indigo-600/60 shadow-xs hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {pos.type}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    {pos.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {pos.title}
                </h3>
                <h4 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-5">
                  {pos.organization}
                </h4>

                {/* Impact Stat Badges */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 mb-5 text-center">
                  {pos.impactStats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-4">
                  {pos.description.map((desc, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
