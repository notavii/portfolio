import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Heart, Users2, Sparkles } from 'lucide-react';

export default function Achievements() {
  const { achievements } = portfolioData;

  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <Trophy className="w-5 h-5 text-amber-500" />;
      case 1: return <Heart className="w-5 h-5 text-rose-500" />;
      case 2: return <Users2 className="w-5 h-5 text-indigo-500" />;
      default: return <Sparkles className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section id="achievements" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Campus Initiatives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Achievements & Extracurriculars
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Competitive athletics, community building, and flagship alumni relations at IIT Guwahati.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={item.title}
              className="flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-[#10121a] border border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-900 group-hover:scale-110 transition-transform">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <h4 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {item.organization}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
