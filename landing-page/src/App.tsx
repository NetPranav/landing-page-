import React, { useRef } from 'react';
import Ballpit, { BallpitHandle } from './components/Ballpit';

function App() {
  const ballpitRef = useRef<BallpitHandle>(null);

  const handleMouseEnter = () => {
    if (ballpitRef.current) {
      ballpitRef.current.dropCursorBalloon();
    }
  };

  const handleMouseLeave = () => {
    if (ballpitRef.current) {
      ballpitRef.current.restoreCursorBalloon();
    }
  };

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <Ballpit
          ref={ballpitRef}
          count={100}
          gravity={0.1}
          friction={0.9975}
          wallBounce={0.95}
          followCursor
          colors={["#5227FF", "#7cff67", "#ff6b6b"]}
        />
      </div>

      <header>
        <div className="logo">Marg <span>OS</span></div>
      </header>

      <main>
        <h1>Welcome to Marg OS Ecosystem</h1>
        <p className="subtitle">A unified platform orchestrating seamless logistics across factories, warehouses, and drivers.</p>

        <div className="cards-container">
          <a href="http://localhost:3002" className="glass-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="card-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
            <h3>Visit Driver's Dashboard</h3>
            <span>Launch Portal &rarr;</span>
          </a>

          <a href="http://localhost:3000" className="glass-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="card-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3>Visit Factory Dashboard</h3>
            <span>Launch Portal &rarr;</span>
          </a>

          <a href="http://localhost:3001" className="glass-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="card-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h3>Visit Warehouse Dashboard</h3>
            <span>Launch Portal &rarr;</span>
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
