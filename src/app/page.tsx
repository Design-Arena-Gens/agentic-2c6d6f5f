import Link from "next/link";

const focusTracks = [
  {
    role: "In-Game Leader",
    emphasis: "Macro calling, decisive playmaking, clear comms drills.",
    blocks: ["Strat Lab", "Pressure Scenarios", "VoD Review Matrix"],
  },
  {
    role: "Entry Fragger",
    emphasis: "Faster executions, trading discipline, utility precision.",
    blocks: ["Micro Aim Gauntlet", "Utility Sandbox", "Retake Theater"],
  },
  {
    role: "Support",
    emphasis: "Crossfire anchoring, tempo control, information economy.",
    blocks: ["Anchor Fortify", "Map Control Routes", "Utility Architect"],
  },
];

const upcomingEvents = [
  {
    name: "Valorant Champions Circuit: North America",
    stage: "Stage 2 Closed Qualifier",
    date: "May 11 — 15, 2025",
    prize: "$120,000",
    slots: 16,
  },
  {
    name: "RLCS Spring Major Qualifier",
    stage: "Regional Knockout",
    date: "May 20 — 23, 2025",
    prize: "$80,000",
    slots: 24,
  },
  {
    name: "ALGS Split 1 Playoffs",
    stage: "LAN Finals",
    date: "June 2 — 6, 2025",
    prize: "$1,000,000",
    slots: 40,
  },
];

const scrimSchedule = [
  {
    label: "Aim & Mechanics",
    focus: "Micro tracking, flick consistency, precision under duress.",
    start: "10:00",
    duration: "90m",
  },
  {
    label: "Team Systems",
    focus: "Execute packages, reactive mid-rounds, defensive setups.",
    start: "13:00",
    duration: "120m",
  },
  {
    label: "High Stakes Scrims",
    focus: "Partnered tier-1 teams, stage simulations, adaptive comms.",
    start: "17:30",
    duration: "150m",
  },
  {
    label: "Analytic Debrief",
    focus: "Stats sync, opponent scouting, counter-stratting pipelines.",
    start: "21:00",
    duration: "60m",
  },
];

const intelDrops = [
  {
    title: "Velocity Protocol Patch 8.12 Breakdown",
    type: "Meta Watch",
    summary:
      "Utility economy shifted towards vision denial. Sentinel pick rate projected to climb 12%. Adjust execute windows accordingly.",
  },
  {
    title: "Scrim Blocks vs Apex Predators",
    type: "Opposition Report",
    summary:
      "They rotate early through mid-map beacons. Punish with split anchor pressure and trap-setting controllers.",
  },
  {
    title: "Cognitive Load Toolkit",
    type: "Performance Lab",
    summary:
      "Breathing cadence pairs with tempo resets. Integrate 5-minute reset cycles after map halves to protect decision quality.",
  },
];

const leaderboard = [
  {
    name: "Nova \"Skye\" Tan",
    role: "Controller / IGL",
    kdr: "1.28",
    impact: "High",
    currentFocus: "Adaptive mid-round theory",
  },
  {
    name: "Ezra \"Pulse\" Mendes",
    role: "Initiator",
    kdr: "1.19",
    impact: "Mid+",
    currentFocus: "Vision denial timing",
  },
  {
    name: "Kira \"Switch\" Ito",
    role: "Duelist",
    kdr: "1.36",
    impact: "High",
    currentFocus: "Entry tempo discipline",
  },
  {
    name: "Jules \"Atlas\" Browne",
    role: "Anchor",
    kdr: "1.09",
    impact: "Stabilizer",
    currentFocus: "Late round clutch trees",
  },
];

