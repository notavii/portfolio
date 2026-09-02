export const portfolioData = {
  personalInfo: {
    name: 'Avinash Raj',
    role: 'Product Strategist & Data Analyst',
    institution: 'Indian Institute of Technology, Guwahati',
    degree: 'B.Tech. - Civil Engineering',
    rollNo: '230104019',
    headline: 'Bridging Product Strategy, Data Intelligence & AI Systems',
    bio: 'Product-minded analyst from IIT Guwahati with hands-on experience building analytics frameworks for 30K+ daily orders, shipping SaaS MVPs, and designing AI product strategies. Obsessed with data-driven decision making, customer whitespace, and crisp execution.',
    phone: '+91-9955258372',
    emails: [
      { address: 'r.avinash@iitg.ac.in', label: 'IITG Academic' },
      { address: 'kumaravinash2204@gmail.com', label: 'Personal Email' }
    ],
    links: {
      github: 'https://github.com/notavii',
      linkedin: 'https://www.linkedin.com/in/avinashiitg/'
    },
    status: 'Available for Product & Analytics Roles',
    location: 'IIT Guwahati / New Delhi, India',
    avatar: '/profile.jpg'
  },

  heroStats: [
    { label: 'Daily Orders Tracked', value: '25K - 30K', sub: 'Pikndel analytics across 150+ brands' },
    { label: 'Campus Users Served', value: '8,000+', sub: 'IIT Guwahati digital student ecosystem' },
    { label: 'Shipments & Corridors', value: '144K+', sub: 'Graph-enhanced ETA model (-33% MAE)' },
    { label: 'Production Dashboards', value: '15+', sub: 'SQL anomaly detection & rider telemetry' }
  ],

  education: [
    {
      degree: 'B.Tech. Major in Civil Engineering',
      institution: 'Indian Institute of Technology, Guwahati',
      period: '2023 - Present',
      highlight: 'Active in Student Web Committee, ACE VP & Consulting & Analytics Club'
    },
    {
      degree: 'Senior Secondary (Class XII)',
      institution: 'Central Board of Secondary Education (CBSE)',
      period: '2022',
      highlight: 'Strong focus on Mathematics, Physics & Computer Applications'
    },
    {
      degree: 'Secondary School (Class X)',
      institution: 'Central Board of Secondary Education (CBSE)',
      period: '2020',
      highlight: 'Academic Excellence distinction'
    }
  ],

  experience: [
    {
      company: 'Pikndel',
      role: 'Data Analyst Intern',
      period: 'May 2026 - June 2026',
      location: 'Onsite, New Delhi',
      type: 'Internship',
      points: [
        'Owned end-to-end analytics framework, processing 25-30K daily orders across 150+ brands, 100+ clients, and 50+ stakeholders.',
        'Built a real-time tracking system considering 12 KPIs across 10+ cities, 30+ hubs, 120+ LM centers, and 1,500+ LM riders.',
        'Launched 15+ dashboards with SQL-based anomaly detection, driving leadership to rider visibility for strategic planning.'
      ],
      skills: ['SQL', 'Power BI', 'Real-time KPIs', 'Operations Analytics', 'Anomaly Detection', 'Supply Chain Telemetry'],
      metrics: ['25K-30K Daily Orders', '150+ Brands', '12 KPIs', '15+ Dashboards']
    },
    {
      company: 'Trove Ventures Pvt. Ltd. (Snukio)',
      role: 'Market Research Intern',
      period: 'June 2026 - July 2026',
      location: 'Remote',
      type: 'Internship',
      points: [
        'Built a tri-source VoC data model (120+ data points) across customers, retailers and sellers to strengthen Snukio’s GTM.',
        'Engineered a category-opportunity model, benchmarking demand across 9 sports against retailer inventory and price tiers.',
        'Translated insights into an ICP-led GTM playbook — pricing architecture and channel-mix — for Snukio’s market launch.'
      ],
      skills: ['Market Research', 'VoC Modeling', 'GTM Strategy', 'Category Benchmarking', 'Pricing Architecture', 'ICP Strategy'],
      metrics: ['120+ VoC Data Points', '9 Sports Categories', 'ICP-Led Launch Playbook']
    }
  ],

  projects: [
    {
      id: 'zomato-business',
      title: 'Zomato Business Intelligence & Expansion Opportunity',
      subtitle: 'Market Opportunity Index & Functional SaaS MVP',
      org: 'Personal Project',
      date: 'July 2026',
      badgeText: 'Dashboard | PRD | SaaS MVP',
      category: 'Product & Analytics',
      summary: 'Identified an underserved cuisine gap by analyzing 51,717 Zomato listings using SQL across 12,000+ Bangalore restaurants. Developed a weighted Opportunity Index in Power BI DAX across 90+ localities, and shipped a comprehensive PRD and functional SaaS MVP on Lovable.',
      highlights: [
        'Analyzed 51,717 restaurant records across 12,000+ unique eateries in 90+ Bangalore micro-markets.',
        'Engineered DAX-driven Opportunity Index combining density, cuisine deficit, and average spend.',
        'Shipped full Product Requirement Document (PRD) and live interactive SaaS tool on Lovable.'
      ],
      artifacts: {
        hasPRD: true,
        prdFileName: 'zomato_business_prd.pdf',
        hasDashboard: true,
        dashboardFileName: 'zomato_powerbi_dashboard.pbix',
        hasMVP: true,
        mvpUrl: 'https://zomato-business.lovable.app/'
      },
      prdOverview: {
        problem: 'New restaurateurs in Bangalore face a ~60% failure rate within the first 18 months due to blind spot expansion, high competition density, and misaligned cuisine-market fit.',
        personas: [
          { role: 'Independent Restaurateur', goal: 'Identify low-competition, high-margin localities for specialty cuisine.' },
          { role: 'Cloud Kitchen Network Lead', goal: 'Optimize kitchen clusters based on delivery radius demand deficits.' }
        ],
        opportunityFormula: 'Opportunity Index = (Locality Order Volume Density * 0.40) + (Cuisine Supply Deficit * 0.35) + (Average Ticket Size Ratio * 0.25)',
        coreFeatures: [
          'Interactive Micro-Market Heatmap (90+ Bangalore pin-codes)',
          'Cuisine Supply-Demand Deficit Calculator',
          'Estimated ROI & Payback Period Simulator',
          'Competitor Footprint Breakdown'
        ],
        metrics: 'Target 70% reduction in site selection research time, 15% higher initial inquiry conversion.'
      },
      tags: ['SQL', 'Power BI', 'DAX', 'PRD', 'Lovable', 'SaaS MVP', 'Market Opportunity', 'Product Analytics']
    },
    {
      id: 'finguide-ai',
      title: 'FinGuide AI — Product Strategy & Trust Architecture',
      subtitle: 'AI Financial Mentor for Fragmented Young Adult Journeys',
      org: 'Entrepreneurship Cell, IIT Guwahati',
      date: 'June 2026',
      badgeText: 'Strategy Pitch Deck',
      category: 'AI Product Strategy',
      summary: 'Mapped financial literacy & trust gaps via competitive analysis & defined an AI Financial Mentor for fragmented journeys. Designed a 6-use-case MVP—budgeting, savings, emergency funds, credit, investments, and goals with explainable support, prototyping 11 core screens with a 3-step onboarding flow.',
      highlights: [
        'Conducted user research across 150+ Gen-Z and millennial early earners to map trust friction points.',
        'Structured 6-pillar MVP architecture with explainability badges (SHAP-inspired rationales).',
        'Engineered 11 core screens in Figma and defined North Star Metric with AI-trust KPIs.'
      ],
      artifacts: {
        hasDeck: true,
        deckUrl: 'https://drive.google.com/file/d/1iCpBZhgXpPYxk3NUhzyLGa1GzYL3OHar/view?usp=drive_link'
      },
      deckOverview: {
        marketOpportunity: 'Young professionals struggle with disparate banking apps, complex financial jargon, and fear of automated investment tools with zero transparent reasoning.',
        valueProposition: 'An explainable AI financial companion that guides users from day-to-day budgeting to long-term wealth creation with conversational rationales.',
        mvpPillars: [
          { name: '1. Intelligent Budgeting', desc: 'Real-time category spending thresholds with predictive overrun warnings.' },
          { name: '2. Micro-Savings Sweeps', desc: 'Automated round-up deposits into liquid yield pools.' },
          { name: '3. Emergency Guardrails', desc: 'Personalized 3-6 month liquidity buffer calculator and milestone tracker.' },
          { name: '4. Credit Health Simulator', desc: 'Actionable score improvement roadmap and utilization alerts.' },
          { name: '5. Fractional Goal Investments', desc: 'Risk-profile matched SIP baskets aligned to life goals.' },
          { name: '6. Explainable AI Engine', desc: 'Every recommendation includes a Why this recommendation? breakdown.' }
        ],
        northStar: 'Monthly Active Goal Achievers (MAGA) & 85%+ user verification score on AI recommendations.'
      },
      tags: ['AI Product Management', 'Pitch Deck', 'Product Strategy', 'Figma Prototyping', 'User Research', 'Trust UX', 'North Star Metric']
    },
    {
      id: 'eta-prediction',
      title: 'Graph-Enhanced ETA Prediction & Logistics Intelligence',
      subtitle: 'NetworkX Bottleneck Detection & XGBoost Transit Modeling',
      org: 'Consulting & Analytics Club, IIT Guwahati',
      date: 'May 2026',
      badgeText: 'GitHub | Graph AI',
      category: 'Analytics & Machine Learning',
      summary: 'Designed a graph-enhanced ETA prediction platform processing 144,867 shipments across 1,500+ hubs & 2,500+ corridors. Identified critical logistics bottlenecks using NetworkX centrality, SLA breaches, & corridor risk to prioritize interventions, cutting MAE by 33.17% and RMSE by 16.13%.',
      highlights: [
        'Graph modeling of 144,867 historical shipment dispatches across 1,500+ hubs and 2,500+ routes.',
        'NetworkX betweenness and degree centrality to pinpoint high-risk transit bottlenecks.',
        'Trained XGBoost regression model achieving -33.17% MAE and -16.13% RMSE error reduction.'
      ],
      artifacts: {
        hasGithub: true,
        githubUrl: 'https://github.com/notavii/Delivery-ETA-optimization'
      },
      techOverview: {
        architecture: 'Multi-layer pipeline extracting spatial network topology, temporal dwell times, weather patterns, and route transit variance.',
        graphFeatures: [
          'Betweenness Centrality: Identifies chokepoint hubs causing systemic delays.',
          'Corridor Risk Index: Scores delay volatility across 2,500+ transit pairs.',
          'Hub Dwell Variance: Predicts hub turnaround time under surge loads.'
        ],
        modelResults: [
          { metric: 'Mean Absolute Error (MAE)', reduction: '33.17% Improvement', baselineVsModel: 'Baseline: 4.82 hrs -> Model: 3.22 hrs' },
          { metric: 'Root Mean Squared Error (RMSE)', reduction: '16.13% Improvement', baselineVsModel: 'Baseline: 7.15 hrs -> Model: 6.00 hrs' }
        ]
      },
      tags: ['Python', 'XGBoost', 'NetworkX', 'Graph Theory', 'Logistics Optimization', 'Pandas', 'ETA Prediction', 'Supply Chain AI']
    },
    {
      id: 'valueforge',
      title: 'ValueForge — AI-Driven CPG Differentiation & Strategy',
      subtitle: 'Market Whitespace Detection with CSI, MDP Simulation & SHAP',
      org: 'Entrepreneurship Cell, IIT Guwahati',
      date: 'May 2025',
      badgeText: 'Strategy Pitch Deck',
      category: 'AI & Market Strategy',
      summary: 'Mapped CPG differentiation gaps via user research, shaping a persona-led workflow for brand managers to find whitespace. Designed ValueForge with Category Saturation Index (CSI), MDP simulation & SHAP explainability to turn trends into differentiated product strategy targeting 25% launch-win lift.',
      highlights: [
        'User research mapping brand manager cognitive load and blind spots in trend evaluation.',
        'Formulated Category Saturation Index (CSI) and Markov Decision Process launch simulators.',
        'Integrated SHAP (SHapley Additive exPlanations) for auditability and R&D risk reduction.'
      ],
      artifacts: {
        hasDeck: true,
        deckUrl: 'https://drive.google.com/file/d/1USE61D67qwy5tYjZv1wh2Gw18LYfrVYG/view?usp=sharing'
      },
      deckOverview: {
        problem: 'Over 80% of new CPG product launches fail within 12 months because brand teams rely on lagging market trends, resulting in copycat products in saturated categories.',
        solution: 'ValueForge ingests unstructured consumer reviews, social chatter, and shelf scanner data to quantify whitespace and simulate launch outcomes before committing capital.',
        coreFramework: [
          { pillar: 'Category Saturation Index (CSI)', impact: 'Measures competitive density vs consumer sentiment gaps.' },
          { pillar: 'Markov Decision Process (MDP)', impact: 'Simulates multi-stage brand rollout scenarios under varying price points.' },
          { pillar: 'SHAP Explainability Engine', impact: 'Translates black-box ML predictions into executive-ready attribution charts.' }
        ],
        targetKPIs: [
          '25% higher product launch success rate',
          '65% faster concept screening cycle',
          '+ R&D concept prototyping cost savings',
          '80% explainable AI audit compliance'
        ]
      },
      tags: ['Product Strategy', 'CPG Innovation', 'SHAP Explainability', 'MDP Simulation', 'User Research', 'Pitch Deck', 'Market Intelligence']
    }
  ],

  leadership: [
    {
      title: 'Vice-President',
      organization: 'Association of Civil Engineering (ACE), IIT Guwahati',
      period: 'May 2026 - Present',
      type: 'Campus Leadership',
      description: [
        'Spearheading a team of 5+ pre-final year and 30+ sophomores, representing over 600+ Civil engineering students at IITG.',
        'Coordinating 12+ institutional collaborations, while managing annual financials of the two-tiered student-led organization.',
        'Driving 100k+ content impressions and boosting social engagement by 120%, strengthening ACE’s targeted brand visibility.'
      ],
      impactStats: [
        { label: 'Students Represented', value: '600+' },
        { label: 'Institutional Collabs', value: '12+' },
        { label: 'Social Engagement Lift', value: '+120%' }
      ]
    },
    {
      title: 'Senior App Developer & Product Lead',
      organization: 'Student Web Committee (SWC), IIT Guwahati',
      period: 'April 2025 - May 2026',
      type: 'Product & Tech Leadership',
      description: [
        'Led end-to-end product management for apps and websites serving 8,000+ IIT Guwahati students across campus everyday.',
        'Analyzed user feedback and usage data analytics to drive continuous product optimization and elevate the user experience.'
      ],
      impactStats: [
        { label: 'Daily Campus Users', value: '8,000+' },
        { label: 'Platform Scope', value: 'Web & Mobile' },
        { label: 'Optimization Cycle', value: 'Continuous' }
      ]
    },
    {
      title: 'Execution Head (Sports Head)',
      organization: 'Alcheringa, Cultural Fest, IIT Guwahati',
      period: 'Jan 2026 - Feb 2026',
      type: 'Operations & Event Leadership',
      description: [
        'Led venue operations as Sports Head, organizing 7+ sports competitions with 200+ participants ensuring smooth execution.',
        'Coordinated with PR and INFRA teams to ensure fair gameplay, smooth logistics & timely wrap-ups for all matches daily.'
      ],
      impactStats: [
        { label: 'Sports Tournaments', value: '7+' },
        { label: 'Active Athletes', value: '200+' },
        { label: 'Execution Rate', value: '100% On-Time' }
      ]
    }
  ],

  skills: {
    product: [
      { name: 'Product Discovery', level: 'Advanced', desc: 'Identifying unmet customer needs and validation' },
      { name: 'User Research', level: 'Advanced', desc: 'Interviews, surveys, persona creation & journey mapping' },
      { name: 'Competitive Analysis', level: 'Advanced', desc: 'Market benchmarking, positioning & whitespace detection' },
      { name: 'Product Metrics & KPIs', level: 'Advanced', desc: 'North Star design, cohort tracking, retention metrics' },
      { name: 'RICE & MoSCoW Frameworks', level: 'Proficient', desc: 'Systematic feature prioritization and roadmap scoring' },
      { name: 'Jobs-To-Be-Done (JTBD)', level: 'Advanced', desc: 'Outcome-driven customer needs framing' },
      { name: 'Agile & Scrum', level: 'Proficient', desc: 'Sprint planning, backlog grooming, cross-functional syncs' },
      { name: 'PRD & Feature Specs', level: 'Advanced', desc: 'Comprehensive technical and functional specifications' }
    ],
    analytics: [
      { name: 'MySQL & Advanced SQL', level: 'Advanced', desc: 'Complex joins, window functions, CTEs, anomaly detection' },
      { name: 'Python (Pandas, NumPy)', level: 'Proficient', desc: 'Data wrangling, statistical modeling, automation' },
      { name: 'Power BI & DAX', level: 'Advanced', desc: 'Custom measures, opportunity indices, executive dashboards' },
      { name: 'Tableau', level: 'Proficient', desc: 'Visual analytics, geospatial heatmaps, trend exploration' },
      { name: 'Advanced Excel', level: 'Advanced', desc: 'Pivot models, financial analysis, scenario modeling' },
      { name: 'Statistical Testing & EDA', level: 'Proficient', desc: 'Distribution analysis, hypothesis testing, correlation' }
    ],
    aiAndTech: [
      { name: 'Generative AI & LLM Systems', level: 'Proficient', desc: 'Prompt engineering, RAG concepts, AI product workflows' },
      { name: 'AI Product Management', level: 'Advanced', desc: 'Evaluation metrics, trust UX, explainable AI (XAI)' },
      { name: 'REST APIs & Webhooks', level: 'Proficient', desc: 'API design, payload parsing, endpoint testing' },
      { name: 'Machine Learning (XGBoost)', level: 'Proficient', desc: 'Supervised regression, feature engineering' },
      { name: 'NetworkX (Graph Analytics)', level: 'Proficient', desc: 'Network topology, centrality, bottleneck scoring' }
    ],
    toolsAndDesign: [
      { name: 'Figma', level: 'Proficient', desc: 'Wireframing, interactive prototypes, design systems' },
      { name: 'Lovable', level: 'Proficient', desc: 'Rapid fullstack AI SaaS prototyping' },
      { name: 'Canva', level: 'Advanced', desc: 'Executive decks, infographics, brand collateral' },
      { name: 'Google Analytics', level: 'Proficient', desc: 'Funnel analytics, bounce rates, event tracking' },
      { name: 'GitHub Basics', level: 'Proficient', desc: 'Version control, branch workflows, collaborative builds' }
    ],
    keyCourses: [
      { name: 'Product Matters 6.0', org: 'Product School / PM Community' },
      { name: 'Summer Analytics', org: 'IIT Guwahati Analytics Club' },
      { name: 'Fundamental Analysis Bootcamp', org: 'Finance & Markets' },
      { name: 'Introductory Options & Derivatives', org: 'Quantitative Trading' }
    ]
  },

  achievements: [
    {
      year: '2025',
      title: 'Silver Medal in Hockey',
      organization: 'Spardha (Inter-Hostel Championship, IIT Guwahati)',
      desc: 'Represented hostel team as a key starter, displaying teamwork, high endurance, and disciplined sportsmanship.'
    },
    {
      year: '2024',
      title: 'Fresher Onboarding & Community Lead',
      organization: 'Social Service Club, IIT Guwahati',
      desc: 'Organized campus orientation, smooth logistical handover events, and community service drives for incoming freshers.'
    },
    {
      year: '2024',
      title: 'Smriti Organizer (Silver Jubilee Alumni Meet)',
      organization: 'SAIL (Student Alumni Interaction Linkage, IITG)',
      desc: 'Orchestrated IIT Guwahati’s first-ever Silver Jubilee Alumni Meet and managed webinars connecting students with global leaders.'
    },
    {
      year: '2023',
      title: 'Outreach & Sponsorship Acquisition',
      organization: 'Alcheringa, Cultural Fest, IIT Guwahati',
      desc: 'Spearheaded corporate outreach, strategic sponsor pitching, and partnership management across key regional sectors.'
    }
  ]
};
