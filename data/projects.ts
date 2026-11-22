export const projects = [
  {
    "slug": "guanin",
    "title": "Guanín — Remittances to Capital Markets",
    "section": "featured",
    "status": "Functional Demo · SIMV 2026",
    "accent": "gold",
    "short": "A tested interactive fintech demo that connects remittances from the Dominican diaspora with investment in the Dominican capital market.",
    "problem": "Dominican households receive nearly US$12 billion in remittances each year, but only a limited share is converted into formal long-term savings or capital-market investment.",
    "approach": "Designed Guanín as a neutral bridge between remittance companies and SIMV-authorized broker-dealers. The product lets senders automatically direct a percentage of each remittance into an investment account while the family receives the remainder through the normal channel.",
    "impact": [
      "645 remittance-receiving households analyzed, representing ~407,000 nationally",
      "Five household segments built with K-means and validated with Ward clustering (ARI = 0.49)",
      "Market potential estimated at US$58M–US$289M annually; base scenario US$139M",
      "Functional landing page and 11-screen interactive application",
      "Full walkthrough video and 10-page competition paper"
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
    "images": [
      "/projects/guanin-welcome.webp",
      "/projects/guanin-beneficiary.webp",
      "/projects/guanin-goal.webp",
      "/projects/guanin-remittance.webp",
      "/projects/guanin-result.webp",
      "/projects/guanin-home.webp"
    ],
    "links": {
      "Live Demo": "https://guanin-simv.netlify.app/",
      "Watch Video": "https://vimeo.com/1214156407?share=copy",
      "View Paper": "/documents/Guanin_SIMV_2026.pdf"
    },
    "video": "https://player.vimeo.com/video/1214156407",
    "methodology": [
      "Built seven household variables: remittance dependence, per-capita income, asset index, head-of-household labor formality, potential banking score, age and household size.",
      "Standardized the variables and applied K-means with k=5; used Ward hierarchical clustering as a robustness check.",
      "Calibrated survey remittance amounts to the official 2025 BCRD aggregate of US$11.8663B using one common calibration factor.",
      "Applied segment-specific investable percentages and three adoption scenarios to estimate total addressable market."
    ]
  },
  {
    "slug": "aml-plaft",
    "title": "Portal AML-PLAFT — Quantitative Decision Engine",
    "section": "featured",
    "status": "Professional · Private",
    "accent": "green",
    "short": "Production AML platform for 14,459 clients combining verified economic capacity, behavioral analytics, deterministic AML bands and auditable deployment on GCP.",
    "problem": "Define each client legitimization profile — the operational amount authorized under Law 155-17 — objectively, reproducibly and defensibly, while avoiding both over-restriction and excessive exposure.",
    "approach": "Led the technical modernization of a legacy AML portal, migrating the operational layer to GCP and introducing a deterministic quantitative decision engine fed by verified capacity, q95 transaction behavior, EWMA deposits, volatility, SHAP explanations and behavioral drift. Hard AML rules impose a ceiling by risk band.",
    "impact": [
      "14,459 clients processed",
      "2,846 SUBIR · 1,816 BAJAR · 616 MANTENER · 9,181 insufficient data",
      "Net operational-capacity change: +RD$31,255 MM with AML controls preserved",
      "Batch throughput improved from 5.7/min to 148/min (~26×)",
      "Full portfolio processed in ~100 minutes with 0 batch errors",
      "Immutable audit trail and reproducibility hash for every decision",
      "21 tables + 14 views + 7 stored procedures migrated to the new GCP operational layer"
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
      "Vertex AI"
    ],
    "images": [
      "/projects/aml-portal.webp"
    ],
    "links": {},
    "methodology": [
      "Verified economic capacity: reconcile declared KYC capacity with external/verified sources and retain the maximum defensible value.",
      "Behavior: q95 ticket size, EWMA deposits, EWMA volatility, SHAP top drivers and a behavioral-drift score.",
      "AML band: deterministic BAJA / MEDIA / ALTA / CRITICO rules based on factors such as PEP status, FATF jurisdiction, profile variation, structured activity and seasonality.",
      "Decision thresholds: raise if recommended > current × 1.10; lower if recommended < current × 0.90; otherwise maintain.",
      "Deployed as a multi-stage Docker image to Artifact Registry and Cloud Run using dedicated service accounts and controlled Vertex AI access."
    ]
  },
  {
    "slug": "statement-ai",
    "title": "Statement · AI — Bank Statement Intelligence",
    "section": "featured",
    "status": "AI · Document Intelligence",
    "accent": "blue",
    "short": "An end-to-end workflow that classifies bank statements, extracts structured transactions, validates accounting consistency and turns them into a client consumption profile and aggregate marketing insights.",
    "problem": "Bank statements arrive as PDFs or images with different layouts. Manual extraction and transaction classification is slow, inconsistent and difficult to scale.",
    "approach": "Built a multi-stage Gemini workflow with schema-constrained JSON, validation and model fallback. Transactions are classified through a catalog-first cascade, semantic similarity and Gemini with examples; new concepts are learned into the catalog.",
    "impact": [
      "Pilot volume: 31 clients · 303 documents · 99 bank statements · 6,565 transactions",
      "Automatic validation pass rate improved from 64% → 75% → 81% across iterations",
      "Catalog grew to 1,944 learned concepts across 10 groups",
      "On a long six-page statement, the stronger model captured 303/303 transactions and reconciled totals",
      "Three-page chunking reduced the long-document run to ~4.6 minutes",
      "Client 360 and aggregate Marketing views built on synthetic/demo data"
    ],
    "tools": [
      "Python",
      "Gemini 3.5 Flash-Lite",
      "Gemini 3.5 Flash",
      "Gemini 3.8 Flash",
      "LLMs",
      "RAG",
      "Structured JSON",
      "Validation",
      "Google Cloud"
    ],
    "images": [
      "/projects/statement-client360-a.webp",
      "/projects/statement-consumption.webp",
      "/projects/statement-market-a.webp",
      "/projects/statement-market-b.webp",
      "/projects/statement-client360-b.webp"
    ],
    "links": {},
    "methodology": [
      "Upload: client code + bank statements in PDF or image form; documents process in parallel.",
      "Classification: Gemini 3.5 Flash-Lite identifies document type.",
      "Extraction: fixed JSON schema; ≤3 pages use 3.5 Flash, longer documents use 3.8 Flash in three-page blocks.",
      "Validation: balance chain, bank totals and statement period. Failed checks trigger a stronger-model retry or human review.",
      "Transaction taxonomy: exact catalog match → semantic similarity ≥0.95 → Gemini with five examples for 0.80–0.95 → Gemini plus web lookup of merchant name below 0.80.",
      "Analytics: deduplication, currency separation, individual consumption profile and anonymized aggregate statistics for Marketing."
    ]
  },
  {
    "slug": "post-crash",
    "title": "Post-Crash Stock Alert System",
    "section": "featured",
    "status": "Personal · Quantitative Research",
    "accent": "navy",
    "short": "A rigorous attempt to test whether S&P 500 stocks falling more than 18% can be ranked for better two-week rebounds — including a negative out-of-sample result and a production forward test.",
    "problem": "A recent-sample signal appeared statistically significant. The real question was whether it survived point-in-time reconstruction, multiple-testing controls and replication on an earlier period.",
    "approach": "Ran seven preregistered iterations using purged walk-forward validation, grouped permutation tests, Benjamini-Hochberg correction, placebo tests, matched controls and a reconstructed point-in-time S&P 500 universe.",
    "impact": [
      "2018–2026 shortlist effect: +0.61 pp (p=0.039)",
      "2010–2018 point-in-time replication: −0.96 pp (p=0.90)",
      "Diagnosis: the model was learning features correlated with company survival, not rebound quality",
      "Negative result retained as the research conclusion",
      "Forward-test registry stores every candidate, not just emitted alerts",
      "Append-only hash chain, frozen model_id and separate outcome file for reproducibility"
    ],
    "tools": [
      "Python",
      "yfinance",
      "scikit-learn",
      "GitHub Actions",
      "Permutation Testing",
      "Walk-forward Validation",
      "Hash-chained Logging"
    ],
    "images": [
      "/projects/post-crash-email.webp"
    ],
    "links": {
      "GitHub": "https://github.com/alexenmgo/alertas-dip"
    },
    "methodology": [
      "Preregistered hypotheses and acceptance criteria before each iteration.",
      "Purged walk-forward design to reduce leakage across time.",
      "Permutation tests grouped by week/date and Benjamini-Hochberg correction for multiplicity.",
      "Point-in-time index membership reconstructed to eliminate survivorship bias.",
      "Production forward test records all candidate dips, the rank, model prediction, shortlist status and immutable hashes."
    ]
  },
  {
    "slug": "due-diligence-game",
    "title": "Due Diligence — Compliance Training Game",
    "section": "featured",
    "status": "Interactive Learning · Team Project",
    "accent": "lime",
    "short": "An interactive Genially game that places the learner in the role of a compliance officer reviewing fictional client files and making approve/reject decisions under time pressure.",
    "problem": "Traditional compliance training can be passive. The objective was to turn the new AML/CFT manual into a memorable decision-based learning experience.",
    "approach": "Created fictional cases, documents, client images, audio and decision consequences. Generative AI supported creation of synthetic materials, while the compliance manual provided the technical rules.",
    "impact": [
      "Interactive case-based learning experience",
      "Physical-person, self-employed and legal-entity file scenarios",
      "Incorrect decisions lead to narrative consequences",
      "Synthetic client documents and visuals created for training",
      "Built collaboratively by Alexis Gómez, Yunior Custodio and Shelsy Alix"
    ],
    "tools": [
      "Genially",
      "Generative AI",
      "Compliance",
      "Gamification",
      "Instructional Design",
      "Interactive Storytelling"
    ],
    "images": [
      "/projects/game-cover-clean.webp",
      "/projects/game-manual.webp"
    ],
    "links": {
      "Play Demo": "https://view.genially.com/68e7262b81a3cf59c46a98ed"
    },
    "methodology": [
      "Map manual requirements into reviewable case rules.",
      "Create synthetic files and supporting client documentation.",
      "Introduce decision pressure and consequences to reinforce attention to detail.",
      "Use interactive navigation and audio/visual elements to make training more immersive."
    ]
  },
  {
    "slug": "bi-dashboards",
    "title": "BI Dashboards — Compliance, Investor & Employee Analytics",
    "section": "internal",
    "status": "Business Intelligence · Visual",
    "accent": "cyan",
    "short": "A portfolio of operational dashboards for compliance monitoring, investor/client profiles and employee transaction analysis.",
    "problem": "Operational teams needed centralized, decision-ready views instead of fragmented spreadsheets and manual reporting.",
    "approach": "Designed dashboards around user workflows: executive risk monitoring, client/investor 360 views, employee-transaction monitoring and client portfolio/risk analytics.",
    "impact": [
      "Compliance and executive risk views",
      "Investor/client profile and portfolio views",
      "Employee transaction monitoring portal",
      "Client portfolio, PEP and risk overview",
      "Screenshots anonymized for public portfolio use"
    ],
    "tools": [
      "Power BI",
      "Looker Studio",
      "SQL",
      "BigQuery",
      "Excel",
      "Google Sheets",
      "Data Visualization"
    ],
    "images": [
      "/projects/bi-investor-profile-1.webp",
      "/projects/bi-investor-profile-2.webp",
      "/projects/bi-employees-portal.webp",
      "/projects/bi-clients-overview.webp"
    ],
    "links": {},
    "methodology": [
      "Translate business questions into KPIs and drill-down paths.",
      "Build reusable data transformations and calculated metrics.",
      "Design filters, client-level detail and executive summaries for non-technical users.",
      "Iterate with stakeholders and sanitize screenshots before external use."
    ]
  },
  {
    "slug": "vacation-app",
    "title": "Compliance Team Vacation App",
    "section": "internal",
    "status": "AppSheet · Internal Tool",
    "accent": "green",
    "short": "A low-code AppSheet tool created to organize vacation planning and improve team visibility around leave schedules.",
    "problem": "Vacation planning was difficult to coordinate in shared spreadsheets and required clearer visibility of team availability.",
    "approach": "Built a simple employee-facing AppSheet workflow to centralize leave information and make schedule review easier.",
    "impact": [
      "Centralized vacation planning",
      "Shared employee availability view",
      "Low-code internal process improvement"
    ],
    "tools": [
      "AppSheet",
      "Google Sheets",
      "Low-code Automation"
    ],
    "images": [
      "/projects/vacation-app.webp"
    ],
    "links": {},
    "methodology": [
      "Model team/leave data in Google Sheets.",
      "Build employee and request views in AppSheet.",
      "Use role-appropriate views to simplify review and schedule coordination."
    ]
  },
  {
    "slug": "poverty-prediction",
    "title": "Monetary Poverty Prediction with Machine Learning",
    "section": "research",
    "status": "Data Science · Public Policy",
    "accent": "blue",
    "short": "Machine-learning research using multidimensional household deprivation variables to predict monetary poverty and extreme poverty in the Dominican Republic.",
    "problem": "Income alone may not capture the full vulnerability of households. The research tested whether non-monetary characteristics can help predict monetary poverty and improve social-program targeting.",
    "approach": "Combined ENCFT microdata with SIUBEN-inspired multidimensional indicators and benchmarked Logistic Regression, Random Forest, SVM, XGBoost and Neural Networks.",
    "impact": [
      "164,737 household records across 2018, 2019, 2021 and early 2022",
      "15 independent multidimensional variables",
      "Random Forest performed best for general poverty with accuracy close to 80%",
      "XGBoost was especially informative for extreme poverty",
      "Key factors included overcrowding, educational delay, lack of health insurance and absence of household income"
    ],
    "tools": [
      "Python",
      "scikit-learn",
      "Random Forest",
      "XGBoost",
      "SVM",
      "Neural Networks",
      "Policy Analytics"
    ],
    "images": [],
    "links": {
      "View Paper": "/documents/Poverty_Prediction_ML_Dominican_Republic.pdf"
    },
    "methodology": [
      "Construct poverty targets from official per-capita income thresholds.",
      "Create multidimensional predictors for housing, services, education, labor status and social protection.",
      "Normalize predictors and address class imbalance during modeling.",
      "Compare multiple supervised-learning models and analyze feature importance/ROC performance."
    ]
  },
  {
    "slug": "law-28-01",
    "title": "Industrial Policy Evaluation — Law 28-01",
    "section": "research",
    "status": "Master of Public Policy · KDI",
    "accent": "navy",
    "short": "Evaluation of whether industrial incentives under Law 28-01 translated into economic and social development across the Dominican Republic’s seven border provinces.",
    "problem": "The border region remained one of the country’s least developed areas despite a long-running incentive regime intended to attract investment and reduce regional disparities.",
    "approach": "Combined quantitative comparison of demographic, social and economic indicators with qualitative evidence from interviews, news articles and official reports.",
    "impact": [
      "Seven border provinces evaluated",
      "Northern provinces showed stronger business formation and poverty/unemployment improvements than the south",
      "The law did not close social disparities with the rest of the country overall",
      "Infrastructure, human capital and lack of complementary public investment were major constraints",
      "Policy conclusion: fiscal incentives alone were insufficient for balanced regional development"
    ],
    "tools": [
      "Economic Analysis",
      "Public Policy",
      "Statistics",
      "Regional Development",
      "R",
      "Excel",
      "Data Visualization"
    ],
    "images": [],
    "links": {
      "View Paper": "/documents/Law_28_01_Border_Industrial_Policy.pdf"
    },
    "methodology": [
      "Compare border provinces before and after the policy with national benchmarks.",
      "Track poverty, HDI, health, education, infrastructure, labor structure, banking and exports.",
      "Use qualitative evidence to explain why outcomes diverged between northern and southern provinces.",
      "Translate empirical findings into policy recommendations around complementary public investment."
    ]
  },
  {
    "slug": "environmental-policy",
    "title": "Environmental Policy Research",
    "section": "research",
    "status": "Economic & Policy Research",
    "accent": "green",
    "short": "Selected research on environmental economics and policy, including Costa Rica’s Payments for Environmental Services model.",
    "problem": "How can environmental financing programs create measurable conservation incentives while limiting spillovers, free-riding and implementation gaps?",
    "approach": "Reviewed program design, financing mechanisms, outcomes and policy challenges using economic and institutional analysis.",
    "impact": [
      "Costa Rica PES / FONAFIFO case study",
      "Fuel-tax financing mechanism analyzed",
      "Policy design challenges including spillovers and free-rider effects"
    ],
    "tools": [
      "Environmental Economics",
      "Policy Analysis",
      "Research",
      "Data Interpretation"
    ],
    "images": [],
    "links": {},
    "methodology": [
      "Review institutional design and funding structure.",
      "Compare intended incentives with observed implementation outcomes.",
      "Identify design limitations and policy trade-offs."
    ]
  }
] as const;
