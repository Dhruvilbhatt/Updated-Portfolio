// All site text lives here. Edit this file to update the portfolio.

export const LINKS = {
  resume: "/Dhruvil-Bhatt-Resume.pdf",
  linkedin: "https://www.linkedin.com/in/dhruvil-bhatt-uci/",
  github: "https://github.com/Dhruvilbhatt",
  email: "mailto:bhattdb@uci.edu",
  vllmBlog: "https://blog.vllm.ai/2025/11/20/vllm-plugin-system.html",
  sagemakerTuning: "https://docs.aws.amazon.com/sagemaker/latest/dg/generative-ai-inference-recommendations-get-started.html",
  sagemakerLora: "https://docs.aws.amazon.com/sagemaker/latest/dg/generative-ai-inference-recommendations-adapters.html",
};

export const HERO = {
  eyebrow: "LLM inference performance engineer @ AWS",
  name: "Dhruvil Bhatt",
  headline: "I make large models faster and cheaper to serve.",
  blurb: "Software engineer on LLM inference at AWS (Bedrock, SageMaker AI). Before that, HPC research.",
};

// streamed by the hero "vllm serve" panel
export const STREAM = {
  prompt: "who is dhruvil?",
  promptTokens: 6,
  tokens: [
    "I", " work", " on", " the", " layer", " between", " the", " model", " and", " the", " GPU", ":",
    " Triton", " kernel", " auto", "tuning", ",", " vLLM", ",", " multi", "-Lo", "RA", " serving", ",",
    " and", " GPU", " bench", "marking", ".",
  ],
};

export const STATS = [
  { value: "6-8x", label: "faster kernel tuning" },
  { value: "65%", label: "higher throughput at fixed latency" },
  { value: "15+", label: "LLM families on my vLLM framework" },
  { value: "21x", label: "parallel speedup in HPC research" },
];

const SURROGATE =
  "I implemented a surrogate-assisted search (an evolution-based algorithm with a random-forest surrogate) " +
  "that cuts kernel tuning time 6 to 8x compared with exhaustive (brute-force) search.";

// "What I build": one entry per layer of the inference stack, top = closest to the user.
// visual: "autotuner" shows the heatmap; bars render a small benchmark chart.
export const STACK = [
  {
    id: "traffic",
    layer: "Clients & traffic",
    what: "requests, SLOs, TTFT / TPOT",
    color: "var(--blue)",
    title: "Benchmarking tuned vs. untuned kernels",
    body: "An agentic benchmarking harness that compares tuned and untuned kernels across model families and input/output token profiles, plus cross-region benchmarking infrastructure that cut latency bias 30% and compute cost 40%.",
    facts: ["up to 65% at fixed latency", "~20% on MoE"],
    visual: "bench",
    bars: [
      { label: "untuned", pct: 60, value: "1.00x" },
      { label: "tuned · Gemma-4 26B MoE", pct: 72, value: "1.20x" },
      { label: "tuned · Gemma-3 27B multi-LoRA", pct: 99, value: "1.65x" },
    ],
    note: "throughput at fixed latency",
  },
  {
    id: "scheduler",
    layer: "Scheduling & batching",
    what: "continuous batching, KV cache, adapter residency",
    color: "var(--purple)",
    title: "Multi-LoRA inference recommendations",
    body: "One endpoint serving a base model plus up to 10 adapters. GPU-memory-aware capacity planning (padded-rank slots, TP-aware sharding) trades adapter residency against KV cache, and every configuration is benchmarked on live GPUs.",
    facts: ["GA in 8 regions", "up to 10 adapters per endpoint"],
    visual: "lora",
    link: { href: LINKS.sagemakerLora, text: "launch docs" },
  },
  {
    id: "engine",
    layer: "Serving engine",
    what: "vLLM, model containers",
    color: "var(--green)",
    title: "vLLM plugin system",
    body: "A version-aware extension framework on vLLM's plugin architecture that applies version-guarded patches across LLM families on Bedrock, plus a unified container build-and-validation pipeline for Bedrock and SageMaker.",
    facts: ["15+ LLM families", "30% fewer Bedrock containers"],
    visual: "plugin",
    link: { href: LINKS.vllmBlog, text: "read the vLLM blog post" },
  },
  {
    id: "kernels",
    layer: "Kernels",
    what: "Triton / CUDA, tiles, warps, stages",
    color: "var(--orange)",
    title: "Triton kernel tuning in SageMaker AI",
    body: "Instance-specific kernel tuning, shipped in SageMaker AI's model optimization API. " + SURROGATE,
    facts: ["6-8x faster tuning", "shipped in a public API"],
    visual: "autotuner",
    link: { href: LINKS.sagemakerTuning, text: "public docs" },
  },
  {
    id: "hardware",
    layer: "GPU & memory",
    what: "HBM, KV memory, parallel computing",
    color: "var(--red)",
    title: "GPU memory and parallel computing",
    body: "Memory modeling for multi-adapter serving, so only instances that fit a customer's adapters are recommended. Earlier, in HPC research, I parallelized synthetic plasma image generation with OpenMP and MPI.",
    facts: ["21x speedup", "Wiley journal + Springer chapter"],
    visual: "parallel",
  },
];

