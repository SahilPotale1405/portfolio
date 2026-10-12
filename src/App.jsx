import { useEffect, useState } from 'react'

const FIELDS = [
  ['name', '"Sahil Potale"', 's'],
  ['role', '"ML & Full-Stack Developer"', 's'],
  ['degree', '"BE Information Technology, 2026"', 's'],
  ['location', '"Mumbai, India"', 's'],
  ['focus', '["Deep Learning", "RAG", "React"]', 's'],
  ['best_accuracy', '95.87', 'n'],
  ['live_apps', '2', 'n'],
  ['open_to', '"entry-level roles"', 's'],
]

const PROJECTS = [
  {
    title: 'LungCare: lung CT classification',
    badge: '95.87% accuracy',
    cats: ['ML'],
    desc: 'Classifies lung CT scans into four classes: adenocarcinoma, large cell carcinoma, squamous cell carcinoma, and normal. EfficientNetB0 beat VGG16 and InceptionV3 in my comparison, and a Gradio app shows a confidence score for each class.',
    tags: ['TensorFlow', 'Keras', 'EfficientNetB0', 'Gradio'],
    links: [['Code and demo video', 'https://github.com/SahilPotale1405/LungCT-Classification']],
    dTitle: 'How it works',
    ordered: true,
    items: [
      'The uploaded scan is resized to 350 x 350 and its pixel values are normalized.',
      'A pretrained EfficientNetB0, adapted with transfer learning, scores the four classes.',
      'The app returns a confidence score for each class. I also compared VGG16 and InceptionV3, and EfficientNetB0 was the most accurate.',
    ],
  },
  {
    title: 'Chat with Your Documents',
    badge: 'Live demo',
    cats: ['GenAI'],
    desc: "Upload a PDF and ask questions in plain English. The app answers from the document's own passages, not the model's memory, and each upload gets its own vector store. The README covers where retrieval still fails.",
    tags: ['LangChain', 'ChromaDB', 'HuggingFace', 'Groq', 'Streamlit'],
    links: [
      ['Live demo', 'https://chat-with-your-documents1.streamlit.app'],
      ['Code', 'https://github.com/SahilPotale1405/chat-with-your-documents'],
    ],
    dTitle: 'How it works',
    ordered: true,
    items: [
      'The PDF is split into 1000-character chunks with 150 characters of overlap.',
      'Each chunk is embedded locally with all-MiniLM-L6-v2 and stored in ChromaDB.',
      'The question is embedded the same way, the closest chunks are retrieved, and a Groq-hosted LLM answers from them at temperature 0.2.',
      'Known limit: similarity search can pick the wrong section when two sections sound alike.',
    ],
  },
  {
    title: 'Melophile: music academy website',
    badge: 'Live client project',
    cats: ['Web'],
    desc: 'A production site for a real guitar and piano academy. Blog posts are managed through a CMS, students send inquiries through WhatsApp, and the location is on an embedded map.',
    tags: ['React', 'Vite', 'Sanity CMS', 'Google Maps'],
    links: [
      ['Live site', 'https://melophile.co.in'],
      ['Code', 'https://github.com/SahilPotale1405/MelophileBusiness'],
    ],
    dTitle: 'What I built',
    ordered: false,
    items: [
      'A responsive React and Vite frontend for phone and desktop.',
      'Blog content managed in Sanity CMS, so the academy can post without touching code.',
      'Student inquiries that reach the academy through WhatsApp.',
      'Deployed on Render with a custom domain.',
    ],
  },
  {
    title: 'Designing with Cloud',
    cats: ['ML', 'GenAI'],
    desc: 'An assistant that reads a software requirements document, extracts the functional and non-functional requirements, and asks follow-up questions when the input is incomplete. It maps requirements to AWS, Azure and GCP services and compares costs in INR, with a drag-and-drop diagram designer and infrastructure-as-code export.',
    tags: ['AWS Bedrock', 'Claude Sonnet', 'React', 'Node.js','Express','MongoDB'],
    links: [],
  },
]

