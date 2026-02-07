export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Cosmolocal Foundation
          </a>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#vision" className="hidden sm:inline transition-colors hover:text-foreground">
              Vision
            </a>
            <a href="#mission" className="hidden sm:inline transition-colors hover:text-foreground">
              Mission
            </a>
            <a href="#priorities" className="hidden sm:inline transition-colors hover:text-foreground">
              Priorities
            </a>
            <a href="#founder" className="hidden sm:inline transition-colors hover:text-foreground">
              Founder
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
      <section className="hero-section relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-28 text-center sm:py-36">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="relative z-10">
          <blockquote className="text-lg italic text-white/70 sm:text-xl">
            &ldquo;What is heavy should be local, and what is light should be global and shared.&rdquo;
          </blockquote>
          <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Cosmolocal Foundation
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Empowering communities to build localized, regenerative economies
            connected through global knowledge-sharing and commons-based
            collaboration.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#vision"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-stone-900 transition-colors hover:bg-white/90"
            >
              Learn More
            </a>
            <a
              href="https://docs.cosmolocal.world"
              className="rounded-full border border-white/25 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="border-t border-border bg-foreground/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Vision</h2>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">
            The unfolding ecological crisis and the broader metacrisis
            necessitate a fundamental reorientation of our productive forces and
            financial coordination. We must transition toward production models
            that prioritize long-term ecological and social resilience rather
            than short-term efficiency, balancing local autonomy with global
            cooperation.
          </p>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">
            The Foundation bridges this gap by connecting localized regenerative
            efforts with global knowledge commons and decentralized financial
            coordination &mdash; scaling physically rooted projects with the
            coordination capacity available through Web3 technologies.
          </p>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">
            To achieve systemic transformation, we must relocalize production,
            de-risk supply chains, and prioritize economies of scope over
            economies of scale. Traditional globalization has led to fragile
            supply networks &mdash; the Cosmolocal Foundation addresses this by
            fostering bioregional resiliency through global collaboration.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Mission</h2>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">
            We aim to empower communities to build localized, regenerative
            economies by providing open-source tools, funding, and global
            coordination networks. Through strategic investments, pilot
            projects, and policy advocacy, we foster:
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">Decentralized Governance</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Transparent, community-led decision-making that distributes
                power equitably and ensures accountability at every level.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">Open Knowledge Commons</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Sharing sustainable production methods, governance models, and
                regenerative blueprints globally &mdash; free and accessible to all.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">Commons-Compatible Capital</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Legal and property forms adapted to commons requirements,
                financing transformative local projects without extractive
                conditions.
              </p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-semibold">Cosmolocal Coordination</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Connecting localized efforts into a global, impact-driven
                network where knowledge flows freely while production remains
                rooted in place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Priorities */}
      <section id="priorities" className="border-t border-border bg-foreground/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            Strategic Priorities
          </h2>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">
            To achieve scalable impact, the Foundation executes these key
            initiatives:
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  1
                </span>
                <div>
                  <h3 className="font-semibold">Mapping Regenerative Communities</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Identifying and cataloging eco-villages, circular economy hubs,
                    and decentralized governance initiatives worldwide to find
                    strategic points of leverage for intervention.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  2
                </span>
                <div>
                  <h3 className="font-semibold">Web3 Funding</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Connecting local projects with crypto-native financial
                    mechanisms such as quadratic funding, DAOs, and Collaborative
                    Finance.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  3
                </span>
                <div>
                  <h3 className="font-semibold">Open Resources</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Developing a global knowledge commons of decentralized
                    governance models, regenerative production blueprints, and
                    circular economy tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  4
                </span>
                <div>
                  <h3 className="font-semibold">Education & Advocacy</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Producing educational content and engaging policymakers to
                    scale cosmolocal principles in governance and finance.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  5
                </span>
                <div>
                  <h3 className="font-semibold">Pilots & Grants Program</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Funding and launching projects that demonstrate scalable
                    cosmolocal solutions, integrating blockchain transparency and
                    commons-based innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  6
                </span>
                <div>
                  <h3 className="font-semibold">Cosmolocal Certification</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Establishing credibility and standards for cosmolocal
                    initiatives, verified through decentralized, blockchain-based
                    compliance mechanisms.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  7
                </span>
                <div>
                  <h3 className="font-semibold">Global Alliances</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Building bioregional alliances to facilitate transnational
                    collaboration on governance, resource management, and mutual
                    aid.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  8
                </span>
                <div>
                  <h3 className="font-semibold">Impact Research & Iteration</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Establishing a Cosmolocal Research Institute to track success
                    metrics, iterate on best practices, and drive evidence-based
                    scaling strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Support */}
      <section id="support" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            Why Support the Foundation?
          </h2>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">
            Supporters play a pivotal role in scaling decentralized,
            community-driven economies. The Foundation creates systemic
            transformation by bridging regenerative finance with real-world
            social and ecological impact.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-medium text-foreground">Economic self-sufficiency</span>{" "}
                and resilience for local communities
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-medium text-foreground">Decentralized governance</span>{" "}
                models that distribute power more equitably
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-medium text-foreground">Open-source innovation</span>{" "}
                to democratize knowledge and technology
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-medium text-foreground">Commons-based economics</span>{" "}
                ensuring long-term sustainable and fair returns
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-lg border border-accent/20 bg-accent/5 p-6">
            <h3 className="font-semibold">Cosmo-Local Financing Facility</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              The Foundation will establish a special purpose vehicle to create
              a seamless bridge between impact-driven investors and local
              regenerative projects. This facility allows unrooted financial
              capital to flow into productive, regenerative networks, ensuring
              sustainable returns through resilient, decentralized economies.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="border-t border-border bg-foreground/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Founder</h2>
          <div className="mt-6 max-w-3xl">
            <h3 className="text-xl font-semibold">Michel Bauwens</h3>
            <p className="mt-1 text-sm text-accent">
              Founder, P2P Foundation
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Michel Bauwens is the driving force behind the Cosmolocal
              Foundation and a pioneering thinker in peer-to-peer economics and
              commons-based governance. As the founder of the P2P Foundation, he
              has researched and promoted decentralized, collaborative economic
              models that empower communities through shared knowledge and
              resources, and hosted the first release of the Bitcoin Whitepaper
              by Satoshi Nakamoto.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Bauwens has led multiple initiatives demonstrating the viability
              of cosmolocal approaches, such as the Ghent Commons Transition
              Plan, and has advised governments (Ecuador), international
              institutions (the Vatican), and grassroots organizations. He
              regularly speaks at global conferences about the intersection of
              decentralized technology, regenerative economics, and the future
              of production and value exchange.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            Core Values
          </h2>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">
            Guided by our Social Charter, the Foundation upholds these
            principles across all initiatives.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold">Regenerative Socio-Economics</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Promoting systems where local communities pool resources for
                shared prosperity, transitioning from extractive, centralized
                economies to regenerative, commons-based economies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Decentralized Systems</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Leveraging Web3 technologies &mdash; blockchain, DAOs, community
                currencies &mdash; to foster transparency, inclusivity, and
                fairness in governance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Transnational Collaboration</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Building global alliances to share resources, knowledge, and
                strategies across borders, strengthening local resilience
                through supportive global networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section id="governance" className="border-t border-border bg-foreground/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Governance</h2>
          <p className="mt-4 max-w-3xl text-muted leading-relaxed">
            The Foundation operates through transparent, community-led
            governance with clear accountability frameworks.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold">Transparency & Accountability</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                All financial transactions, governance decisions, and project
                outcomes are documented and accessible. Periodic assessments
                ensure alignment with cosmolocal principles.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold">Collaborative Decision-Making</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Decentralized governance mechanisms with voting for key
                decisions. Members operate with autonomy within the
                Foundation&apos;s principles.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold">Conflict Resolution</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Disagreements are resolved through open dialogue and mediation,
                with escalation paths through the core team in accordance with
                shared principles.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold">Knowledge Sharing</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                All team members document and share experiences, innovations,
                and lessons learned, contributing to the commons and maintaining
                thorough records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-xl text-muted leading-relaxed">
            Interested in collaborating, supporting, or learning more about
            cosmolocal approaches? We welcome researchers, practitioners,
            communities, and impact-driven investors.
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
          <div className="flex items-center gap-6">
            <a
              href="https://p2pfoundation.net"
              className="transition-colors hover:text-foreground"
            >
              P2P Foundation
            </a>
            <a
              href="https://docs.cosmolocal.world"
              className="transition-colors hover:text-foreground"
            >
              Documentation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
