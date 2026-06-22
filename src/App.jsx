function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#F8FAFC]">

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
  )
}

export default App
