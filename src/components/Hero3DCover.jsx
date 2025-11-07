import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero3DCover = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for mood (do not block scene interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(0,119,255,0.18),_transparent_60%)]" />

      {/* Heading content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Rekam Medis Cerdas
            <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              untuk Era Techno-Health
            </span>
          </h1>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            Akses aman, cepat, dan terintegrasi. Rasakan pengalaman login yang futuristik
            dengan sentuhan 3D.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3DCover;