const SKILLS = [
  ['Languages', ['Python', 'JavaScript']],
  ['ML and data', ['TensorFlow', 'Keras', 'scikit-learn', 'Pandas', 'NumPy', 'Transfer learning', 'NLP']],
  ['Generative AI', ['LangChain', 'RAG', 'HuggingFace embeddings', 'ChromaDB', 'Groq']],
  ['Web', ['React', 'Vite', 'Flask', 'Streamlit', 'Gradio', 'Sanity CMS']],
  ['Tools', ['Git', 'GitHub', 'AWS', 'Azure']],
]

const FILTERS = ['All', 'ML', 'GenAI', 'Web']

function Terminal() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [n, setN] = useState(reduce ? FIELDS.length : 0)
  useEffect(() => {
    if (n >= FIELDS.length) return
    const t = setTimeout(() => setN(n + 1), 280)
    return () => clearTimeout(t)
  }, [n])

  return (
    <div className="term" aria-label="Profile summary">
      <div className="bar"><i /><i /><i /><span>profile.json</span></div>
      <pre>
        <span className="c">$</span> cat profile.json{'\n{\n'}
        {FIELDS.slice(0, n).map(([k, v, t], i) => (
          <span key={k}>{'  '}<span className="k">"{k}"</span>: <span className={t}>{v}</span>{i < FIELDS.length - 1 ? ',' : ''}{'\n'}</span>
        ))}
        {n >= FIELDS.length && '}\n'}
        <span className="c">$</span> <span className="cur" />
      </pre>
    </div>
  )
}

function Card({ p }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  const List = p.ordered ? 'ol' : 'ul'
  return (
    <article className="card" onMouseMove={move}>
      {p.badge && <span className="badge">{p.badge}</span>}
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
      <div className="chips">{p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
      {p.items && (
        <details>
          <summary>{p.dTitle}</summary>
          <List>{p.items.map((x) => <li key={x}>{x}</li>)}</List>
        </details>
      )}
      {p.links.length > 0 && (
        <div className="links">
          {p.links.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label}</a>)}
        </div>
      )}
    </article>
  )
}

export default function App() {
  const [filter, setFilter] = useState('All')
  const shown = PROJECTS.filter((p) => filter === 'All' || p.cats.includes(filter))

  return (
    <>
      <header className="top">
        <div className="wrap bar2">
          <strong>Sahil Potale</strong>
          <nav aria-label="Sections">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="wrap">
        <div className="hero">
          <div>
            <img className="me" src="/me.jpg" alt="Sahil Potale" width="96" height="96" />
            <h1>I build ML and GenAI apps people can actually open.</h1>
            <p className="lead">Final-year IT graduate from Mumbai. Deep learning, retrieval-based GenAI and full-stack web, each shipped with a link you can click.</p>
            <div className="btns">
              <a className="btn primary" href="#projects">See projects</a>
              <a className="btn ghost" href="mailto:sahilpotale2004@gmail.com">Email me</a>
            </div>
          </div>
          <Terminal />
        </div>

        <section id="projects">
          <div className="head">
            <h2>Projects</h2>
            <div className="filters" role="group" aria-label="Filter projects">
              {FILTERS.map((f) => (
                <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
              ))}
            </div>
          </div>
          <div className="grid">{shown.map((p) => <Card key={p.title} p={p} />)}</div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          {SKILLS.map(([label, items]) => (
            <div className="row" key={label}>
              <b>{label}</b>
              <div className="chips">{items.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
            </div>
          ))}
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="edu">
            <div className="card"><b>BE, Information Technology</b><p>Vidyavardhini's College of Engineering &amp; Technology<br />2023 to 2026, GPA 7.08</p></div>
            <div className="card"><b>Diploma, Computer Engineering</b><p>Pravin Patil College of Diploma Engineering &amp; Technology<br />2020 to 2023, 81.66%</p></div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p className="muted">I'm looking for entry-level roles in ML engineering, GenAI and software development. Email is the fastest way to reach me.</p>
          <div className="btns">
            <a className="btn primary" href="mailto:sahilpotale2004@gmail.com">sahilpotale2004@gmail.com</a>
            <a className="btn ghost" href="https://www.linkedin.com/in/sahil-potale-725680229" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn ghost" href="https://github.com/SahilPotale1405" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="wrap">Sahil Potale, Mumbai, India</footer>
    </>
  )
}
