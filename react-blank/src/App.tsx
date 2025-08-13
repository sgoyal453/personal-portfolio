function App() {
  return (
    <>
      <div className="glass-panel" role="region" aria-label="Frosted glass panel">
        <div className="glass-panel__content">Welcome</div>
      </div>
      {/* Frost overlay that ripples out and covers the whole page */}
      <div className="frost-overlay" aria-hidden="true" />
    </>
  )
}

export default App
