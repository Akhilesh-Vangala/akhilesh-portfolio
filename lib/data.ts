export const personalInfo = {
  name: "Akhilesh Vangala",
  title: "Data Scientist & ML Engineer",
  subtitle:
    "Graduate Student Researcher at NYU Courant Institute with expertise in Machine Learning, Deep Learning, Genomic Data Science, and Applied AI. I build scalable ML pipelines, production-ready inference systems, and research-grade bioinformatics tools. Passionate about turning complex data into actionable insight.",
  email: "sv3129@nyu.edu",
  phone: "+1 (646) 772 9856",
  location: "New York, NY",
  linkedin: "https://linkedin.com/in/akhilesh-nyu",
  github: "https://github.com/Akhilesh-Vangala",
  scholar: "",
};

export const education = [
  {
    degree: "Master of Science, Data Science",
    institution: "New York University, Courant Institute of Mathematical Sciences",
    period: "Aug 2025 – May 2027",
    gpa: "4.0 / 4.0",
    courses:
      "Advanced Programming for Data Science, Optimization and Computational Linear Algebra, Machine Learning with Small Data, Machine Learning, Big Data",
  },
  {
    degree: "Bachelor of Technology, Computer Science (AI & ML)",
    institution: "Gandhi Institute of Technology and Management",
    period: "Aug 2021 – Jul 2025",
    gpa: "3.9 / 4.0",
    courses:
      "Probability & Statistics, Applied Statistics, Linear Algebra, Database Management Systems, Data Structures, Algorithms, Big Data Analytics, Machine Learning, AI Applications",
  },
];

export const skills = [
  { name: "Python", level: 95 },
  { name: "PyTorch / TensorFlow", level: 90 },
  { name: "Machine Learning", level: 92 },
  { name: "Transformers / LLMs", level: 88 },
  { name: "FastAPI / Backend", level: 87 },
  { name: "Graph Neural Networks", level: 82 },
  { name: "Bioinformatics / Genomics", level: 80 },
  { name: "AWS / Cloud Deployment", level: 78 },
];

export const skillTags = [
  "Python", "R", "Java", "TypeScript", "SQL", "Bash",
  "PyTorch", "TensorFlow", "Hugging Face", "XGBoost", "SHAP", "Optuna",
  "FastAPI", "Redis", "Apache Kafka", "Microservices", "REST APIs",
  "CNNs", "LSTMs", "Transformers", "Vision Transformers", "GNNs",
  "ONNX", "TensorRT", "FP16", "Mixed Precision",
  "PostgreSQL", "SQLite", "ETL Pipelines", "Linux", "Git",
];

export const coreValues = [
  { title: "Research-Driven", sub: "Hypothesis to Insight" },
  { title: "Systems Thinker", sub: "Architecture Aware" },
  { title: "Impact Focused", sub: "Build What Matters" },
  { title: "Scalable by Design", sub: "Growth Ready Systems" },
  { title: "Experiment-Driven", sub: "Iterate Fast, Learn Fast" },
  { title: "Genomics Explorer", sub: "Data Meets Biology" },
  { title: "Graduate Researcher", sub: "Theory Meets Practice" },
  { title: "Team Player", sub: "Collaborative Edge" },
];

