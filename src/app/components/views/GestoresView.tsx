import React from 'react';
import { Recycle, CheckCircle, AlertTriangle, Calendar, Phone, Mail, MapPin, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

export function GestoresView() {
  const gestores = [
    {
      nombre: 'EcoRecicla SAS',
      certificacion: 'ANLA-2023-001',
      estado: 'vigente',
      vencimiento: '2025-12-31',
      contacto: {
        telefono: '+57 300 123 4567',
        email: 'contacto@ecorecicla.com.co',
        direccion: 'Calle 45 #23-12, Barranquilla'
      },
      entregas: 145,
      toneladas: 12.4,
      certificaciones: ['ISO 14001', 'OHSAS 18001', 'ANLA']
    },
    {
      nombre: 'GreenTech Colombia',
      certificacion: 'ANLA-2023-045',
      estado: 'vigente',
      vencimiento: '2026-06-30',
      contacto: {
        telefono: '+57 315 987 6543',
        email: 'info@greentech.co',
        direccion: 'Av. Bolívar #89-34, Cartagena'
      },
      entregas: 98,
      toneladas: 8.7,
      certificaciones: ['ISO 14001', 'ISO 9001']
    },
    {
      nombre: 'ReciclaComp Ltda',
      certificacion: 'ANLA-2022-123',
      estado: 'por_vencer',
      vencimiento: '2024-07-15',
      contacto: {
        telefono: '+57 320 456 7890',
        email: 'servicios@reciclacomp.co',
        direccion: 'Carrera 5 #12-34, Santa Marta'
      },
      entregas: 67,
      toneladas: 5.2,
      certificaciones: ['ISO 14001']
    },
  ];

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case 'vigente':
        return 'bg-secondary text-white';
      case 'por_vencer':
        return 'bg-warning text-white';
      case 'vencido':
        return 'bg-destructive text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getEstadoTexto = (estado: string) => {
    switch (estado) {
      case 'vigente':
        return 'Certificación Vigente';
      case 'por_vencer':
        return 'Por Vencer (30 días)';
      case 'vencido':
        return 'Certificación Vencida';
      default:
        return 'Sin Estado';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Gestores Ambientales Autorizados</h2>
          <p className="text-muted-foreground mt-1">Empresas certificadas para disposición final de RAEE</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Recycle className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">{gestores.length}</p>
            <p className="text-sm text-muted-foreground">Gestores Activos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-10 h-10 text-secondary mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">
              {gestores.filter(g => g.estado === 'vigente').length}
            </p>
            <p className="text-sm text-muted-foreground">Certificaciones Vigentes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-10 h-10 text-warning mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">
              {gestores.filter(g => g.estado === 'por_vencer').length}
            </p>
            <p className="text-sm text-muted-foreground">Por Vencer</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Package className="w-10 h-10 text-accent mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">
              {gestores.reduce((acc, g) => acc + g.entregas, 0)}
            </p>
            <p className="text-sm text-muted-foreground">Total Entregas</p>
          </CardContent>
        </Card>
      </div>

      {/* Gestores List */}
      <div className="space-y-4">
        {gestores.map((gestor, index) => (
          <Card key={index} className={`border-l-4 ${
            gestor.estado === 'vigente' ? 'border-l-secondary' :
            gestor.estado === 'por_vencer' ? 'border-l-warning' :
            'border-l-destructive'
          }`}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                    gestor.estado === 'vigente' ? 'bg-secondary/10' :
                    gestor.estado === 'por_vencer' ? 'bg-warning/10' :
                    'bg-destructive/10'
                  }`}>
                    <Recycle className={`w-8 h-8 ${
                      gestor.estado === 'vigente' ? 'text-secondary' :
                      gestor.estado === 'por_vencer' ? 'text-warning' :
                      'text-destructive'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{gestor.nombre}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Certificación: {gestor.certificacion}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {gestor.certificaciones.map((cert, i) => (
                        <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-4 py-2 rounded-lg font-medium text-sm ${getEstadoBadge(gestor.estado)}`}>
                    {getEstadoTexto(gestor.estado)}
                  </span>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Vence: {gestor.vencimiento}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Info */}
                <div>
                  <h4 className="font-medium mb-3">Información de Contacto</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{gestor.contacto.telefono}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{gestor.contacto.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{gestor.contacto.direccion}</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div>
                  <h4 className="font-medium mb-3">Historial de Entregas</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-primary">{gestor.entregas}</p>
                      <p className="text-xs text-muted-foreground mt-1">Entregas Totales</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-secondary">{gestor.toneladas}</p>
                      <p className="text-xs text-muted-foreground mt-1">Toneladas Procesadas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border flex gap-2">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                  Ver Historial Completo
                </button>
                <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium">
                  Descargar Certificación
                </button>
                {gestor.estado === 'por_vencer' && (
                  <button className="px-4 py-2 bg-warning text-white rounded-lg hover:bg-warning/90 transition-colors text-sm font-medium ml-auto">
                    Solicitar Renovación
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
