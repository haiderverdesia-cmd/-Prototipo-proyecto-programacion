import React from 'react';
import { CheckCircle, Circle, Package, Truck, Building, FileCheck, Calendar, User, Image } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

export function TrazabilidadView() {
  const equipoSeleccionado = {
    codigo: 'UNAD-BAQ-001',
    tipo: 'Computador Dell OptiPlex',
    serie: 'DEL123456789',
  };

  const timeline = [
    {
      etapa: 'Baja Administrativa',
      fecha: '2024-01-15',
      responsable: 'Juan Pérez - Administración',
      estado: 'completado',
      evidencia: true,
      documento: 'Acta_Baja_001.pdf',
      detalles: 'Equipo dado de baja por obsolescencia tecnológica. Vida útil cumplida.'
    },
    {
      etapa: 'Almacenamiento Temporal',
      fecha: '2024-01-20',
      responsable: 'María García - Bodega',
      estado: 'completado',
      evidencia: true,
      documento: 'Registro_Bodega_001.pdf',
      detalles: 'Almacenado en Bodega B - Sección RAEE, Estante A3'
    },
    {
      etapa: 'Clasificación RAEE',
      fecha: '2024-02-05',
      responsable: 'Carlos Mendoza - Técnico Ambiental',
      estado: 'completado',
      evidencia: true,
      documento: 'Clasificacion_001.pdf',
      detalles: 'Clasificado como Línea Gris - Peligrosidad Media'
    },
    {
      etapa: 'Transporte',
      fecha: '2024-03-10',
      responsable: 'EcoTransporte SAS',
      estado: 'completado',
      evidencia: true,
      documento: 'Guia_Transporte_001.pdf',
      detalles: 'Transporte certificado bajo norma NTC-ISO 14001. Vehículo VH-4523'
    },
    {
      etapa: 'Entrega a Gestor',
      fecha: '2024-03-11',
      responsable: 'EcoRecicla SAS',
      estado: 'completado',
      evidencia: true,
      documento: 'Recepcion_Gestor_001.pdf',
      detalles: 'Recibido por gestor autorizado. Certificación vigente hasta 2025-12'
    },
    {
      etapa: 'Disposición Final',
      fecha: '2024-04-02',
      responsable: 'EcoRecicla SAS',
      estado: 'en_proceso',
      evidencia: false,
      documento: null,
      detalles: 'Proceso de desmonte y separación de materiales en curso'
    },
    {
      etapa: 'Certificación Ambiental',
      fecha: null,
      responsable: 'Por asignar',
      estado: 'pendiente',
      evidencia: false,
      documento: null,
      detalles: 'Certificado de disposición final pendiente'
    },
  ];

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'completado':
        return <CheckCircle className="w-6 h-6 text-secondary" />;
      case 'en_proceso':
        return <Circle className="w-6 h-6 text-warning fill-warning" />;
      default:
        return <Circle className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'completado':
        return 'border-secondary bg-secondary/5';
      case 'en_proceso':
        return 'border-warning bg-warning/5';
      default:
        return 'border-border bg-muted/30';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Trazabilidad de Equipos RAEE</h2>
        <p className="text-muted-foreground mt-1">Seguimiento completo del ciclo de vida del residuo</p>
      </div>

      {/* Equipment Info */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl">{equipoSeleccionado.codigo}</h3>
                <p className="text-muted-foreground">{equipoSeleccionado.tipo}</p>
                <p className="text-sm text-muted-foreground">Serie: {equipoSeleccionado.serie}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Estado General</p>
              <span className="px-4 py-2 bg-warning/10 text-warning rounded-lg font-medium">
                En Proceso
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Línea de Tiempo de Trazabilidad</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-16">
                  {/* Icon */}
                  <div className="absolute left-0 top-0">
                    {getEstadoIcon(item.estado)}
                  </div>

                  {/* Card */}
                  <Card className={`border-l-4 ${getEstadoColor(item.estado)}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-lg">{item.etapa}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{item.detalles}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.estado === 'completado' ? 'bg-secondary text-white' :
                          item.estado === 'en_proceso' ? 'bg-warning text-white' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {item.estado === 'completado' ? 'Completado' :
                           item.estado === 'en_proceso' ? 'En Proceso' :
                           'Pendiente'}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {item.fecha && (
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span>{item.fecha}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-sm">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span>{item.responsable}</span>
                        </div>
                        {item.evidencia && (
                          <div className="flex items-center gap-2 text-sm">
                            <Image className="w-4 h-4 text-secondary" />
                            <span className="text-secondary">Evidencia disponible</span>
                          </div>
                        )}
                      </div>

                      {item.documento && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <button className="flex items-center gap-2 text-primary hover:underline text-sm">
                            <FileCheck className="w-4 h-4" />
                            Descargar {item.documento}
                          </button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-12 h-12 text-secondary mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">5</p>
            <p className="text-sm text-muted-foreground">Etapas Completadas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Circle className="w-12 h-12 text-warning fill-warning mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">1</p>
            <p className="text-sm text-muted-foreground">En Proceso</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Circle className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">1</p>
            <p className="text-sm text-muted-foreground">Pendientes</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