const partners = [
  { name: "StrafeLab Analytics", detail: "Match telemetry overlays & heatmaps" },
  { name: "PrimeFuel", detail: "Scientifically-backed recovery & nutrition" },
  { name: "Arcadia Gear", detail: "Signature pro kits & adaptive peripherals" },
  { name: "Vulcan Vision", detail: "Eye-tracking powered aim optimizer" },
];

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Scrims", href: "#scrims" },
  { label: "Events", href: "#events" },
  { label: "Intel", href: "#intel" },
  { label: "Join", href: "#join" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-sm text-slate-100 sm:text-base">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[26rem] w-[28rem] rounded-full bg-indigo-500/30 blur-[200px] sm:h-[32rem] sm:w-[34rem]" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-emerald-500/20 blur-[160px]" />
      <div className="pointer-events-none absolute -right-12 top-24 hidden h-64 w-64 rounded-full bg-rose-500/20 blur-[140px] lg:block" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 pb-20 pt-10 md:gap-20 md:px-10 lg:px-16">
        <header className="flex flex-col gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/40 to-slate-950/80 p-8 shadow-[0_40px_120px_-50px_rgba(6,182,212,0.45)] md:p-12 lg:flex-row lg:items-center lg:gap-14">
          <div className="flex-1 space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.4em] text-slate-300/80">
              <span className="rounded-full border border-white/20 px-3 py-1">
                Apex Arena
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1">
                Esports Command Center
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Level up your roster with pro-grade intelligence and training.
            </h1>
            <p className="max-w-xl text-lg text-slate-200/80 lg:text-xl">
              Build routines that outpace the meta, align scrims with top-tier
              squads, and activate the insights analysts use to win LAN finals.
            </p>
            <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row sm:items-center">
              <Link
                href="#join"
                className="flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-white shadow-lg shadow-indigo-500/25 transition hover:from-indigo-400 hover:to-purple-400"
              >
                Unlock Pro Access
              </Link>
              <Link
                href="#intel"
                className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Browse Intel Drops
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 text-sm shadow-2xl backdrop-blur lg:w-[22rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-indigo-500/10" />
            <div className="relative flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-300">
                  Live Rating
                </p>
                <p className="mt-2 text-4xl font-semibold text-white">
                  2,184 <span className="text-sm font-normal text-violet-300">MMR</span>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {["Consistency", "Clutch", "Utility", "Macro"].map((trait) => (
                  <div
                    key={trait}
                    className="rounded-xl border border-white/5 bg-white/5 p-3 shadow-inner"
                  >
                    <p className="text-slate-300">{trait}</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {trait === "Macro" ? "95" : trait === "Consistency" ? "92" : trait === "Clutch" ? "89" : "90"}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-white/5 bg-gradient-to-r from-indigo-500/30 to-sky-500/30 p-4 text-xs">
                <p className="text-slate-200">Next objective</p>
                <p className="mt-1 text-sm text-white">
                  Secure top 4 at VCC Stage 2. Recommended scrim mix updated.
                </p>
              </div>
              <Link
                href="#scrims"
                className="flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-indigo-200 transition hover:bg-white/20"
              >
                View Master Schedule
              </Link>
            </div>
          </div>
        </header>

        <nav className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.3em] text-slate-300/80 backdrop-blur">
          <span className="font-semibold text-white">Navigation</span>
          <div className="flex flex-wrap justify-end gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-transparent px-4 py-2 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <section
          id="programs"
          className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-8"
        >
          <article className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-indigo-500/10 backdrop-blur">
            <header>
              <p className="text-xs uppercase tracking-[0.4em] text-indigo-200">
                Precision Training Tracks
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Role-tuned programs rebuilt every patch cycle.
              </h2>
              <p className="mt-2 max-w-2xl text-base text-slate-200/80">
                Every macro adjustment, agent tweak, and weapon shift cascades
                into a revised curriculum. Lock in the drills that keep rosters
                fluid while the meta moves under your feet.
              </p>
            </header>
            <div className="grid gap-4 md:grid-cols-3">
              {focusTracks.map((track) => (
                <div
                  key={track.role}
                  className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-5"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">
                    {track.role}
                  </p>
                  <p className="text-base font-semibold text-white">
                    {track.emphasis}
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-200/70">
                    {track.blocks.map((block) => (
                      <li key={block} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                        {block}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <aside className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-950/80 p-8 shadow-lg shadow-purple-500/10 backdrop-blur">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Player Spotlight
              </h3>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-indigo-200">
                Top 4
              </span>
            </div>
            <ul className="space-y-4">
              {leaderboard.map((player) => (
                <li
                  key={player.name}
                  className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <div className="mt-1 h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-slate-900" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-white">{player.name}</p>
                      <span className="rounded-full bg-white/5 px-2 py-1 text-xs uppercase tracking-widest text-indigo-200">
                        {player.role}
                      </span>
                    </div>
                    <p className="text-sm text-slate-200/70">
                      Focus: {player.currentFocus}
                    </p>
                    <p className="text-xs text-slate-400">
                      K/D {player.kdr} • Impact {player.impact}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section
          id="scrims"
          className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-cyan-500/10 backdrop-blur md:grid-cols-[1.1fr_1fr] md:gap-10"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">
              Scrim Control Tower
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Full-day training spectrum engineered for comp squads.
            </h2>
            <p className="mt-2 text-base text-slate-200/80">
              Sync your core hours with partner teams, lock in VOD timing, and
              keep analysts fed with clean data loops.
            </p>
            <div className="mt-6 grid gap-4">
              {scrimSchedule.map((block) => (
                <div
                  key={block.label}
                  className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-slate-950/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
                      {block.label}
                    </p>
                    <p className="text-base text-slate-200/80">
                      {block.focus}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-cyan-100">
                    <span className="rounded-full bg-white/5 px-3 py-1">
                      {block.start}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1">
                      {block.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-cyan-400/10 p-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">
                Sync Layer
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Match your block with 18 active tier-1 scrim partners.
              </p>
              <p className="mt-2 text-slate-200/80">
                AI matchmaking coordinates availability, role mirror parity, and
                latency thresholds to keep sessions sharp.
              </p>
            </div>
            <div className="space-y-3 text-xs text-slate-200/70">
              <p className="font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Auto Reminders
              </p>
              <p>• Tactical briefings delivered 2 hours pre-block.</p>
              <p>• Analysts receive cleaned telemetry within 20 minutes.</p>
              <p>• Health sync prompts to protect player cognitive load.</p>
            </div>
            <Link
              href="#join"
              className="mt-4 inline-flex justify-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition hover:bg-white/20"
            >
              Connect Calendar
            </Link>
          </div>
        </section>

        <section
          id="events"
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-purple-500/10 backdrop-blur"
        >
          <header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-purple-200">
                Tournament Radar
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Target the brackets that compound your circuit points.
              </h2>
            </div>
            <Link
              href="#join"
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-200 transition hover:border-white/30 hover:bg-white/10"
            >
              Request Invite Codes
            </Link>
          </header>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.name}
                className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-purple-200">
                  {event.stage}
                </p>
                <p className="text-lg font-semibold text-white">{event.name}</p>
                <p className="text-sm text-slate-200/70">{event.date}</p>
                <p className="text-sm text-slate-200/70">
                  Prize Pool {event.prize} • Slots {event.slots}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="intel"
          className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8"
        >
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-indigo-500/10 backdrop-blur">
            <header>
              <p className="text-xs uppercase tracking-[0.4em] text-indigo-200">
                Intel Drops
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Digest meta shifts before game day.
              </h2>
            </header>
            <div className="space-y-4">
              {intelDrops.map((drop) => (
                <article
                  key={drop.title}
                  className="rounded-2xl border border-white/5 bg-white/5 p-5"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-indigo-200">
                    <span>{drop.type}</span>
                    <span>Updated 3h ago</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {drop.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-200/70">{drop.summary}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-950/80 p-8 shadow-lg shadow-sky-500/10 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.4em] text-indigo-200">
              Trusted Systems
            </p>
            <ul className="space-y-4 text-sm text-slate-200/80">
              {partners.map((partner) => (
                <li
                  key={partner.name}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <p className="text-base font-semibold text-white">
                    {partner.name}
                  </p>
                  <p className="mt-1 text-slate-200/70">{partner.detail}</p>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section
          id="join"
          className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-slate-900/70 p-8 shadow-xl shadow-indigo-500/20 backdrop-blur md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-xl space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-indigo-200">
              Join the Arena
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Secure full-stack support for your competitive climb.
            </h2>
            <p className="text-base text-slate-200/80">
              Onboard your roster, sync calendars, and plug into analysts within
              48 hours. Tailored onboarding for Valorant, CS2, Rocket League,
              and Apex Legends.
            </p>
          </div>
          <form className="w-full max-w-md space-y-3 rounded-2xl border border-white/10 bg-white/10 p-6 text-sm backdrop-blur">
            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.3em] text-indigo-200">
                Squad Email
              </label>
              <input
                type="email"
                placeholder="team@apexarena.gg"
                className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.3em] text-indigo-200">
                Primary Title
              </label>
              <select className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40">
                <option>Valorant</option>
                <option>Counter-Strike 2</option>
                <option>Rocket League</option>
                <option>Apex Legends</option>
                <option>Overwatch 2</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.3em] text-indigo-200">
                Target Event
              </label>
              <input
                type="text"
                placeholder="e.g. VCT Masters Seoul"
                className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-indigo-500/25 transition hover:from-indigo-400 hover:via-purple-400 hover:to-sky-400"
            >
              Initiate Onboarding
            </button>
          </form>
        </section>

        <footer className="flex flex-col items-start gap-4 border-t border-white/10 pt-6 text-xs text-slate-400/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Apex Arena. Built for esports players.</p>
          <div className="flex gap-4">
            <Link href="#" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="#" className="transition hover:text-white">
              Support
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
