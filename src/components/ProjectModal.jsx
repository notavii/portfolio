import React, { useState } from 'react';
import { GithubIcon } from './SocialIcons';
import { 
  X, 
  ExternalLink, 
  FileText, 
  Presentation, 
  
  Sparkles, 
  CheckCircle2, 
  Target, 
  Users, 
  Cpu, 
  Zap,
  Download
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-md">
      {/* Modal Card Backdrop */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-[#0f1117] rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{project.org}</span>
              <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
              <span className="text-xs text-slate-400 dark:text-slate-500">{project.date}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 sm:px-8 pt-4 pb-2 border-b border-slate-200/60 dark:border-slate-800/60 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Executive Summary
          </button>

          {project.prdOverview && (
            <button
              onClick={() => setActiveTab('prd')}
              className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'prd'
                  ? 'border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PRD & Feature Specs</span>
            </button>
          )}

          {project.deckOverview && (
            <button
              onClick={() => setActiveTab('deck')}
              className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'deck'
                  ? 'border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Pitch Deck & Strategy</span>
            </button>
          )}

          {project.techOverview && (
            <button
              onClick={() => setActiveTab('tech')}
              className={`pb-2.5 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'tech'
                  ? 'border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>ML & Graph Architecture</span>
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Project Description
                </h4>
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Core Engineering & Product Accomplishments
                </h4>
                <div className="grid gap-2.5">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/70">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Artifacts & Action Buttons */}
              <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      Associated Project Artifacts
                    </span>
                  </div>
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    PRD / Deck Ready
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-1">
                  {project.artifacts?.hasPRD && (
                    <a
                      href={`/docs/${project.artifacts.prdFileName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-xs"
                    >
                      <FileText className="w-4 h-4 text-indigo-500" />
                      <span>Download PRD (PDF)</span>
                      <Download className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}

                  {project.artifacts?.hasDeck && (
                    <a
                      href={`/docs/${project.artifacts.deckFileName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-xs"
                    >
                      <Presentation className="w-4 h-4 text-purple-500" />
                      <span>Download Pitch Deck (PDF)</span>
                      <Download className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  )}

                  {project.artifacts?.hasMVP && (
                    <a
                      href={project.artifacts.mvpUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors shadow-xs"
                    >
                      <Zap className="w-4 h-4" />
                      <span>View Live MVP on Lovable</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.artifacts?.hasGithub && (
                    <a
                      href={project.artifacts.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold transition-colors shadow-xs"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                  💡 Tip: You can inspect the full interactive PRD, Deck pillars, and equations in the tabs above!
                </p>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRD BREAKDOWN */}
          {activeTab === 'prd' && project.prdOverview && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/60">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-semibold text-xs mb-1">
                  <Target className="w-4 h-4" />
                  <span>Problem Statement</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {project.prdOverview.problem}
                </p>
              </div>

              {/* Personas */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Target User Personas</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.prdOverview.personas.map((p, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                        {p.role}
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {p.goal}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Opportunity Index Formula */}
              <div className="p-4 rounded-xl bg-slate-900 text-white font-mono text-xs space-y-2">
                <div className="text-slate-400 text-[11px] uppercase tracking-wider font-sans font-bold">
                  Weighted Opportunity Index (Power BI DAX Algorithm)
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-indigo-300 overflow-x-auto">
                  {project.prdOverview.opportunityFormula}
                </div>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Shipped PRD Feature Scope
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.prdOverview.coreFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/70 text-xs font-medium text-slate-800 dark:text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Metrics */}
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/60">
                <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300 mb-1">
                  North Star & Success Metrics
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  {project.prdOverview.metrics}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: DECK & STRATEGY BREAKDOWN */}
          {activeTab === 'deck' && project.deckOverview && (
            <div className="space-y-6">
              {/* Problem / Value Prop */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Market Friction & Whitespace
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    {project.deckOverview.marketOpportunity || project.deckOverview.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
                    Value Proposition & AI Edge
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    {project.deckOverview.valueProposition || project.deckOverview.solution}
                  </p>
                </div>
              </div>

              {/* MVP Pillars */}
              {project.deckOverview.mvpPillars && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    6-Use Case MVP Architecture (FinGuide AI)
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.deckOverview.mvpPillars.map((p, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-xs font-bold text-slate-900 dark:text-white block mb-1">
                          {p.name}
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ValueForge Framework */}
              {project.deckOverview.coreFramework && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Core Algorithmic Frameworks (ValueForge)
                  </h4>
                  <div className="space-y-2.5">
                    {project.deckOverview.coreFramework.map((f, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-0.5">
                          {f.pillar}
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300">
                          {f.impact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Target KPIs */}
              {project.deckOverview.targetKPIs && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Target Impact & Strategy KPIs
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {project.deckOverview.targetKPIs.map((kpi, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/60 text-center">
                        <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                          {kpi}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: TECH & ML ARCHITECTURE */}
          {activeTab === 'tech' && project.techOverview && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Pipeline Architecture
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {project.techOverview.architecture}
                </p>
              </div>

              {/* Graph Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  NetworkX Graph Centrality Features
                </h4>
                <div className="space-y-2">
                  {project.techOverview.graphFeatures.map((g, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                      {g}
                    </div>
                  ))}
                </div>
              </div>

              {/* Model Benchmark Cards */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  XGBoost Regression Model Validation
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.techOverview.modelResults.map((res, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/60">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mb-1">
                        {res.metric}
                      </span>
                      <div className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-1">
                        {res.reduction}
                      </div>
                      <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400">
                        {res.baselineVsModel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
          <span className="text-xs text-slate-400 dark:text-slate-500">
            Avinash Raj • Portfolio Case Studies
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