export const research = [
  {
    role: "Graduate Research Assistant",
    lab: "NYU Rory Meyers College of Nursing",
    advisor: "Prof. Han Chen",
    period: "Apr 2026 – Present",
    location: "New York, NY",
    bullets: [
      "Extended the HiFiMAP genome-wide IBD mapping pipeline for survival outcomes by replacing the linear mixed model null with a Cox proportional hazards mixed-effects model, simulating time-to-event data for 5,000 individuals with 70% event rate and 30% censoring.",
      "Cross-validated kinship matrix handling across coxme and GMMAT by fitting matched Gaussian mixed models via REML on a 5,000 × 5,000 sparse kinship matrix, confirming variance components agreed within 0.25% and residual correlation reached 1.0.",
      "Integrated martingale residuals and projection matrix components into fast variance-component score testing, running genome scans across 254,145 chromosome 22 SNP positions to identify significant IBD segments and generate association results.",
    ],
    tags: ["R", "Cox PH Model", "Genomics", "IBD Mapping", "HiFiMAP", "WGS", "REML"],
  },
  {
    role: "Graduate Research Assistant",
    lab: "Hochwagen Lab, New York University",
    advisor: "Prof. Andreas Hochwagen",
    period: "Jan 2026 – Present",
    location: "New York, NY",
    bullets: [
      "Built a custom ribosomal DNA variant analysis pipeline over 54 whole-genome sequencing samples (~1B reads/sample), detecting 528K+ variants across 13,365 positions at 5,000x+ depth for schizophrenia patient-control analysis.",
      "Resolved a 40x depth-underestimation flaw in standard tools by designing a strand-aware pileup parser with 8-column base-by-strand counts, strand-balance artifact filtering, and true-depth allele frequencies, increasing calls by 67x.",
      "Automated Mann-Whitney U hypothesis testing, FDR correction, EHR phenotype correlation, data validation, and publication-ready visualizations across 18S, 5.8S, and 28S ribosomal RNA regions.",
    ],
    tags: ["Python", "WGS", "rDNA Variants", "Bioinformatics", "Pileup Parsing", "FDR", "Schizophrenia"],
  },
];

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "Dascase Technologies Inc.",
    period: "May 2024 – Jul 2024",
    location: "Hyderabad, India",
    bullets: [
      "Built and maintained backend services and API-driven workflows using Python, FastAPI, SQL, Git, and production-oriented engineering practices.",
      "Developed automation scripts and internal tooling to improve reliability, simplify repeated tasks, and support cleaner data handling across service workflows.",
      "Strengthened service quality through debugging, logging, testing, observability, and performance-focused iteration across internal and client-facing systems.",
    ],
    tags: ["FastAPI", "Python", "SQL", "Git", "Backend", "REST APIs"],
  },
  {
    role: "Product Marketing Associate",
    company: "Monster Energy",
    period: "Aug 2024 – Aug 2025",
    location: "Hyderabad, India",
    bullets: [
      "Coordinated campaign execution, market activation, and field-level brand visibility initiatives across fast-moving consumer marketing operations.",
      "Tracked campaign performance, supported on-ground promotions, and improved execution quality through structured follow-up with cross-functional teams.",
    ],
    tags: ["Campaign Management", "Market Activation", "Analytics", "Cross-functional"],
  },
];

export const hackathons = [
  {
    name: "Claude Builder Hackathon",
    organizer: "Columbia Business School & NYU Collaboration",
    result: "Runner Up 🥈",
    project: "Nexus",
    description:
      "Research advisor matching platform that discovers faculty across institutions, verifies recent research through publications and grant activity, and matches students to advisors using dense embedding similarity. Added structured intent parsing, private preference signals, and an outreach workflow.",
    github: "https://github.com/Akhilesh-Vangala",
    tags: ["Embeddings", "RAG", "NLP", "Claude API", "Python"],
  },
  {
    name: "NVIDIA × Dell Hackathon",
    organizer: "NYU Center for Data Science",
    result: "Runner Up 🥈",
    project: "Stain AI",
    description:
      "Applied AI solution for pathology stain analysis developed under competitive hackathon constraints with emphasis on fast prototyping, iterative experimentation, and model-driven problem solving in a time-constrained environment.",
    github: "https://github.com/Akhilesh-Vangala",
    tags: ["NVIDIA", "Computer Vision", "PyTorch", "FastAPI"],
  },
  {
    name: "Google Hackathon",
    organizer: "NYU Tandon",
    result: "Runner Up 🥈",
    project: "NYC Street FOC",
    description:
      "Urban problem-solving project centered on rapid product iteration, usable system design, and deployable solution development for NYC street infrastructure under tight hackathon deadlines.",
    github: "https://github.com/Akhilesh-Vangala",
    tags: ["Google Cloud", "Maps API", "Python", "Streamlit"],
  },
];

