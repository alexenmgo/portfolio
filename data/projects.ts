export const projects = [
  {
    "slug": "guanin",
    "title": "Guanín — Remittances to Capital Markets Platform",
    "section": "featured",
    "status": "Public / Competition",
    "summary": "Fintech proposal for the SIMV 2026 competition connecting remittances from the Dominican diaspora with local capital-market investment.",
    "problem": "How can part of the remittances received by Dominican households be converted into long-term savings and investment without disrupting the existing remittance flow?",
    "approach": "Segmented remittance-receiving households using ENCFT microdata, estimated investable capacity by segment, calibrated survey amounts to the official 2025 remittance aggregate, and designed a functional product prototype.",
    "highlights": [
      "645 recipient households in the analytical sample, representing ~407,000 nationally",
      "7 household-level features and K-means with k=5",
      "Ward hierarchical validation with ARI = 0.49",
      "Estimated annual market potential: US$58M–US$289M",
      "Base scenario: US$139M",
      "Landing page + 11-screen interactive app + walkthrough video"
    ],
    "tools": [
      "Python",
      "pandas",
      "scikit-learn",
      "scipy",
      "matplotlib",
      "Jupyter/Colab",
      "HTML/CSS/JS",
      "Netlify"
    ],
    "links": {
      "demo": "",
      "github": "",
      "video": "",
      "caseStudy": ""
    },
    "images": []
  },
  {
    "slug": "aml-plaft",
    "title": "Portal AML-PLAFT — Quantitative Decision Engine",
    "section": "featured",
    "status": "Professional / Private",
    "summary": "Production AML platform for 14,459 clients, combining verified economic capacity, behavioral analytics and deterministic AML rules to support auditable profile decisions.",
    "problem": "Define client legitimization profiles objectively, reproducibly and defensibly under Law 155-17, while avoiding both over-restriction and over-exposure.",
    "approach": "Built a deterministic engine combining verified financial capacity, q95 ticket behavior, EWMA deposits, EWMA volatility, SHAP explanations, behavioral drift and hard AML bands.",
    "highlights": [
      "14,459 clients processed",
      "2,846 SUBIR · 1,816 BAJAR · 616 MANTENER · 9,181 insufficient data",
      "Net operational capacity change: +RD$31,255 MM",
      "Batch throughput improved from 5.7/min to 148/min (~26×)",
      "Full portfolio processed in ~100 minutes with 0 errors",
      "Immutable audit log and reproducibility hash per decision",
      "Hybrid GCP architecture, Cloud Run deployment and Vertex AI integration"
    ],
    "tools": [
      "Python",
      "pandas",
      "NumPy",
      "scikit-learn",
      "SHAP",
      "BigQuery",
      "Flask",
      "Docker",
      "Cloud Run",
      "Artifact Registry",
      "IAM",
      "Vertex AI Gemini"
    ],
    "links": {
      "demo": "",
      "github": "",
      "video": "",
      "caseStudy": ""
    },
    "images": []
  },
  {
    "slug": "post-crash",
    "title": "Post-Crash Stock Alert System — Quantitative Validation",
    "section": "featured",
    "status": "Personal / Research",
    "summary": "Research system testing whether stocks in the S&P 500 that fall more than 18% can be ranked to identify better two-week rebounds.",
    "problem": "A signal looked statistically meaningful in recent data, but the key question was whether it actually generalized out of sample.",
    "approach": "Ran seven preregistered iterations with purged walk-forward evaluation, grouped permutation tests, Benjamini-Hochberg correction, matched controls, placebo tests and a point-in-time index universe.",
    "highlights": [
      "Initial 2018–2026 effect: +0.61 pp, p=0.039",
      "Replication on 2010–2018 reversed to −0.96 pp",
      "Diagnosis: survivorship-correlated features rather than rebound quality",
      "Negative result retained as the final conclusion",
      "Production forward-testing system with append-only hash-chained logging"
    ],
    "tools": [
      "Python",
      "yfinance",
      "scikit-learn",
      "GitHub Actions",
      "Statistical Testing",
      "Walk-forward Validation"
    ],
    "links": {
      "demo": "",
      "github": "",
      "video": "",
      "caseStudy": ""
    },
    "images": []
  },
  {
    "slug": "bank-statements-ai",
    "title": "AI-Powered Bank Statement Analysis",
    "section": "featured",
    "status": "Professional / Private",
    "summary": "Document-intelligence workflow for extracting, structuring and validating information from bank statements using LLMs and rule-based checks.",
    "problem": "Bank statements arrive in varied layouts and formats, making manual extraction slow and inconsistent.",
    "approach": "Benchmarked model variants, used structured JSON outputs, added accounting validations and designed fallback logic for inconsistent or invalid results.",
    "highlights": [
      "LLM-based extraction from unstructured PDFs",
      "Structured financial fields and validation rules",
      "Fallback model strategy when outputs fail checks",
      "Train/test separation considerations by client and bank"
    ],
    "tools": [
      "Python",
      "LLMs",
      "NLP",
      "GCP",
      "Document AI",
      "Gemini",
      "JSON Validation"
    ],
    "links": {
      "demo": "",
      "github": "",
      "video": "",
      "caseStudy": ""
    },
    "images": []
  },
  {
    "slug": "cici",
    "title": "Cici — Conversational AI Agent",
    "section": "featured",
    "status": "In Progress / Internal Collaboration",
    "summary": "Conversational AI experience developed jointly with Marketing to answer educational client questions and trigger workflows.",
    "problem": "Provide clients with a more natural, interactive way to access educational information and initiate selected workflows.",
    "approach": "Built around Vertex AI Live with live avatar, function calling, APIs, Google Search and a React/TypeScript front end deployed on Cloud Run.",
    "highlights": [
      "Live voice/video conversational experience",
      "Function calling and workflow triggering",
      "Collaboration with Marketing on tone and client-facing content",
      "Still in development; not yet public"
    ],
    "tools": [
      "Vertex AI Live",
      "Gemini Live",
      "Function Calling",
      "APIs",
      "React",
      "TypeScript",
      "Cloud Run"
    ],
    "links": {
      "demo": "",
      "github": "",
      "video": "",
      "caseStudy": ""
    },
    "images": []
  },
  {
    "slug": "compliance-game",
    "title": "Compliance Training Game",
    "section": "featured",
    "status": "Internal / Learning Experience",
    "summary": "Gamified compliance training experience that uses simulated cases and decision-making scenarios to reinforce AML/CTF concepts.",
    "problem": "Traditional compliance training can be passive and disconnected from the decisions employees face in practice.",
    "approach": "Created an interactive case-based experience with fictional documents, client scenarios, inconsistencies and decision consequences.",
    "highlights": [
      "Scenario-based compliance training",
      "Fictional documents and client cases",
      "Decision paths and consequences",
      "Designed as an internal learning experience"
    ],
    "tools": [
      "Gamification",
      "Compliance",
      "Instructional Design",
      "Interactive Prototyping"
    ],
    "links": {
      "demo": "",
      "github": "",
      "video": "",
      "caseStudy": ""
    },
    "images": []
  },
  {
    "slug": "bi-dashboards",
    "title": "BI Dashboards — Compliance, Investor & HR",
    "section": "internal",
    "status": "Professional / Visual",
    "summary": "Business intelligence dashboards built for different operational areas, with ready-to-show screenshots for the portfolio.",
    "problem": "Teams needed clearer, centralized views of operational indicators instead of fragmented manual reporting.",
    "approach": "Designed interactive dashboards tailored to Compliance, investor/client analysis and HR use cases.",
    "highlights": [
      "Compliance monitoring views",
      "Investor/client analytics views",
      "HR management indicators",
      "Portfolio-ready screenshots available"
    ],
    "tools": [
      "Power BI",
      "Looker Studio",
      "SQL",
      "Excel",
      "Google Sheets",
      "Data Visualization"
    ],
    "links": {
      "demo": "",
      "github": "",
      "video": "",
      "caseStudy": ""
    },
    "images": [
      "/projects/bi-compliance.jpg",
      "/projects/bi-investor.jpg",
      "/projects/bi-hr.jpg"
    ]
  },
  {
    "slug": "suggestion-box",
    "title": "Anonymous Suggestion Box",
    "section": "internal",
    "status": "Internal Tool",
    "summary": "Anonymous internal feedback tool designed to centralize suggestions while preserving confidentiality.",
    "problem": "Create a simple channel for collecting internal ideas and feedback without exposing the identity of the contributor.",
    "approach": "Designed a lightweight internal workflow focused on accessibility, confidentiality and centralized review.",
    "highlights": [
      "Anonymous submissions",
      "Centralized feedback",
      "Internal process improvement"
    ],
    "tools": [
      "Workflow Design",
      "Automation",
      "Google Workspace"
    ],
    "links": {
      "demo": "",
      "github": "",
      "video": "",
      "caseStudy": ""
    },
    "images": []
  },
  {
    "slug": "vacation-app",
    "title": "Compliance Team Vacation App",
    "section": "internal",
    "status": "Internal Tool",
    "summary": "AppSheet application for managing and visualizing vacation planning within the Compliance team.",
    "problem": "Vacation coordination required a clearer shared view of requests and team availability.",
    "approach": "Built a low-code internal app to organize requests and improve visibility of team schedules.",
    "highlights": [
      "AppSheet app",
      "Internal schedule visibility",
      "Process standardization"
    ],
    "tools": [
      "AppSheet",
      "Google Sheets",
      "Low-code Automation"
    ],
    "links": {
      "demo": "",
      "github": "",
      "video": "",
      "caseStudy": ""
    },
    "images": []
  },
  {
    "slug": "metamap-address",
    "title": "MetaMap Address Automation",
    "section": "internal",
    "status": "Internal Automation",
    "summary": "Automation that retrieves the most recent verified address associated with a client ID and writes it into an operational spreadsheet.",
    "problem": "Manual lookup of identity-verification records was repetitive and time-consuming.",
    "approach": "Used client ID lookup, recent verification selection and automatic transfer of the address field into Google Sheets.",
    "highlights": [
      "Automated lookup",
      "Recent verification logic",
      "Spreadsheet integration"
    ],
    "tools": [
      "Google Apps Script",
      "APIs",
      "Google Sheets",
      "KYC Automation"
    ],
    "links": {
      "demo": "",
      "github": "",
      "video": "",
      "caseStudy": ""
    },
    "images": []
  },
  {
    "slug": "fatca-crs",
    "title": "FATCA / CRS Reporting Automation",
    "section": "internal",
    "status": "Regulatory Automation",
    "summary": "Data preparation and validation workflow supporting FATCA/CRS reporting and XML generation.",
    "problem": "Regulatory submissions require strict formatting and completeness across multiple fields.",
    "approach": "Implemented checks for identifiers, reportable jurisdiction, ISO country codes, dates and other submission-critical fields before XML generation.",
    "highlights": [
      "Field validation",
      "Country-code checks",
      "Date-format controls",
      "Excel-to-XML workflow"
    ],
    "tools": [
      "Python",
      "Excel",
      "XML",
      "Data Validation",
      "Regulatory Reporting"
    ],
    "links": {
      "demo": "",
      "github": "",
      "video": "",
      "caseStudy": ""
    },
    "images": []
  },
  {
    "slug": "poverty-prediction",
    "title": "Monetary Poverty Prediction — ENFT 2018–2022",
    "section": "research",
    "status": "Academic / Data Science",
    "summary": "Machine-learning research comparing multiple classification approaches for predicting monetary poverty in the Dominican Republic.",
    "problem": "Explore whether household-level characteristics can support useful predictive classification of monetary poverty.",
    "approach": "Compared Logistic Regression, Decision Trees, Random Forest, SVM, XGBoost and Neural Networks.",
    "highlights": [
      "Recall ~0.66",
      "AUC ~0.69",
      "Multiple model benchmark",
      "Social-policy application"
    ],
    "tools": [
      "Python",
      "scikit-learn",
      "XGBoost",
      "SVM",
      "Random Forest",
      "Neural Networks"
    ],
    "links": {
      "demo": "",
      "github": "",
      "video": "",
      "caseStudy": ""
    },
    "images": []
  },
  {
    "slug": "law-28-01",
    "title": "Industrial Policy Evaluation — Law 28-01",
    "section": "research",
    "status": "Academic / Public Policy",
    "summary": "Comparative evaluation of industrial policy in the Dominican Republic's border region.",
    "problem": "Assess whether tax incentives alone were sufficient to generate stronger development outcomes in border provinces.",
    "approach": "Analyzed poverty, HDI, health, infrastructure, banking and exports across seven border provinces using public administrative sources.",
    "highlights": [
      "Seven border provinces",
      "Multi-dimensional regional analysis",
      "Finding: incentives without complementary public investment limited impact"
    ],
    "tools": [
      "Economic Analysis",
      "Public Policy",
      "Statistics",
      "R",
      "Excel",
      "Data Visualization"
    ],
    "links": {
      "demo": "",
      "github": "",
      "video": "",
      "caseStudy": ""
    },
    "images": []
  },
  {
    "slug": "environmental-policy-research",
    "title": "Environmental & Policy Research",
    "section": "research",
    "status": "Research",
    "summary": "Selected policy research on environmental economics, including Costa Rica's Payments for Environmental Services model.",
    "problem": "Understand how environmental financing mechanisms translate into policy outcomes and what implementation challenges remain.",
    "approach": "Reviewed financing structures, program results and economic-policy issues such as spillovers and free-rider effects.",
    "highlights": [
      "Costa Rica PES / FONAFIFO",
      "Fuel-tax financing",
      "Policy-effectiveness analysis"
    ],
    "tools": [
      "Policy Analysis",
      "Environmental Economics",
      "Research",
      "Data Interpretation"
    ],
    "links": {
      "demo": "",
      "github": "",
      "video": "",
      "caseStudy": ""
    },
    "images": []
  }
] as const;
