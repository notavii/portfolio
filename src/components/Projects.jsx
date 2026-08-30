import React, { useState } from 'react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { 
  FileText, 
  Presentation, 
  
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  FolderCode
} from 'lucide-react';

export default function Projects({ onSelectProject }) {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => {
        if (filter === 'Product & Strategy') return p.category.includes('Product') || p.category.includes('Strategy');
        if (filter === 'Analytics & AI') return p.category.includes('Analytics') || p.category.includes('Machine Learning') || p.category.includes('AI');
        return true;
      });

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3">
              <FolderCode className="w-3.5 h-3.5" />
              <span>Case Studies & Technical Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Projects & Product Artifacts
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Real-world product requirement documents (PRDs), strategy pitch decks, and data analytics models built at IIT Guwahati and industry internships.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            {['All', 'Product & Strategy', 'Analytics & AI'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#10121a] border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400/80 dark:hover:border-indigo-500/80 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              
              <div>
                {/* Top Badge & Organization */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                    {project.org}
                  </span>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                    <Sparkles className="w-3 h-3" />
                    <span>{project.badgeText}</span>
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-6">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <span className="text-indigo-500 font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-400 font-medium">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-semibold hover:bg-indigo-600 dark:hover:bg-slate-200 transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Inspect Case Study & Artifacts</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.artifacts?.hasPRD && (
                    <a
                      href={`/docs/${project.artifacts.prdFileName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-200/60 dark:border-slate-800/60"
                      title="Download / View PRD"
                    >
                      <FileText className="w-4 h-4 text-indigo-500" />
                    </a>
                  )}

                  {project.artifacts?.hasDeck && (
                    <a
                      href={`/docs/${project.artifacts.deckFileName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-200/60 dark:border-slate-800/60"
                      title="Download / View Strategy Pitch Deck"
                    >
                      <Presentation className="w-4 h-4 text-purple-500" />
                    </a>
                  )}

                  {project.artifacts?.hasMVP && (
                    <a
                      href={project.artifacts.mvpUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors border border-indigo-200/60 dark:border-indigo-800/60"
                      title="View Live SaaS MVP on Lovable"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.artifacts?.hasGithub && (
                    <a
                      href={project.artifacts.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-200/60 dark:border-slate-800/60"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
