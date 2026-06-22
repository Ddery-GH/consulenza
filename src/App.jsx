function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">

      {/* ===== HEADER ===== */}
      <header className="relative z-10 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Placeholder logo */}
          <div className="h-7 w-36 rounded bg-[#1D4ED8]/10" />

          {/* Placeholder voci di menu — desktop */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="h-3.5 w-16 rounded bg-slate-200" />
            <div className="h-3.5 w-16 rounded bg-slate-200" />
            <div className="h-3.5 w-16 rounded bg-slate-200" />
            <div className="h-3.5 w-16 rounded bg-slate-200" />
            {/* Placeholder CTA */}
            <div className="h-9 w-32 rounded-lg bg-[#1D4ED8]/15" />
          </div>

          {/* Placeholder hamburger — mobile */}
          <div className="flex flex-col gap-1.5 md:hidden">
            <div className="h-0.5 w-6 rounded bg-slate-300" />
            <div className="h-0.5 w-6 rounded bg-slate-300" />
            <div className="h-0.5 w-4 rounded bg-slate-300" />
          </div>

        </div>
      </header>

      {/* ===== MAIN ===== */}
      <main className="relative flex-1 overflow-hidden">

        {/* Decorazione blur in alto a sinistra */}
        <div
          className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-blue-200/30 blur-3xl"
          aria-hidden="true"
        />

        {/* Decorazione blur in alto a destra */}
        <div
          className="pointer-events-none absolute -top-20 -right-32 h-[400px] w-[400px] rounded-full bg-sky-300/20 blur-3xl"
          aria-hidden="true"
        />

        {/* Decorazione blur in basso al centro */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl"
          aria-hidden="true"
        />

        {/* Griglia sottilissima */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: 0.35,
          }}
          aria-hidden="true"
        />

      </main>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 bg-[#0F172A]">

        {/* Griglia colonne */}
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

            {/* Colonna brand */}
            <div className="col-span-2 flex flex-col gap-3 md:col-span-1">
              <div className="h-6 w-32 rounded bg-white/15" />
              <div className="mt-1 h-3 w-full rounded bg-white/5" />
              <div className="h-3 w-4/5 rounded bg-white/5" />
              <div className="h-3 w-3/5 rounded bg-white/5" />
              {/* Placeholder icone social */}
              <div className="mt-2 flex gap-2">
                <div className="h-7 w-7 rounded bg-white/10" />
                <div className="h-7 w-7 rounded bg-white/10" />
                <div className="h-7 w-7 rounded bg-white/10" />
              </div>
            </div>

            {/* Colonna 2 */}
            <div className="flex flex-col gap-3">
              <div className="h-4 w-20 rounded bg-white/20" />
              <div className="mt-1 h-3 w-16 rounded bg-white/8" />
              <div className="h-3 w-14 rounded bg-white/8" />
              <div className="h-3 w-16 rounded bg-white/8" />
              <div className="h-3 w-12 rounded bg-white/8" />
            </div>

            {/* Colonna 3 */}
            <div className="flex flex-col gap-3">
              <div className="h-4 w-20 rounded bg-white/20" />
              <div className="mt-1 h-3 w-16 rounded bg-white/8" />
              <div className="h-3 w-14 rounded bg-white/8" />
              <div className="h-3 w-16 rounded bg-white/8" />
              <div className="h-3 w-12 rounded bg-white/8" />
            </div>

            {/* Colonna 4 */}
            <div className="flex flex-col gap-3">
              <div className="h-4 w-20 rounded bg-white/20" />
              <div className="mt-1 h-3 w-16 rounded bg-white/8" />
              <div className="h-3 w-14 rounded bg-white/8" />
              <div className="h-3 w-16 rounded bg-white/8" />
              <div className="h-3 w-12 rounded bg-white/8" />
            </div>

          </div>
        </div>

        {/* Barra inferiore */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <div className="h-3 w-44 rounded bg-white/10" />
            <div className="flex gap-4">
              <div className="h-3 w-16 rounded bg-white/10" />
              <div className="h-3 w-16 rounded bg-white/10" />
            </div>
          </div>
        </div>

      </footer>

    </div>
  )
}

export default App
