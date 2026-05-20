import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { LoginView } from './components/views/LoginView';
import { DashboardView } from './components/views/DashboardView';
import { RegistroView } from './components/views/RegistroView';
import { ClasificacionView } from './components/views/ClasificacionView';
import { TrazabilidadView } from './components/views/TrazabilidadView';
import { GestoresView } from './components/views/GestoresView';
import { ReportesView } from './components/views/ReportesView';
import { AlertasView } from './components/views/AlertasView';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'registro':
        return <RegistroView />;
      case 'clasificacion':
        return <ClasificacionView />;
      case 'trazabilidad':
        return <TrazabilidadView />;
      case 'gestores':
        return <GestoresView />;
      case 'reportes':
        return <ReportesView />;
      case 'alertas':
        return <AlertasView />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Sección en Desarrollo</h2>
              <p className="text-muted-foreground">Esta funcionalidad estará disponible próximamente</p>
            </div>
          </div>
        );
    }
  };

  if (!isAuthenticated) {
    return <LoginView onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <div className="ml-64">
        <Header />
        <main className="p-8">
          {renderView()}
        </main>
      </div>
    </div>
  );
}