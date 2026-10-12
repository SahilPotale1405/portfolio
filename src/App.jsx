import { useState } from 'react'

const PROJECTS = [
  {
    title: 'Chat with Your Documents',
    subtitle: 'RAG-Powered Intelligent PDF Q&A System',
    category: 'Generative AI',
    badge: 'Live Production Demo',
    badgeType: 'emerald',
    urlBar: 'chat-with-your-documents1.streamlit.app',
    pill: 'LangChain + Groq RAG',
    date: 'Sep 2026 – Oct 2026',
    desc: 'An end-to-end Retrieval-Augmented Generation (RAG) platform that answers complex questions strictly grounded in uploaded documents, completely eliminating hallucinations.',
    impact: [
      'Document Chunking & Vectorization: 1,000-character semantic chunks with 150-char overlap, embedded locally with all-MiniLM-L6-v2 embeddings.',
      'Isolated Vector Spaces: ChromaDB vector store creating dedicated, isolated namespaces per document upload for multi-tenant data privacy.',
      'Low-Latency Inference: Orchestrated with LangChain (LCEL) and Groq-hosted LLMs at temperature 0.2 for sub-second, factual responses.',
      'Streamlit Deployment: Shipped a public, interactive web interface for real-time PDF parsing and question-answering.'
    ],
    tags: ['LangChain (LCEL)', 'RAG', 'ChromaDB', 'Groq', 'HuggingFace', 'Streamlit', 'Python'],
    links: [
      { label: '🚀 Open Live App', href: 'https://chat-with-your-documents1.streamlit.app', primary: true },
      { label: 'GitHub Repository', href: 'https://github.com/SahilPotale1405/chat-with-your-documents', primary: false }
    ]
  },
  {
    title: 'LungCare: Lung CT Classifier',
    subtitle: '4-Class Cancer Subtype Diagnostics with Deep Learning',
    category: 'Deep Learning',
    badge: '95.87% Test Accuracy',
    badgeType: 'amber',
    urlBar: 'lungcare-ct.gradio.app (EfficientNetB0)',
    pill: 'Computer Vision Benchmark',
    date: 'Jun 2025 – Aug 2025',
    desc: 'A clinical diagnostic computer vision system categorizing lung CT scans into four distinct classes: Adenocarcinoma, Large Cell Carcinoma, Squamous Cell Carcinoma, and Normal.',
    impact: [
      'State-of-the-Art Benchmarking: Evaluated VGG16, InceptionV3, and EfficientNetB0; fine-tuned EfficientNetB0 achieved 95.87% test accuracy.',
      'Data Preprocessing Pipeline: Built custom image pipeline resizing scans to 350×350 with normalized pixel matrices and augmentation to prevent overfitting.',
      'Confidence Calibration: Integrated Gradio web interface providing real-time multi-class probability scores and visual diagnostic predictions.',
      'Reproducible Research: Packaged complete evaluation notebooks, confusion matrices, and inference scripts on GitHub.'
    ],
    tags: ['TensorFlow', 'Keras', 'EfficientNetB0', 'Transfer Learning', 'Gradio', 'Python', 'Computer Vision'],
    links: [
      { label: 'Code & Demo Video', href: 'https://github.com/SahilPotale1405/LungCT-Classification', primary: true }
    ]
  },
  {
    title: 'Designing with Cloud: SRS to Architecture',
    subtitle: 'AI Cloud Architect & Cost Estimation Assistant',
    category: 'Generative AI',
    badge: 'AWS Bedrock + Claude Sonnet',
    badgeType: 'purple',
    urlBar: 'cloud-architecture-ai.internal',
    pill: 'Multi-Cloud NLP Architecture',
    date: 'Jul 2025 – Mar 2026',
    desc: 'An AI-driven systems assistant that reads Software Requirements Specifications (SRS), extracts functional and non-functional requirements, and maps them to multi-cloud services.',
    impact: [
      'NLP Requirements Parsing: Automatically extracts core architectural requirements from unstructured documents using Claude Sonnet via AWS Bedrock.',
      'Multi-Cloud Recommendation: Maps functional specs to optimal AWS, Azure, and GCP architectures with localized INR pricing comparisons.',
      'Interactive Architecture Canvas: Generates visual cloud topology blueprints with automated Infrastructure-as-Code (IaC) export capability.',
      'Full-Stack Architecture: Built with React, Node.js, Express, and MongoDB for interactive design iterations.'
    ],
    tags: ['AWS Bedrock', 'Claude Sonnet', 'React', 'Node.js', 'Express', 'MongoDB', 'NLP', 'Cloud Architecture'],
    links: []
  },
  {
    title: 'Melophile: Music Academy Platform',
    subtitle: 'Commercial Production Website with Headless CMS',
    category: 'Cloud & Full-Stack',
    badge: 'Live Client in Production',
    badgeType: 'cyan',
    urlBar: 'https://melophile.co.in',
    pill: 'Production Client Launch',
    date: 'Aug 2026 – Present',
    desc: 'A full-stack production platform for a real guitar and piano academy, deployed on a custom domain with headless content management and instant lead acquisition.',
    impact: [
      'Production Delivery: Designed and launched a responsive React and Vite application live at a commercial domain (melophile.co.in).',
      'Headless CMS: Integrated Sanity CMS, empowering non-technical academy administrators to publish blog posts and schedule events without code changes.',
      'Business Lead Conversion: Integrated WhatsApp Business API for direct student inquiry routing and embedded Google Maps for local search discovery.',
      'High-Performance Hosting: Configured automated deployments on Render with asset minification and sub-second load times.'
    ],
    tags: ['React', 'Vite', 'Sanity CMS', 'WhatsApp API', 'Google Maps API', 'Render', 'JavaScript'],
    links: [
      { label: '🌐 Open Live Site', href: 'https://melophile.co.in', primary: true },
      { label: 'GitHub Repository', href: 'https://github.com/SahilPotale1405/MelophileBusiness', primary: false }
    ]
  }
]

