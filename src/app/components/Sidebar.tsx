import React from 'react';
import {
  LayoutDashboard,
  Package,
  Layers,
  MapPin,
  Recycle,
  FileText,
  Users,
  Settings,
  Leaf,
  Bell
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'registro', icon: Package, label: 'Registro de Activos' },
    { id: 'clasificacion', icon: Layers, label: 'Clasificación RAEE' },
    { id: 'trazabilidad', icon: MapPin, label: 'Trazabilidad' },
    { id: 'gestores', icon: Recycle, label: 'Gestores Ambientales' },
    { id: 'reportes', icon: FileText, label: 'Reportes' },
    { id: 'alertas', icon: Bell, label: 'Alertas' },
    { id: 'usuarios', icon: Users, label: 'Usuarios' },
    { id: 'configuracion', icon: Settings, label: 'Configuración' },
  ];

  return (
    <div className="w-64 h-screen bg-sidebar text-sidebar-foreground flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg">RAEE-Tracker</h1>
            <p className="text-xs text-sidebar-foreground/60">UNAD Zona Caribe</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center">
            <Users className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Admin UNAD</p>
            <p className="text-xs text-sidebar-foreground/60">Administrador</p>
          </div>
        </div>
      </div>
    </div>
  );
}
