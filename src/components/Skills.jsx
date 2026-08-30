import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Code, 
  BarChart, 
  Brain, 
  Palette, 
  GraduationCap, 
  BookOpen, 
  Layers
} from 'lucide-react';

export default function Skills() {
  const { skills, education } = portfolioData;
  const [activeTab, setActiveTab] = useState('product');

  const categories = [
    { id: 'product', label: 'Product Strategy', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'analytics', label: 'Analytics & SQL', icon: <BarChart className="w-3.5 h-3.5" /> },
    { id: 'aiAndTech', label: 'AI & Machine Learning', icon: <Brain className="w-3.5 h-3.5" /> },
    { id: 'toolsAndDesign', label: 'Tools & Prototyping', icon: <Palette className="w-3.5 h-3.5" /> },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Technical & Domain Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills, Frameworks & Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive matrix of product methodologies, quantitative data stacks, machine learning tools, and formal coursework.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'bg-white dark:bg-[#10121a] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {skills[activeTab]?.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-white dark:bg-[#10121a] border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-xs hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {skill.name}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/50">
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Education & Key Coursework Dual Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-slate-200/70 dark:border-slate-800/70">
          
          {/* Education Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#10121a] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-indigo-500" />
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </span>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
                    {edu.institution}
                  </div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500">
                    {edu.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Coursework Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#10121a] border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Key Courses & Bootcamps
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {skills.keyCourses.map((course) => (
                  <div
                    key={course.name}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 space-y-1"
                  >
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      {course.name}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                      {course.org}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40">
              <span className="text-xs font-semibold text-indigo-900 dark:text-indigo-300 block mb-1">
                Continuous Learning & Execution
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                Regularly applying product management frameworks (RICE, JTBD) and modern analytics stacks to high-scale problems.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