export const projects = [
  {
    title: "Fraud Detection & Customer Intelligence Platform",
    description:
      "Multimodal fraud detection pipeline combining Vision Transformers for document/image fraud with GCN, GraphSAGE, and GAT for transaction network reasoning. Achieved 94% accuracy, 85% false-positive reduction, and sub-50ms latency over 500K+ daily transactions.",
    tags: ["PyTorch", "Vision Transformer", "GNN", "Kafka", "FastAPI", "Redis", "SHAP"],
    github: "https://github.com/Akhilesh-Vangala/FraudDetectionPlatform",
    metrics: ["94% accuracy", "85% ↓ false positives", "<50ms latency"],
  },
  {
    title: "ICU Vital Sign Deterioration Forecasting",
    description:
      "PyTorch time-series forecasting pipeline for 6-hour-ahead ICU deterioration prediction on MIMIC-III using 40K+ patient records. Hybrid LSTM–ARIMA architecture with SHAP temporal interpretability.",
    tags: ["PyTorch", "LSTM", "ARIMA", "MIMIC-III", "SHAP", "Time Series"],
    github: "https://github.com/Akhilesh-Vangala/ICUVitalSignForecasting",
    metrics: ["7.6% RMSE ↑ over LSTM", "14.7% ↑ over XGBoost"],
  },
  {
    title: "Chest X-Ray Multi-Disease Classification",
    description:
      "TensorFlow multi-label thoracic pathology classification over 112,120 NIH Chest X-Ray images across 14 disease classes. ResNet50 with focal loss, MixUp, CutMix, and GradCAM heatmaps.",
    tags: ["TensorFlow", "ResNet50", "GradCAM", "Focal Loss", "MixUp", "CutMix"],
    github: "https://github.com/Akhilesh-Vangala/ChestXRayMultiDiseaseClassification",
    metrics: ["0.82 mean AUC-ROC", "0.75 mean AP"],
  },
  {
    title: "Underwater Debris Detection with Vision Transformers",
    description:
      "CSWin Transformer-based underwater debris classifier over 9,200+ images and 8 classes. Integrated ONNX export and TensorRT FP16 for NVIDIA GPU deployment.",
    tags: ["CSWin Transformer", "PyTorch", "ONNX", "TensorRT", "FP16", "Computer Vision"],
    github: "https://github.com/Akhilesh-Vangala/UnderwaterDebrisDetection",
    metrics: ["96.2% accuracy", "94.3% mAP", "47.3 FPS"],
  },
  {
    title: "WorldCoder — 4D Scene Editing",
    description:
      "Pure zero-shot 4D scene editing framework in Blender for physically consistent space-time transformations. Multimodal code synthesis pipeline mapping start/goal videos into Blender edits.",
    tags: ["Blender", "Python", "Multimodal AI", "4D Editing", "Zero-Shot"],
    github: "https://github.com/Akhilesh-Vangala/WorldCoder",
    metrics: ["Zero-shot", "Physically consistent", "No training data"],
  },
  {
    title: "MedSeg LLM",
    description:
      "Medical vision-language workflow combining Mask R-CNN pixel-level CT scan segmentation with fine-tuned LLaMA-2 for automated diagnostic report generation. 93% IoU, 70% manual workload reduction.",
    tags: ["Mask R-CNN", "LLaMA-2", "FastAPI", "Medical AI", "CT Scans"],
    github: "https://github.com/Akhilesh-Vangala/MedSegLLM",
    metrics: ["93% IoU", "70% ↓ manual effort", "40% ↓ runtime"],
  },
  {
    title: "PodPressAI",
    description:
      "End-to-end RAG pipeline converting newsletters into long-form podcast scripts via semantic chunking, vector embeddings, and optimized LLM inference. FastAPI + Redis backend for 50+ newsletters daily.",
    tags: ["RAG", "FastAPI", "Redis", "LLM", "Vector Embeddings", "Python"],
    github: "https://github.com/Akhilesh-Vangala",
    metrics: ["35% ↓ generation time", "40% ↓ runtime", "50+ newsletters/day"],
  },
  {
    title: "SmartRent Manhattan",
    description:
      "End-to-end Manhattan rental price prediction over 3,539 listings. XGBoost selected over Random Forest and Linear Regression with RMSE 8.34 and R² 0.92 across 49 engineered features.",
    tags: ["XGBoost", "Feature Engineering", "Streamlit", "Python", "Regression"],
    github: "https://github.com/Akhilesh-Vangala",
    metrics: ["R² 0.92", "RMSE 8.34", "~$8 avg error"],
  },
];
