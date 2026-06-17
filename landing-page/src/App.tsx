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
            
            {/* Step 1: Factory */}
            <div className="tree-node">
              <div className="node-marker">1</div>
              <div className="node-content">
                <div className="node-header">
                  <h3>The Origin</h3>
                  <span className="badge factory-badge">Factory Portal</span>
                </div>
                <div className="sub-steps">
                  <div className="sub-step"><strong>1.</strong> Navigate to the Factory Portal and Register/Login.</div>
                  <div className="sub-step"><strong>2.</strong> Go to "Create Lot" to begin a new cargo request.</div>
                  <div className="sub-step"><strong>3.</strong> Enter the shipment details and assign it to a destination Warehouse.</div>
                  <div className="sub-step"><strong>4.</strong> Submit the request to alert Logistics.</div>
                </div>
                <a href="https://margfactory.vercel.app" className="node-cta factory-cta">
                  Launch Factory Portal &rarr;
                </a>
              </div>
            </div>

            {/* Step 2: Admin */}
            <div className="tree-node alt-node">
              <div className="node-marker">2</div>
              <div className="node-content">
                <div className="node-header">
                  <h3>The Orchestrator</h3>
                  <span className="badge admin-badge">Admin OS</span>
                </div>
                <div className="sub-steps">
                  <div className="sub-step"><strong>1.</strong> Log into the Logistics Admin Portal.</div>
                  <div className="sub-step"><strong>2.</strong> View the pending shipment request created by the factory.</div>
                  <div className="sub-step"><strong>3.</strong> Assign an available Truck and Driver to the shipment.</div>
                  <div className="sub-step"><strong>4.</strong> Approve the assignment to dispatch the driver.</div>
                </div>
                <a href="https://marg-shipment.vercel.app" className="node-cta admin-cta">
                  Launch Admin Portal &rarr;
                </a>
              </div>
            </div>

            {/* Step 3: Driver */}
            <div className="tree-node">
              <div className="node-marker">3</div>
              <div className="node-content">
                <div className="node-header">
                  <h3>The Execution</h3>
                  <span className="badge driver-badge">Driver App</span>
                </div>
                <div className="sub-steps">
                  <div className="sub-step"><strong>1.</strong> Log into the Driver App with the assigned driver's credentials.</div>
                  <div className="sub-step"><strong>2.</strong> Click "Start Trip" to head to the Factory.</div>
                  <div className="sub-step"><strong>3.</strong> Click "Arrived at Origin", load the cargo, then click "Dispatched".</div>
                  <div className="sub-step"><strong>4.</strong> The system tracks your GPS location and updates ETAs automatically.</div>
                </div>
                <a href="https://marg-shipment.vercel.app" className="node-cta driver-cta">
                  Launch Driver App &rarr;
                </a>
              </div>
            </div>

            {/* Step 4: Warehouse */}
            <div className="tree-node alt-node">
              <div className="node-marker">4</div>
              <div className="node-content">
                <div className="node-header">
                  <h3>The Destination</h3>
                  <span className="badge warehouse-badge">Warehouse Portal</span>
                </div>
                <div className="sub-steps">
                  <div className="sub-step"><strong>1.</strong> Log into the Warehouse Portal as the Receiving Manager.</div>
                  <div className="sub-step"><strong>2.</strong> Monitor the incoming truck's live ETA on the dashboard.</div>
                  <div className="sub-step"><strong>3.</strong> Pre-allocate a Dock Bay (e.g. D-01) for the incoming shipment.</div>
                  <div className="sub-step"><strong>4.</strong> When the driver arrives, verify the cargo and complete the shipment lifecycle!</div>
                </div>
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