// Experience, newest first. Dates are display strings.
export const EXPERIENCE = [
  {
    org: "Amazon Web Services", unit: "Bedrock / SageMaker AI", role: "Software Engineer, Machine Learning (LLM inference)",
    dates: "Oct 2024 - present", where: "USA", current: true, tags: ["LLM inference", "GPU kernels"],
    points: [
      "Shipped instance-specific Triton kernel tuning in SageMaker AI's model optimization API, with a surrogate-assisted search that cuts tuning time 6 to 8x versus brute force.",
      "Built an agentic benchmarking harness: up to 65% higher throughput at fixed latency on Gemma-3 27B (multi-LoRA), ~20% on Gemma-4 26B (MoE).",
      "Architected multi-LoRA support in SageMaker AI's inference recommendations, GA in 8 regions.",
      "Designed a version-aware vLLM extension framework across 15+ LLM families (vLLM blog), and a unified Bedrock/SageMaker container pipeline with 30% fewer containers.",
    ],
  },
  {
    org: "Miaplaza Inc.", role: "Software Developer", dates: "May 2024 - Oct 2024", where: "USA",
    points: [
      "Enhanced interactivity and modernized key features of the Miaplaza education platform for students in grades 4-10.",
      "Built a parent-facing content management portal with streamlined access to student progress data.",
      "Built responsive, high-performance pages in React and Tailwind CSS, reducing page load times and contributing to a 10% month-over-month increase in user visits.",
    ],
  },
  {
    org: "QBurst", role: "Software Developer Intern", dates: "Feb 2024 - May 2024", where: "USA",
    points: [
      "Developed a scalable, cloud-based grocery store portal in React, TypeScript and Redux.",
      "Optimized API calls between the UI, MongoDB and a .NET backend for a 30% performance improvement.",
      "Managed deployments through Azure DevOps pipelines, with SonarCloud quality checks.",
    ],
  },
  {
    org: "Synaptics", role: "Software Developer Intern", dates: "Jun 2023 - Sep 2023", where: "Irvine, CA",
    points: [
      "Engineered an Azure-based calling application integrating Microsoft Graph API, MSAL and Microsoft Teams with Synaptics headsets for audio testing.",
      "Added speech recognition to generate speech-to-text transcripts for headset debugging.",
      "Built a host-side application that parses binary HCI-formatted UART data and extracts debug messages.",
      "Produced a clean production-level RTOS image for the gdaero SDK using static analysis tools, and presented the project to the CEO and to partners in Japan.",
    ],
  },
  {
    org: "HuddleUp", role: "Software Engineer Intern", dates: "Mar 2022 - Jun 2022", where: "New York (remote)",
    points: [
      "Built a custom learning management system with the frontend team, which companies use to train employees with their own modules, workspaces, course channels and quizzes.",
      "Built the pages for adding channels, challenges and quizzes to a workspace.",
    ],
  },
  {
    org: "DA-IICT Research Lab", role: "Machine Learning Researcher", dates: "Jan 2022 - Jun 2022", where: "Gandhinagar, India",
    tags: ["machine learning", "explainable AI"],
    points: [
      "Led a team of 3 researchers to curate the largest open-source corporate credit-rating dataset (7,805 data points, published on Kaggle) through an ETL pipeline, 4x larger than the previous largest public dataset.",
      "Devised time-independent strategies using explainable AI (decision trees) on financial ratios to help firms attain investment-grade ratings, with a mean precision of 95%.",
      "Visualized the decision-tree model with GraphViz; the paper was published on SSRN and ranked among its top-10 downloaded papers in explainable AI.",
    ],
  },
  {
    org: "Institute for Plasma Research", role: "Distributed & Parallel Computing Researcher", dates: "Oct 2020 - Aug 2021", where: "Ahmedabad, India",
    tags: ["HPC", "data for ML"],
    points: [
      "Designed an efficient serial C++ algorithm for synthetic plasma images using ray tracing and linear programming (to solve quartic equations).",
      "Built a wavelength-independent forward model with a multi-source noise model (Gaussian, Poisson, salt-and-pepper) to produce realistic tokamak plasma images for ML-assisted tomographic reconstruction; published as a Springer book chapter.",
      "Parallelized the algorithm with OpenMP and MPI for a 21x speedup (one synthetic image in under 0.65 s); published in Concurrency and Computation: Practice and Experience (Wiley).",
    ],
  },
  {
    org: "IIT Bombay", role: "Software Engineer Fellow", dates: "Apr 2020 - Jun 2020", where: "Mumbai, India",
    points: [
      "Built custom plugins to migrate content from Drupal 6 and 7 to Drupal 8 with the content-migration team.",
      "Migrated websites using the Drush command line and the Drupal UI.",
    ],
  },
];

