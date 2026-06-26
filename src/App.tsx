const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yourprofile",
  },
  {
    label: "Email",
    href: "mailto:your.email@example.com",
  },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.20),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(148,163,184,0.08)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(148,163,184,0.08)_1px,_transparent_1px)] bg-[size:44px_44px] opacity-30" />

        <div className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
              AI/ML Job Seeker
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Anuradha Kumari
            </h1>

            <p className="mt-5 text-lg font-medium text-cyan-100 md:text-xl">
              AI Engineer | Machine Learning | NLP | Generative AI
            </p>

            <div className="mt-8 space-y-5 text-left text-base leading-8 text-slate-300 md:text-lg">
              <p>
                I am a Computer Science graduate with hands-on experience in AI
                engineering, machine learning, NLP, and generative AI
                applications. I have built practical AI projects including
                resume parsers, RAG chatbots, interview preparation assistants,
                job matching tools, and document extraction systems.
              </p>

              <p>
                I enjoy solving real-world problems using Python, machine
                learning, LLMs, FastAPI, Streamlit, and modern AI tools. I am
                actively seeking opportunities as an AI Engineer, Machine
                Learning Engineer, NLP Engineer, Generative AI Engineer, Data
                Scientist, or Python Developer.
              </p>
            </div>

            <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Education
                </h2>
                <p className="mt-3 text-slate-200">
                  Master’s in Computer Science, December 2023
                </p>
                <p className="mt-1 text-slate-300">
                  Bachelor’s in Information Technology
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Current Experience
                </h2>
                <p className="mt-3 text-slate-200">AI Engineer Intern</p>
              </div>
            </div>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
                  className="w-full rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-center font-semibold text-cyan-100 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-cyan-300/20 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20 sm:w-auto"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Anuradha Kumari. Built with React,
        TypeScript, Vite, and Tailwind CSS.
      </footer>
    </main>
  );
}

export default App;

