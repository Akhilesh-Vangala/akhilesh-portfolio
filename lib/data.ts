export const personalInfo = {
  name: "Akhilesh Vangala",
  email: "sv3129@nyu.edu",
  phone: "+1 (646) 772 9856",
  location: "New York, NY",
  linkedin: "https://linkedin.com/in/akhilesh-nyu",
  github: "https://github.com/Akhilesh-Vangala",
};

export const education = [
  {
    degree: "Master of Science, Data Science",
    institution: "New York University, Courant Institute of Mathematical Sciences",
    period: "Aug 2025 – May 2027",
    gpa: "4.0",
    courses: "Advanced Programming for Data Science, Optimization & Computational Linear Algebra, Machine Learning with Small Data, Machine Learning, Big Data",
  },
  {
    degree: "Bachelor of Technology, Computer Science (AI & ML)",
    institution: "Gandhi Institute of Technology and Management",
    period: "Aug 2021 – Jul 2025",
    gpa: "3.9",
    courses: "Probability & Statistics, Applied Statistics, Linear Algebra, Database Management Systems, Data Structures, Algorithms, Big Data Analytics, Machine Learning, AI Applications",
  },
];

export const skillColumns = [
  {
    label: "Languages",
    items: ["Python", "R", "Java", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    label: "ML & Data",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "XGBoost", "SHAP", "Optuna", "GNN", "RAG", "PySpark", "Pandas", "NumPy"],
  },
  {
    label: "Infrastructure",
    items: ["FastAPI", "Redis", "Kafka", "PostgreSQL", "SQLite", "AWS", "ONNX", "TensorRT", "Git", "Linux", "Docker"],
  },
];

export const allExperience = [
  // ── Research roles first ──
  {
    type: "research",
    role: "Graduate Research Assistant",
    org: "NYU Rory Meyers College of Nursing",
    advisor: "Prof. Han Chen",
    period: "Apr 2026 – Present",
    location: "New York, NY",
    bullets: [
      "Extended the HiFiMAP genome-wide IBD mapping pipeline for survival outcomes by replacing the linear mixed model null with a Cox proportional hazards mixed-effects model, simulating time-to-event data for 5,000 individuals with 70% event rate and 30% censoring.",
      "Cross-validated kinship matrix handling across coxme and GMMAT by fitting matched Gaussian mixed models via REML on a 5,000 × 5,000 sparse kinship matrix, confirming variance components agreed within 0.25% and residual correlation reached 1.0.",
      "Integrated martingale residuals and projection matrix components into fast variance-component score testing, running genome scans across 254,145 chromosome 22 SNP positions to identify significant IBD segments.",
    ],
    tags: ["R", "Cox PH Model", "HiFiMAP", "WGS", "Genomics", "REML"],
  },
  {
    type: "research",
    role: "Graduate Research Assistant",
    org: "Hochwagen Lab, New York University",
    advisor: "Prof. Andreas Hochwagen",
    period: "Jan 2026 – Present",
    location: "New York, NY",
    bullets: [
      "Built a custom ribosomal DNA variant analysis pipeline over 54 whole-genome sequencing samples (~1B reads/sample), detecting 528K+ variants across 13,365 positions at 5,000x+ depth for schizophrenia patient-control analysis.",
      "Resolved a 40x depth-underestimation flaw in standard tools by designing a strand-aware pileup parser with 8-column base-by-strand counts, strand-balance artifact filtering, and true-depth allele frequencies, increasing calls by 67x.",
      "Automated Mann-Whitney U hypothesis testing, FDR correction, EHR phenotype correlation, data validation, and publication-ready visualizations across 18S, 5.8S, and 28S ribosomal RNA regions.",
    ],
    tags: ["Python", "WGS", "rDNA Variants", "Bioinformatics", "FDR", "Schizophrenia"],
  },
  // ── Professional ──
  {
    type: "work",
    role: "Software Engineer Intern",
    org: "Dascase Technologies Inc.",
    advisor: "",
    period: "May 2024 – Jul 2024",
    location: "Hyderabad, India",
    bullets: [
      "Built and maintained backend services and API-driven workflows using Python, FastAPI, SQL, Git, and production-oriented engineering practices.",
      "Developed automation scripts and internal tooling to improve reliability, simplify repeated tasks, and support cleaner data handling across service workflows.",
      "Strengthened service quality through debugging, logging, testing, observability, and performance-focused iteration across internal and client-facing systems.",
    ],
    tags: ["FastAPI", "Python", "SQL", "Git", "Backend", "REST APIs"],
  },
];

