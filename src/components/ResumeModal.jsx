import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personalInfo, education, experience, projects, leadership, skills } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0f1117] rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header with Print & Close */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              Official Resume Preview
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
              IIT Guwahati Format
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume View */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto font-sans text-slate-800 dark:text-slate-200 space-y-6 text-xs sm:text-sm bg-white dark:bg-[#0c0d12]">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                {personalInfo.name}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Roll No: {personalInfo.rollNo} • {personalInfo.degree} • {personalInfo.institution}
              </p>
            </div>

            <div className="text-xs space-y-0.5 text-slate-600 dark:text-slate-400 text-left sm:text-right">
              <div>{personalInfo.phone}</div>
              <div>{personalInfo.emails[0].address}</div>
              <div>{personalInfo.emails[1].address}</div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Education
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">
                    <th className="py-1">Degree / Certificate</th>
                    <th className="py-1">Institute / Board</th>
                    <th className="py-1 text-right">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {education.map((edu, idx) => (
                    <tr key={idx}>
                      <td className="py-1.5 font-medium text-slate-900 dark:text-white">{edu.degree}</td>
                      <td className="py-1.5">{edu.institution}</td>
                      <td className="py-1.5 text-right">{edu.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between font-bold text-slate-900 dark:text-white">
                    <span>{exp.company} | {exp.role}</span>
                    <span className="text-slate-500 text-xs font-normal">{exp.period} | {exp.location}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Projects & Case Studies
            </h2>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between font-bold text-slate-900 dark:text-white">
                    <span>{proj.title}</span>
                    <span className="text-slate-500 text-xs font-normal">{proj.date} • {proj.org}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {proj.highlights.map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Positions of Responsibility
            </h2>
            <div className="space-y-3">
              {leadership.map((pos, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between font-bold text-slate-900 dark:text-white">
                    <span>{pos.title}, {pos.organization}</span>
                    <span className="text-slate-500 text-xs font-normal">{pos.period}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {pos.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Skills & Key Courses Taken
            </h2>
            <div className="space-y-1.5 text-xs">
              <div><span className="font-bold text-slate-900 dark:text-white">Product:</span> {skills.product.map(s => s.name).join(', ')}</div>
              <div><span className="font-bold text-slate-900 dark:text-white">Analytics:</span> {skills.analytics.map(s => s.name).join(', ')}</div>
              <div><span className="font-bold text-slate-900 dark:text-white">AI & Technical:</span> {skills.aiAndTech.map(s => s.name).join(', ')}</div>
              <div><span className="font-bold text-slate-900 dark:text-white">Tools:</span> {skills.toolsAndDesign.map(s => s.name).join(', ')}</div>
              <div><span className="font-bold text-slate-900 dark:text-white">Key Courses:</span> {skills.keyCourses.map(c => c.name).join(', ')}</div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/50 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Avinash Raj • B.Tech Civil Engineering, IIT Guwahati
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