export const EDUCATION = [
  {
    school: "University of California, Irvine", where: "Irvine, CA, USA",
    degree: "Master of Computer Science", gpa: "3.95 / 4.0", dates: "Sep 2022 - Dec 2023",
    coursework: "Advanced Algorithms, Machine Learning, Parallel & Distributed Computing, Computer Security",
  },
  {
    school: "DA-IICT", where: "Gandhinagar, India",
    degree: "B.Tech, Information & Communication Technology", minor: "minor in Computational Science",
    gpa: "3.8 / 4.0", dates: "Aug 2018 - May 2022",
    coursework: "High-Performance & Parallel Computing, Computer Architecture, Linear Programming, Data Structures, Databases, Computer Networks, Machine Learning",
  },
];

export const TEACHING = [
  { org: "UC Irvine", dates: "Apr 2023 - Dec 2023", what: "Teaching Assistant: STATS 8, MSWE 245P (GUI programming), MSWE 250P (web programming)" },
  { org: "DA-IICT", dates: "Aug 2021 - Dec 2021", what: "Teaching Assistant: Computational Finance (labs and coding contests)" },
];

export const PAPERS = [
  {
    venue: "vLLM blog · 2025",
    title: "vLLM plugin system: a version-aware extension framework for multi-family LLM serving",
    authors: "featured on vLLM's LinkedIn page",
    note: "15+ LLM families on Bedrock",
    href: LINKS.vllmBlog,
  },
  {
    venue: "Wiley · CCPE",
    title: "Parallel algorithm for synthetic image generation with application to tokamak plasma diagnostics",
    authors: "K. Delwadia, D. Bhatt, S. Purohit, B. Chaudhury",
    note: "21x speedup with OpenMP and MPI",
    href: "https://onlinelibrary.wiley.com/doi/10.1002/cpe.7217",
  },
  {
    venue: "Springer · ICMC 2023",
    title: "Computational modeling of noisy plasma images applicable to tokamak imaging diagnostics for visible and X-ray emissions",
    authors: "D. Bhatt, K. Delwadia, S. Purohit, B. Chaudhury",
    note: "first author",
    href: "https://link.springer.com/chapter/10.1007/978-981-99-3080-7_13",
  },
  {
    venue: "SSRN · top-10 by downloads",
    title: "Understanding and attaining an investment grade rating in the age of explainable AI",
    authors: "R. Makwana, D. Bhatt, K. Delwadia, A. Shah, B. Chaudhury",
    note: "largest open credit-rating dataset",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4163283",
  },
];

export const REVIEWING = [
  { title: "ACM EuroSys 2027", detail: "Artifact Evaluation Committee" },
  { title: "USENIX ATC 2026", detail: "Artifact Evaluation Committee" },
  { title: "AI and Ethics (Springer Nature)", detail: "Reviewer, 2026" },
];

export const SKILLS = [
  "CUDA", "Triton", "PyTorch", "vLLM", "SGLang", "TensorRT-LLM", "Nsight", "C/C++", "Python", "MPI / OpenMP", "AWS",
];