// ── 4 featured projects ──
export const featuredProjects = [
  {
    title: "Customer Behavior & Fraud Intelligence Platform",
    problem: "Detect fraud across 500K+ daily transactions with low latency and explainable predictions.",
    result: "94% fraud detection accuracy, 85% reduction in false positives, and sub-50ms prediction latency.",
    how: "Fused Vision Transformers for document fraud with GCN, GraphSAGE, and GAT for transaction network reasoning. Kafka streaming, Redis caching, SHAP + Captum explainability.",
    tags: ["PyTorch", "Vision Transformer", "GNN", "Kafka", "FastAPI", "Redis", "SHAP"],
    metrics: ["94% accuracy", "85% ↓ false positives", "<50ms latency"],
    github: "https://github.com/Akhilesh-Vangala/FraudDetectionPlatform",
    demo: "",
  },
  {
    title: "ICU Vital Sign Deterioration Forecasting",
    problem: "Predict ICU patient deterioration 6 hours ahead using physiologic time series on MIMIC-III (40K+ patients).",
    result: "7.6% RMSE improvement over standalone LSTM and 14.7% over XGBoost, with temporal SHAP interpretability.",
    how: "Hybrid LSTM–ARIMA architecture with adaptive weighting. Time series cross-validation with patient-level splits to prevent leakage. Full clinical deterioration analysis.",
    tags: ["PyTorch", "LSTM", "ARIMA", "MIMIC-III", "SHAP", "Time Series"],
    metrics: ["7.6% RMSE ↑ vs LSTM", "14.7% ↑ vs XGBoost"],
    github: "https://github.com/Akhilesh-Vangala/ICUVitalSignForecasting",
    demo: "",
  },
  {
    title: "Underwater Debris Detection with Vision Transformers",
    problem: "Classify and localize underwater debris across 9,200+ images in 8 categories for environmental monitoring.",
    result: "96.2% accuracy, 94.3% mAP — 12 points above ResNet50 baseline — at 47.3 FPS with 21ms latency under TensorRT.",
    how: "CSWin Transformer with cross-shaped window attention and hierarchical feature extraction. ONNX export + TensorRT FP16 optimization for GPU deployment.",
    tags: ["CSWin Transformer", "PyTorch", "ONNX", "TensorRT", "FP16", "Computer Vision"],
    metrics: ["96.2% accuracy", "94.3% mAP", "47 FPS @ TensorRT"],
    github: "https://github.com/Akhilesh-Vangala/UnderwaterDebrisDetection",
    demo: "",
  },
  {
    title: "MedSeg LLM — CT Segmentation + Diagnostic Reports",
    problem: "Automate diagnostic report generation from CT scans to reduce radiologist workload.",
    result: "93% IoU on segmentation masks, 70% reduction in manual reporting effort, 40% runtime improvement.",
    how: "Mask R-CNN pipeline on 500+ CT scans for pixel-level segmentation, then fine-tuned LLaMA-2 on clinical findings. FastAPI deployment with intelligent caching and batch inference.",
    tags: ["Mask R-CNN", "LLaMA-2", "FastAPI", "Medical AI", "CT Scans", "PyTorch"],
    metrics: ["93% IoU", "70% ↓ manual effort", "40% ↓ runtime"],
    github: "https://github.com/Akhilesh-Vangala/MedSegLLM",
    demo: "",
  },
];

// ── More on GitHub row ──
export const moreProjects = [
  { title: "WorldCoder", sub: "Zero-shot 4D Blender scene editing", github: "https://github.com/Akhilesh-Vangala/WorldCoder" },
  { title: "PodPressAI", sub: "Newsletter → podcast RAG pipeline", github: "https://github.com/Akhilesh-Vangala" },
  { title: "SmartRent Manhattan", sub: "XGBoost rental price prediction, R² 0.92", github: "https://github.com/Akhilesh-Vangala" },
  { title: "Chest X-Ray Classifier", sub: "Multi-label ResNet50, 0.82 AUC-ROC", github: "https://github.com/Akhilesh-Vangala/ChestXRayMultiDiseaseClassification" },
];

// ── Hackathon badges ──
export const hackathonBadges = [
  { name: "Claude Builder Hackathon", org: "Columbia × NYU", project: "Nexus", desc: "Research advisor matching via dense embedding similarity." },
  { name: "NVIDIA × Dell Hackathon", org: "NYU Center for Data Science", project: "Stain AI", desc: "Applied AI for pathology stain analysis under competitive constraints." },
  { name: "Google Hackathon", org: "NYU Tandon", project: "NYC Street FOC", desc: "Urban infrastructure problem-solving with deployable solution design." },
];
