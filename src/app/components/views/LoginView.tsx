import React, { useState } from 'react';
import { Leaf, Lock, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface LoginViewProps {
  onLogin: () => void;
}

export function LoginView({ onLogin }: LoginViewProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'admin' | 'tecnico'>('admin');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Leaf className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">RAEE-Tracker</h1>
            <p className="text-muted-foreground text-center mt-2">
              Sistema de Gestión de Residuos Electrónicos
            </p>
            <p className="text-sm text-muted-foreground mt-1">UNAD Zona Caribe</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block mb-2 text-sm font-medium text-foreground">
                Tipo de Usuario
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole('admin')}
                  className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                    role === 'admin'
                      ? 'border-primary bg-primary text-white'
                      : 'border-border bg-white text-foreground hover:border-primary/50'
                  }`}
                >
                  Administrador
                </button>
                <button
                  type="button"
                  onClick={() => setRole('tecnico')}
                  className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                    role === 'tecnico'
                      ? 'border-secondary bg-secondary text-white'
                      : 'border-border bg-white text-foreground hover:border-secondary/50'
                  }`}
                >
                  Técnico
                </button>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-foreground">
                Correo Institucional
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="usuario@unad.edu.co"
                  className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-foreground">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Ingresar al Sistema
            </Button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-primary hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>

        {/* Info Footer */}
        <div className="text-center text-white/90 text-sm">
          <p>Sistema de Gestión Ambiental - Ley 1672 de 2013</p>
          <p className="mt-1 text-white/70">Universidad Nacional Abierta y a Distancia</p>
        </div>
      </div>
    </div>
  );
}
