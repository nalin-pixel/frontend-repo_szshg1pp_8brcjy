import React from 'react';
import Hero3DCover from './components/Hero3DCover';
import LoginCard from './components/LoginCard';
import FeaturesStrip from './components/FeaturesStrip';
import FooterMeta from './components/FooterMeta';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      {/* Hero with Spline 3D cover */}
      <Hero3DCover />

      {/* Login card */}
      <LoginCard />

      {/* Feature highlights */}
      <FeaturesStrip />

      {/* Footer */}
      <FooterMeta />
    </div>
  );
}

export default App;
