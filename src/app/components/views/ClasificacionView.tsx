import React from 'react';
import { Monitor, Printer, Smartphone, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

export function ClasificacionView() {
  const equiposClasificar = [
    {
      codigo: 'UNAD-BAQ-001',
      tipo: 'Computador Dell OptiPlex',
      linea: 'Gris',
      peligrosidad: 'Media',
      componentes: ['Aluminio', 'Cobre', 'Plástico ABS', 'Vidrio'],
      toxicos: ['Plomo (Soldadura)', 'Mercurio (Pantalla)'],
      recuperable: 85,
      color: 'text-slate-600',
      bgColor: 'bg-slate-100'
    },
    {
      codigo: 'UNAD-CTG-045',
      tipo: 'Impresora HP LaserJet',
      linea: 'Marrón',
      peligrosidad: 'Baja',
      componentes: ['Plástico', 'Acero', 'Tóner'],
      toxicos: ['Partículas de tóner'],
      recuperable: 70,
      color: 'text-amber-800',
      bgColor: 'bg-amber-100'
    },
    {
      codigo: 'UNAD-STA-023',
      tipo: 'Aire Acondicionado',
      linea: 'Blanca',
      peligrosidad: 'Alta',
      componentes: ['Aluminio', 'Cobre', 'Acero'],
      toxicos: ['Gas refrigerante R-410A', 'Aceites'],
      recuperable: 90,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
  ];

  const getPeligrosidadBadge = (nivel: string) => {
    const styles = {
      'Alta': 'bg-destructive text-white',
      'Media': 'bg-warning text-white',
      'Baja': 'bg-secondary text-white',
    };
    return styles[nivel as keyof typeof styles] || styles.Media;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Clasificación Inteligente RAEE</h2>
        <p className="text-muted-foreground mt-1">Sistema automático de categorización por línea y peligrosidad</p>
      </div>

      {/* Classification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-slate-500">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Monitor className="w-8 h-8 text-slate-600" />
              <div>
                <h3 className="font-bold">Línea Gris</h3>
                <p className="text-xs text-muted-foreground">IT & Telecomunicaciones</p>
              </div>
            </div>
            <p className="text-3xl font-bold mb-2">561</p>
            <p className="text-sm text-muted-foreground">Equipos clasificados</p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Tipos comunes:</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">PC</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">Laptop</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">Monitor</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">Router</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Printer className="w-8 h-8 text-amber-800" />
              <div>
                <h3 className="font-bold">Línea Marrón</h3>
                <p className="text-xs text-muted-foreground">Audio, Video & Foto</p>
              </div>
            </div>
            <p className="text-3xl font-bold mb-2">374</p>
            <p className="text-sm text-muted-foreground">Equipos clasificados</p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Tipos comunes:</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">Impresora</span>
                <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">Scanner</span>
                <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">Proyector</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Smartphone className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-bold">Línea Blanca</h3>
                <p className="text-xs text-muted-foreground">Electrodomésticos</p>
              </div>
            </div>
            <p className="text-3xl font-bold mb-2">312</p>
            <p className="text-sm text-muted-foreground">Equipos clasificados</p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Tipos comunes:</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">A/C</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Nevera</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Microondas</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Classification */}
      <div className="space-y-4">
        {equiposClasificar.map((equipo, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-lg">{equipo.codigo}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${equipo.bgColor} ${equipo.color}`}>
                      {equipo.linea}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPeligrosidadBadge(equipo.peligrosidad)}`}>
                      {equipo.peligrosidad} Peligrosidad
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-1">{equipo.tipo}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-secondary">{equipo.recuperable}%</p>
                  <p className="text-xs text-muted-foreground">Material Recuperable</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Componentes Recuperables */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <h4 className="font-medium">Componentes Recuperables</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {equipo.componentes.map((comp, i) => (
                      <span key={i} className="px-3 py-1 bg-secondary/10 text-secondary rounded-lg text-sm">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Materiales Tóxicos */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <h4 className="font-medium">Materiales Peligrosos Detectados</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {equipo.toxicos.map((tox, i) => (
                      <span key={i} className="px-3 py-1 bg-destructive/10 text-destructive rounded-lg text-sm flex items-center gap-1">
                        <XCircle className="w-3 h-3" />
                        {tox}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Badge */}
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">Clasificación automática por IA</span>
                </div>
                <button className="text-sm text-primary hover:underline">
                  Ver detalles técnicos →
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