const EXPERIENCES = [
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Melophile Music Academy',
    location: 'Mumbai, India',
    period: 'Aug 2024 – Present',
    type: 'Client Project Delivery',
    tagColor: 'cyan',
    highlights: [
      'Led client discovery, architecture, and production launch of the academy’s primary web platform (melophile.co.in).',
      'Architected headless Sanity CMS content workflows, enabling direct blog management by non-technical stakeholders.',
      'Integrated real-time student inquiry capture via WhatsApp API, directly boosting online student onboarding.'
    ]
  },
  {
    role: 'AI / Machine Learning Engineer (Academic & Open Source)',
    company: 'VCET / Independent Projects',
    location: 'Mumbai, India',
    period: '2024 – Present',
    type: 'Research & Applied AI',
    tagColor: 'purple',
    highlights: [
      'Engineered and benchmarked deep transfer learning pipelines for biomedical CT diagnostic classification (95.87% accuracy).',
      'Designed modular RAG architectures utilizing LangChain, HuggingFace embeddings, and ChromaDB vector databases.',
      'Actively building containerized MLOps pipelines with Docker, continuous model validation, and cloud deployment.'
    ]
  }
]

const SKILL_GROUPS = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL']
  },
  {
    category: 'Machine Learning & Deep Learning',
    icon: '🧠',
    skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'Transfer Learning', 'EfficientNetB0', 'VGG16', 'InceptionV3', 'Pandas', 'NumPy', 'Gradio', 'Data Preprocessing', 'Feature Engineering']
  },
  {
    category: 'Generative AI & LLM Systems',
    icon: '⚡',
    skills: ['LangChain (LCEL)', 'RAG Architecture', 'HuggingFace Embeddings', 'ChromaDB', 'Groq LPU', 'AWS Bedrock', 'Claude Sonnet', 'Streamlit', 'Vector Search']
  },
  {
    category: 'Web & Full-Stack Development',
    icon: '🌐',
    skills: ['React.js', 'Vite', 'Node.js', 'Express', 'Flask', 'REST APIs', 'Sanity Headless CMS']
  },
  {
    category: 'Cloud, DevOps & Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'AWS', 'Azure', 'Docker (In Progress)', 'Linux', 'Vercel', 'Render']
  }
]

const CERTS = [
  {
    title: 'Complete Generative AI Course with LangChain and HuggingFace',
    provider: 'Udemy',
    progress: 50,
    topics: 'LangChain, LCEL, HuggingFace Local Embeddings, Vector Stores, Multi-Query RAG'
  },
  {
    title: 'Complete MLOps Bootcamp with 10+ End-to-End ML Projects',
    provider: 'Udemy',
    progress: 35,
    topics: 'Docker, CI/CD Pipeline Automation, MLflow Model Tracking, Cloud Serving'
  }
]

