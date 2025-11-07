import React from 'react';

const FooterMeta = () => {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/80 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} TechnoHealth EMR. Semua hak dilindungi.
        </p>
        <div className="text-xs text-slate-500">
          Dibangun dengan fokus pada privasi pasien dan interoperabilitas.
        </div>
      </div>
    </footer>
  );
};

export default FooterMeta;
