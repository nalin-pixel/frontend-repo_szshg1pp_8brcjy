import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, User } from 'lucide-react';

const InputField = ({ icon: Icon, type = 'text', placeholder, value, onChange, name }) => (
  <div className="group relative">
    <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
      <Icon size={18} />
    </div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-700/60 bg-slate-900/60 py-3 pl-10 pr-4 text-slate-100 outline-none transition focus:border-sky-500/60 focus:bg-slate-900/80 focus:ring-2 focus:ring-sky-500/20"
    />
    <div className="pointer-events-none absolute inset-0 -z-0 rounded-xl opacity-0 blur-md transition group-focus-within:opacity-100" />
  </div>
);

const LoginCard = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await new Promise((res) => setTimeout(res, 700));
      if (!form.email || !form.password) throw new Error('Lengkapi email dan kata sandi.');
      // Here we'd call the backend auth endpoint.
      alert('Login sukses!');
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="-mt-24 flex w-full justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/20 via-cyan-400/10 to-blue-700/10 blur-2xl" />
        <div className="relative rounded-3xl border border-slate-800/60 bg-slate-900/60 p-6 backdrop-blur-xl shadow-2xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg">
              <Shield size={22} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Portal Klinis</h3>
              <p className="text-sm text-slate-400">Masuk untuk mengakses rekam medis Anda</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <InputField
              icon={User}
              name="email"
              type="email"
              placeholder="Email klinik atau NIK"
              value={form.email}
              onChange={onChange}
            />
            <InputField
              icon={Lock}
              name="password"
              type="password"
              placeholder="Kata sandi"
              value={form.password}
              onChange={onChange}
            />

            {error && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-2 text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 px-4 py-3 font-medium text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-sky-500/40 disabled:opacity-60"
            >
              <span className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 transition group-hover:opacity-100" />
              {loading ? 'Memproses...' : 'Masuk'}
            </button>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <button type="button" className="hover:text-slate-200">Lupa kata sandi?</button>
              <button type="button" className="hover:text-slate-200">Daftar fasilitas</button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginCard;
