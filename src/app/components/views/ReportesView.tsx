import React from 'react';
import { FileText, Download, TrendingUp, BarChart3, PieChart as PieChartIcon, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';

export function ReportesView() {
  const reportesDisponibles = [
    {
      titulo: 'Reporte Mensual de Gestión RAEE',
      descripcion: 'Resumen completo de equipos registrados, clasificados y dispuestos',
      periodo: 'Mayo 2024',
      tipo: 'PDF',
      tamaño: '2.4 MB'
    },
    {
      titulo: 'Cumplimiento Ley 1672 de 2013',
      descripcion: 'Análisis de cumplimiento normativo y regulatorio',
      periodo: 'Q1 2024',
      tipo: 'PDF',
      tamaño: '1.8 MB'
    },
    {
      titulo: 'Indicadores Ambientales',
      descripcion: 'Huella de carbono, material recuperado y sostenibilidad',
      periodo: 'Anual 2024',
      tipo: 'Excel',
      tamaño: '856 KB'
    },
    {
      titulo: 'Inventario por Sede',
      descripcion: 'Desglose detallado de equipos RAEE por ubicación',
      periodo: 'Mayo 2024',
      tipo: 'Excel',
      tamaño: '1.2 MB'
    },
  ];

  const tiempoAlmacenamiento = [
    { rango: '0-3 meses', cantidad: 245 },
    { rango: '3-6 meses', cantidad: 156 },
    { rango: '6-9 meses', cantidad: 45 },
    { rango: '+9 meses', cantidad: 12 },
  ];

  const materialRecuperado = [
    { mes: 'Ene', cantidad: 1.8 },
    { mes: 'Feb', cantidad: 2.1 },
    { mes: 'Mar', cantidad: 1.9 },
    { mes: 'Abr', cantidad: 2.4 },
    { mes: 'May', cantidad: 2.8 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Reportes y Analítica</h2>
          <p className="text-muted-foreground mt-1">Informes exportables y análisis de gestión RAEE</p>
        </div>
        <Button>
          <Filter className="w-5 h-5" />
          Filtros Avanzados
        </Button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">1,247</p>
            <p className="text-sm text-muted-foreground">Total RAEE</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-10 h-10 text-secondary mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">42 días</p>
            <p className="text-sm text-muted-foreground">Tiempo Promedio</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <BarChart3 className="w-10 h-10 text-accent mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">2.4 Ton</p>
            <p className="text-sm text-muted-foreground">Material Recuperado</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <PieChartIcon className="w-10 h-10 text-warning mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">98.5%</p>
            <p className="text-sm text-muted-foreground">Cumplimiento Ley</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tiempo de Almacenamiento</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tiempoAlmacenamiento}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="rango" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="cantidad" fill="#0369a1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Material Recuperado (Toneladas)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={materialRecuperado}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="cantidad" stroke="#10b981" strokeWidth={3} name="Toneladas" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Available Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Reportes Disponibles para Descarga</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reportesDisponibles.map((reporte, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">{reporte.titulo}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{reporte.descripcion}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-muted-foreground">Periodo: {reporte.periodo}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        reporte.tipo === 'PDF' ? 'bg-destructive/10 text-destructive' : 'bg-secondary/10 text-secondary'
                      }`}>
                        {reporte.tipo}
                      </span>
                      <span className="text-xs text-muted-foreground">{reporte.tamaño}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                    Descargar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Compliance Card */}
      <Card className="border-l-4 border-l-secondary">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-8 h-8 text-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl mb-2">Cumplimiento Normativo - Ley 1672 de 2013</h3>
              <p className="text-muted-foreground mb-4">
                Regulación colombiana sobre gestión integral de residuos de aparatos eléctricos y electrónicos
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Registro de Generadores</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-sm font-bold text-secondary">100%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Gestores Certificados</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-sm font-bold text-secondary">100%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Trazabilidad Documentada</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div className="bg-warning h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <span className="text-sm font-bold text-warning">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