const FILTERS = ['All', 'Generative AI', 'Deep Learning', 'Cloud & Full-Stack']

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('sahilpotale2004@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const filteredProjects = PROJECTS.filter(
    (p) => activeFilter === 'All' || p.category === activeFilter
  )

  return (
    <div className="site-container">
      {/* Ambient Glow Orbs */}
      <div className="glow-orb orb-top-left" aria-hidden="true" />
      <div className="glow-orb orb-top-right" aria-hidden="true" />
      <div className="glow-orb orb-mid-left" aria-hidden="true" />

      {/* Top Sticky Header */}
      <header className="top-nav">
        <div className="wrap nav-inner">
          <a href="#" className="brand">
            <span className="brand-avatar-mini">SP</span>
            <div>
              <span className="brand-name">Sahil Potale</span>
              <span className="brand-tag">ML & GenAI</span>
            </div>
            <span className="status-pill">
              <span className="dot" />
              Available 2026
            </span>
          </a>

          <nav className="nav-links" aria-label="Main Navigation">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <a
              href="/Sahil_Potale_Resume.pdf"
              download="Sahil_Potale_Resume.pdf"
              className="btn btn-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      </header>

      <main className="wrap main-content">
        {/* Recruiter Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-glow-dot" />
              <span>Seeking Trainee / Associate ML, AI & Python Roles (2026 Batch)</span>
            </div>

            <div className="hero-profile-row">
              <div className="avatar-wrapper">
                <img
                  src="/me.jpg"
                  alt="Sahil Potale"
                  className="hero-avatar"
                  width="100"
                  height="100"
                />
                <span className="avatar-status-badge">AI/ML</span>
              </div>
              <div>
                <h1 className="hero-title">
                  Machine Learning & <br />
                  <span className="text-gradient">Generative AI Engineer</span>
                </h1>
                <div className="hero-meta-pills">
                  <span className="meta-pill">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Mumbai, India
                  </span>
                  <span className="meta-pill">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    BE IT (2026 Batch)
                  </span>
                  <span className="meta-pill">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    Open to Relocation
                  </span>
                </div>
              </div>
            </div>

            <p className="hero-summary">
              Engineering grounded <strong>Retrieval-Augmented Generation (RAG)</strong> systems, 
              high-accuracy <strong>deep learning diagnostic models</strong>, and production-grade full-stack 
              applications. Focused on applied AI research and high-performance engineering to build 
              a strong foundation for a future MS in AI/ML abroad.
            </p>

            <div className="hero-cta-group">
              <a
                href="/Sahil_Potale_Resume.pdf"
                download="Sahil_Potale_Resume.pdf"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume (PDF)
              </a>

              <a href="#projects" className="btn btn-secondary">
                Explore Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="7" y1="7" x2="17" y2="17"/><polyline points="17 7 17 17 7 17"/></svg>
              </a>

              <button onClick={copyEmail} className={`btn btn-email ${copied ? 'copied' : ''}`} title="Click to copy email address">
                {copied ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{ color: '#34d399' }}>Copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <span>sahilpotale2004@gmail.com</span>
                    <span className="copy-badge">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Bento Metric Cards with Glowing Borders */}
          <div className="bento-grid" aria-label="Key Highlights">
            <div className="bento-card highlight-amber">
              <div className="bento-card-glow" />
              <div className="bento-header">
                <span className="bento-tag">Deep Learning / CV</span>
                <span className="bento-icon">⭐</span>
              </div>
              <div className="bento-value">95.87%</div>
              <div className="bento-label">Model Classification Accuracy</div>
              <p className="bento-desc">
                EfficientNetB0 transfer learning outperforming VGG16 and InceptionV3 in 4-class lung CT scan classification.
              </p>
            </div>

            <div className="bento-card highlight-emerald">
              <div className="bento-card-glow" />
              <div className="bento-header">
                <span className="bento-tag">Generative AI / RAG</span>
                <span className="bento-icon">⚡</span>
              </div>
              <div className="bento-value">Sub-Second</div>
              <div className="bento-label">Vector Retrieval & LLM Q&A</div>
              <p className="bento-desc">
                ChromaDB vector store with HuggingFace MiniLM embeddings and Groq LPU inference deployed live on Streamlit.
              </p>
            </div>

            <div className="bento-card highlight-cyan">
              <div className="bento-card-glow" />
              <div className="bento-header">
                <span className="bento-tag">Production Client</span>
                <span className="bento-icon">🌐</span>
              </div>
              <div className="bento-value">1 Live Client</div>
              <div className="bento-label">In Active Commercial Production</div>
              <p className="bento-desc">
                Production academy platform deployed at melophile.co.in with headless Sanity CMS and WhatsApp student inquiry routing.
              </p>
            </div>

            <div className="bento-card highlight-purple">
              <div className="bento-card-glow" />
              <div className="bento-header">
                <span className="bento-tag">Live Deployments</span>
                <span className="bento-icon">🚀</span>
              </div>
              <div className="bento-value">2 Live Apps</div>
              <div className="bento-label">Shipped & Publicly Testable</div>
              <p className="bento-desc">
                Interactive Streamlit RAG document Q&A app and commercial client website running on a custom domain.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="section-padding">
          <div className="section-header">
            <div>
              <div className="section-eyebrow">PORTFOLIO CODEBASE</div>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                Production-tested Machine Learning, Generative AI, and full-stack software systems with live links and source code.
              </p>
            </div>

            <div className="filter-group" role="group" aria-label="Filter projects">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.title} className="project-card">
                {/* Simulated App / Browser Window Header */}
                <div className="project-browser-frame">
                  <div className="browser-dots">
                    <span className="b-dot dot-red" />
                    <span className="b-dot dot-yellow" />
                    <span className="b-dot dot-green" />
                  </div>
                  <div className="browser-address-bar">
                    <span className="browser-lock">🔒</span>
                    <span className="browser-url">{project.urlBar}</span>
                  </div>
                  <span className="browser-pill">{project.pill}</span>
                </div>

                <div className="project-card-body">
                  <div className="project-top">
                    <div className="project-badges">
                      <span className={`badge badge-${project.badgeType}`}>
                        {project.badge}
                      </span>
                      <span className="badge badge-category">{project.category}</span>
                    </div>
                    <span className="project-date">{project.date}</span>
                  </div>

                  <div className="project-heading-area">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>

                  <p className="project-desc">{project.desc}</p>

                  <div className="project-impact-box">
                    <div className="impact-title">Key Architectural Highlights:</div>
                    <ul className="impact-list">
                      {project.impact.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn-link ${link.primary ? 'primary-link' : 'ghost-link'}`}
                      >
                        {link.label}
                        <span className="arrow">↗</span>
                      </a>
                    ))}
                    {project.links.length === 0 && (
                      <span className="in-development-tag">
                        🔨 Active Architecture Case Study (Source upon request)
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience & Practical Delivery Section */}
        <section id="experience" className="section-padding">
          <div className="section-header">
            <div>
              <div className="section-eyebrow">CAREER MILESTONES</div>
              <h2 className="section-title">Practical Experience & Delivery</h2>
              <p className="section-subtitle">
                Demonstrated real-world execution across commercial clients and applied AI development.
              </p>
            </div>
          </div>

          <div className="experience-timeline">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="exp-card">
                <div className="exp-timeline-indicator">
                  <div className={`exp-dot-pulse exp-dot-${exp.tagColor}`} />
                  <div className="exp-line" />
                </div>
                <div className="exp-inner">
                  <div className="exp-top">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="exp-company-row">
                        <span className="exp-company">{exp.company}</span>
                        <span className="exp-dot">•</span>
                        <span className="exp-location">{exp.location}</span>
                      </div>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-period">{exp.period}</span>
                      <span className={`exp-type-badge badge-${exp.tagColor}`}>{exp.type}</span>
                    </div>
                  </div>

                  <ul className="exp-highlights">
                    {exp.highlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Toolkit Section */}
        <section id="skills" className="section-padding">
          <div className="section-header">
            <div>
              <div className="section-eyebrow">CORE COMPETENCIES</div>
              <h2 className="section-title">Technical Toolkit</h2>
              <p className="section-subtitle">
                Proficiencies mapped to modern Machine Learning, Generative AI, and software engineering stacks.
              </p>
            </div>
          </div>

          <div className="skills-container">
            {SKILL_GROUPS.map((group) => (
              <div key={group.category} className="skill-category-card">
                <div className="skill-group-header">
                  <span className="skill-icon">{group.icon}</span>
                  <h3 className="skill-group-title">{group.category}</h3>
                </div>
                <div className="skill-pills">
                  {group.skills.map((s) => (
                    <span key={s} className="skill-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Continuous Learning Section */}
        <section id="education" className="section-padding">
          <div className="section-header">
            <div>
              <div className="section-eyebrow">ACADEMICS & UPSKILLING</div>
              <h2 className="section-title">Education & Continuous Learning</h2>
              <p className="section-subtitle">
                Strong engineering foundation combined with targeted certifications for advanced AI/ML preparation.
              </p>
            </div>
          </div>

          <div className="edu-grid">
            <div className="edu-card">
              <div className="edu-header-row">
                <div className="edu-badge">Sep 2023 – May 2026 (Final Year)</div>
                <span className="edu-icon">🎓</span>
              </div>
              <h3 className="edu-degree">Bachelor of Engineering (BE), Information Technology</h3>
              <p className="edu-institute">
                Vidyavardhini's College of Engineering & Technology (University of Mumbai)
              </p>
              <p className="edu-details">
                Relevant Focus: Machine Learning, Artificial Intelligence, Data Structures & Algorithms, Cloud Computing, Distributed Systems.
              </p>
            </div>

            <div className="edu-card">
              <div className="edu-header-row">
                <div className="edu-badge">2020 – 2023</div>
                <span className="edu-icon">📜</span>
              </div>
              <h3 className="edu-degree">Diploma in Computer Engineering</h3>
              <p className="edu-institute">
                Pravin Patil College of Diploma Engineering & Technology
              </p>
              <p className="edu-details">
                Completed with <strong>81.66% (First Class with Distinction)</strong>. Core focus on Object-Oriented Programming, Database Management, and Operating Systems.
              </p>
            </div>
          </div>

          {/* Transparent Continuous Learning with Visual Progress */}
          <div className="cert-box">
            <div className="cert-header">
              <span className="cert-icon">📚</span>
              <div>
                <strong>Active Specializations & Course Progress</strong>
                <p className="cert-subtitle">Transparent tracking of ongoing self-driven professional upskilling</p>
              </div>
            </div>
            <div className="cert-list">
              {CERTS.map((cert) => (
                <div key={cert.title} className="cert-item">
                  <div className="cert-item-top">
                    <div>
                      <span className="cert-name">{cert.title}</span>
                      <span className="cert-meta">{cert.provider} • {cert.topics}</span>
                    </div>
                    <span className="cert-pct-tag">{cert.progress}% Done</span>
                  </div>
                  <div className="cert-progress-wrapper" aria-label={`${cert.title} ${cert.progress}% completed`}>
                    <div
                      className="cert-progress-fill"
                      style={{ width: `${cert.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Recruiter Conversion Bar */}
        <section id="contact" className="section-padding contact-section">
          <div className="contact-box">
            <div className="contact-content">
              <span className="contact-tag">💼 Let's Connect</span>
              <h2 className="contact-title">Ready to contribute to your engineering team.</h2>
              <p className="contact-desc">
                Currently interviewing for <strong>Trainee / Associate roles</strong> in Machine Learning, 
                Generative AI, and Python Development for the <strong>2026 batch</strong>. Available for immediate interview scheduling.
              </p>

              <div className="contact-contact-info">
                <span>📍 Mumbai / Virar, Maharashtra</span>
                <span>📞 +91 9657674220</span>
                <span>✉️ sahilpotale2004@gmail.com</span>
              </div>

              <div className="contact-actions">
                <button onClick={copyEmail} className="btn btn-primary">
                  {copied ? '✓ Email Copied!' : '📋 Copy Email Address'}
                </button>

                <a
                  href="/Sahil_Potale_Resume.pdf"
                  download="Sahil_Potale_Resume.pdf"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📄 Download Resume (PDF)
                </a>

                <a
                  href="https://www.linkedin.com/in/sahil-potale-725680229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  LinkedIn Profile ↗
                </a>

                <a
                  href="https://github.com/SahilPotale1405"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  GitHub Profile ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer-wrap">
        <div className="wrap footer-content">
          <div>
            <strong>Sahil Potale</strong> — Machine Learning & GenAI Engineer (BE IT 2026)
          </div>
          <div className="footer-links">
            <a href="https://github.com/SahilPotale1405" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/sahil-potale-725680229" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/Sahil_Potale_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume PDF</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
