import React from 'react';
import { AlertTriangle, Clock, Shield, TrendingUp, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

export function AlertasView() {
  const alertas = [
    {
      tipo: 'Almacenamiento Crítico',
      nivel: 'alta',
      mensaje: '15 equipos almacenados por más de 6 meses',
      detalles: 'Superan el tiempo máximo recomendado de almacenamiento temporal',
      sede: 'Barranquilla',
      fecha: '2024-05-15',
      equipos: ['UNAD-BAQ-001', 'UNAD-BAQ-002', 'UNAD-BAQ-003', '+12 más'],
      icono: Clock
    },
    {
      tipo: 'Certificación por Vencer',
      nivel: 'media',
      mensaje: 'Gestor "EcoRecicla SAS" vence en 30 días',
      detalles: 'Certificación ambiental ANLA-2023-001 próxima a expirar',
      sede: 'Todas',
      fecha: '2024-05-14',
      equipos: null,
      icono: Shield
    },
    {
      tipo: 'Capacidad de Almacenamiento',
      nivel: 'media',
      mensaje: 'Bodega Cartagena al 85% de capacidad',
      detalles: 'Se recomienda programar recolección con gestor autorizado',
      sede: 'Cartagena',
      fecha: '2024-05-13',
      equipos: ['89 equipos en bodega'],
      icono: TrendingUp
    },
    {
      tipo: 'Riesgo Ambiental',
      nivel: 'alta',
      mensaje: '3 equipos con sustancias peligrosas sin tratar',
      detalles: 'Equipos clasificados con alta peligrosidad requieren atención prioritaria',
      sede: 'Santa Marta',
      fecha: '2024-05-12',
      equipos: ['UNAD-STA-023', 'UNAD-STA-045', 'UNAD-STA-067'],
      icono: AlertTriangle
    },
    {
      tipo: 'Documentación Pendiente',
      nivel: 'baja',
      mensaje: '5 actas de baja sin firmar',
      detalles: 'Documentos administrativos requieren aprobación final',
      sede: 'Corozal',
      fecha: '2024-05-10',
      equipos: null,
      icono: Shield
    },
    {
      tipo: 'Meta de Sostenibilidad',
      nivel: 'info',
      mensaje: 'Meta mensual de reciclaje alcanzada al 95%',
      detalles: 'Objetivo de 2.5 toneladas casi completado',
      sede: 'Todas',
      fecha: '2024-05-09',
      equipos: null,
      icono: TrendingUp
    },
  ];

  const getNivelConfig = (nivel: string) => {
    switch (nivel) {
      case 'alta':
        return {
          bgColor: 'bg-destructive/5',
          borderColor: 'border-destructive',
          textColor: 'text-destructive',
          badgeColor: 'bg-destructive text-white'
        };
      case 'media':
        return {
          bgColor: 'bg-warning/5',
          borderColor: 'border-warning',
          textColor: 'text-warning',
          badgeColor: 'bg-warning text-white'
        };
      case 'baja':
        return {
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-400',
          textColor: 'text-blue-600',
          badgeColor: 'bg-blue-500 text-white'
        };
      default:
        return {
          bgColor: 'bg-secondary/5',
          borderColor: 'border-secondary',
          textColor: 'text-secondary',
          badgeColor: 'bg-secondary text-white'
        };
    }
  };

  const alertasPorNivel = {
    alta: alertas.filter(a => a.nivel === 'alta').length,
    media: alertas.filter(a => a.nivel === 'media').length,
    baja: alertas.filter(a => a.nivel === 'baja').length,
    info: alertas.filter(a => a.nivel === 'info').length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Centro de Alertas Inteligentes</h2>
        <p className="text-muted-foreground mt-1">Monitoreo y notificaciones en tiempo real</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-destructive">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Alertas Críticas</p>
                <p className="text-3xl font-bold text-destructive">{alertasPorNivel.alta}</p>
              </div>
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-warning">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Alertas Medias</p>
                <p className="text-3xl font-bold text-warning">{alertasPorNivel.media}</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Alertas Bajas</p>
                <p className="text-3xl font-bold text-blue-600">{alertasPorNivel.baja}</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-secondary">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Información</p>
                <p className="text-3xl font-bold text-secondary">{alertasPorNivel.info}</p>
              </div>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts List */}
      <Card>
        <CardHeader>
          <CardTitle>Alertas Activas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alertas.map((alerta, index) => {
              const config = getNivelConfig(alerta.nivel);
              const Icon = alerta.icono;

              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-l-4 ${config.borderColor} ${config.bgColor}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-12 h-12 ${config.bgColor} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${config.textColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-lg">{alerta.tipo}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.badgeColor}`}>
                            {alerta.nivel.toUpperCase()}
                          </span>
                        </div>
                        <p className="font-medium mb-1">{alerta.mensaje}</p>
                        <p className="text-sm text-muted-foreground">{alerta.detalles}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{alerta.sede}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{alerta.fecha}</span>
                    </div>
                  </div>

                  {alerta.equipos && (
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium mb-2">Equipos afectados:</p>
                      <div className="flex flex-wrap gap-2">
                        {alerta.equipos.map((equipo, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white border border-border rounded-lg text-sm font-medium"
                          >
                            {equipo}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                    <button className={`px-4 py-2 ${config.badgeColor} rounded-lg hover:opacity-90 transition-opacity text-sm font-medium`}>
                      Resolver Ahora
                    </button>
                    <button className="px-4 py-2 border border-border bg-white rounded-lg hover:bg-muted transition-colors text-sm font-medium">
                      Ver Detalles
                    </button>
                    <button className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                      Posponer
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
