import React, { useRef } from 'react';
import Ballpit, { type BallpitHandle } from './components/Ballpit';

function App() {
  const ballpitRef = useRef<BallpitHandle>(null);

  const handleMouseEnter = () => {
    ballpitRef.current?.dropCursorBalloon();
  };

  const handleMouseLeave = () => {
    ballpitRef.current?.restoreCursorBalloon();
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
          <a href="https://marg-shipment.vercel.app" className="glass-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="card-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
            <h3>Visit Driver's Dashboard</h3>
            <span>Launch Portal &rarr;</span>
          </a>

          <a href="https://margfactory.vercel.app" className="glass-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="card-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3>Visit Factory Dashboard</h3>
            <span>Launch Portal &rarr;</span>
          </a>

          <a href="https://marg-warehouse-theta.vercel.app" className="glass-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="card-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h3>Visit Warehouse Dashboard</h3>
            <span>Launch Portal &rarr;</span>
          </a>
        </div>

        <section className="workflow-section">
          <h2>End-to-End Testing Workflow</h2>
          <p className="workflow-subtitle">Follow these steps to experience the complete Marg ecosystem</p>
          
          <div className="workflow-grid">
            <div className="workflow-step" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="step-number">1</div>
              <h3>The Origin (Factory)</h3>
              <p>Register as a Factory Manager. From your dashboard, create a new shipment or lot, specifying the cargo and destination warehouse.</p>
              <span className="step-tag">margfactory.vercel.app</span>
            </div>
            
            <div className="workflow-step" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="step-number">2</div>
              <h3>The Orchestrator (Admin)</h3>
              <p>Log into the Logistics OS to review the pending shipment request. Assign a vehicle and a driver to the shipment to begin transport.</p>
              <span className="step-tag">marg-shipment.vercel.app</span>
            </div>
            
            <div className="workflow-step" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="step-number">3</div>
              <h3>The Execution (Driver)</h3>
              <p>Log in as the assigned driver. Start the trip, arrive at the origin, load the cargo, and begin your journey, updating ETA automatically.</p>
              <span className="step-tag">marg-shipment.vercel.app</span>
            </div>
            
            <div className="workflow-step" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="step-number">4</div>
              <h3>The Destination (Warehouse)</h3>
              <p>Log in as the Receiving Manager. See the incoming truck on your dashboard, pre-allocate a dock bay, and receive the shipment!</p>
              <span className="step-tag">marg-warehouse-theta.vercel.app</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
