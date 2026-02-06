export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="border-b border-border">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">
            Cosmolocal Foundation
          </span>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#mission" className="transition-colors hover:text-foreground">
              Mission
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
            <a
              href="https://docs.cosmolocal.world"
              className="rounded-full bg-accent px-4 py-1.5 text-white transition-colors hover:bg-accent-light"
            >
              Docs
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Bridging cosmic perspective
          <br />
          with local action
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          The Cosmolocal Foundation supports projects at the intersection of
          global coordination and community resilience — designing tools,
          frameworks, and networks for a thriving world.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#about"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-light"
          >
            Learn More
          </a>
          <a
            href="https://docs.cosmolocal.world"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            Documentation
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border bg-foreground/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            About the Foundation
          </h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            The Cosmolocal Foundation is a home for projects working toward
            planetary coordination, commons-based governance, and regenerative
            systems. We believe in designing from both the cosmic and the local
            scale simultaneously — thinking globally while acting in service of
            real communities.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold">Coordination Tools</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Building open-source tools for collective decision-making,
                resource allocation, and collaborative governance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Research & Frameworks</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Developing theoretical frameworks that bridge systems thinking,
                network science, and indigenous knowledge systems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Community Networks</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Connecting practitioners, researchers, and communities working
                on cosmolocal approaches to shared challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Mission</h2>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            Our mission is to catalyze the emergence of cosmolocal
            infrastructure — systems that are globally coordinated yet locally
            adapted, open-source yet contextually meaningful, and
            technologically sophisticated yet ecologically grounded.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-foreground/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-xl text-muted leading-relaxed">
            Interested in collaborating or learning more about the Cosmolocal
            Foundation? Reach out to us.
          </p>
          <a
            href="mailto:***REDACTED_EMAIL***"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-light"
          >
            ***REDACTED_EMAIL***
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-sm text-muted">
          <span>&copy; {new Date().getFullYear()} Cosmolocal Foundation</span>
          <a
            href="https://docs.cosmolocal.world"
            className="transition-colors hover:text-foreground"
          >
            Documentation
          </a>
        </div>
      </footer>
    </div>
  );
}
