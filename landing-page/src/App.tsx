import React from 'react';

function App() {
  return (
    <div className="app-wrapper">
      <header className="minimal-header">
        <div className="logo">Marg <span>OS</span></div>
        <nav className="header-links">
          <a href="https://github.com/NetPranav/Marg-Hacathon" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>

      <main className="minimal-main">
        <section className="hero-section">
          <h1>Logistics, Orchestrated.</h1>
          <p className="subtitle">A unified platform connecting factories, warehouses, and drivers in real-time.</p>
        </section>

        <section className="tree-workflow-section">
          <div className="tree-container">
            <div className="tree-line"></div>
            
            {/* Step 1 */}
            <div className="tree-node">
              <div className="node-marker">1</div>
              <div className="node-content">
                <div className="node-header">
                  <h3>The Origin</h3>
                  <span className="badge factory-badge">Factory Portal</span>
                </div>
                <p>Register as a Factory Manager. Create a new shipment request, specifying the cargo and destination warehouse.</p>
                <a href="https://margfactory.vercel.app" className="node-cta factory-cta">
                  Launch Factory Portal &rarr;
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="tree-node alt-node">
              <div className="node-marker">2</div>
              <div className="node-content">
                <div className="node-header">
                  <h3>The Orchestrator</h3>
                  <span className="badge admin-badge">Admin OS</span>
                </div>
                <p>Log into the Logistics OS as a Dispatcher. Review the pending shipment request and assign a vehicle and driver.</p>
                <a href="https://marg-shipment.vercel.app" className="node-cta admin-cta">
                  Launch Admin Portal &rarr;
                </a>
              </div>
            </div>

            {/* Step 3 */}
            <div className="tree-node">
              <div className="node-marker">3</div>
              <div className="node-content">
                <div className="node-header">
                  <h3>The Execution</h3>
                  <span className="badge driver-badge">Driver App</span>
                </div>
                <p>Log in as the assigned driver. Start the trip, update transit statuses, and track live ETA automatically.</p>
                <a href="https://marg-shipment.vercel.app" className="node-cta driver-cta">
                  Launch Driver App &rarr;
                </a>
              </div>
            </div>

            {/* Step 4 */}
            <div className="tree-node alt-node">
              <div className="node-marker">4</div>
              <div className="node-content">
                <div className="node-header">
                  <h3>The Destination</h3>
                  <span className="badge warehouse-badge">Warehouse Portal</span>
                </div>
                <p>Log in as the Receiving Manager. Monitor the incoming truck, pre-allocate a dock bay, and receive the shipment.</p>
                <a href="https://marg-warehouse-theta.vercel.app" className="node-cta warehouse-cta">
                  Launch Warehouse Portal &rarr;
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
