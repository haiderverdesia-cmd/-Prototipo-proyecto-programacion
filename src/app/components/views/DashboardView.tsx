import React from 'react';
import {
  Package,
  AlertTriangle,
  TrendingUp,
  Leaf,
  MapPin,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';

export function DashboardView() {
  const stats = [
    {
      title: 'Total RAEE Registrados',
      value: '1,247',
      change: '+12%',
      icon: Package,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Pendientes Disposición',
      value: '89',
      change: '-5%',
      icon: Clock,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      title: 'Alertas Activas',
      value: '12',
      change: '+3',
      icon: AlertTriangle,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10'
    },
    {
      title: 'Material Recuperado',
      value: '2.4 Ton',
      change: '+18%',
      icon: Leaf,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
  ];

  const sedeData = [
    { sede: 'Barranquilla', cantidad: 487 },
    { sede: 'Cartagena', cantidad: 356 },
    { sede: 'Santa Marta', cantidad: 289 },
    { sede: 'Corozal', cantidad: 115 },
  ];

  const clasificacionData = [
    { name: 'Línea Gris', value: 45, color: '#64748b' },
    { name: 'Línea Marrón', value: 30, color: '#78350f' },
    { name: 'Línea Blanca', value: 25, color: '#f1f5f9' },
  ];

  const trendData = [
    { mes: 'Ene', registros: 65, disposicion: 45 },
    { mes: 'Feb', registros: 78, disposicion: 52 },
    { mes: 'Mar', registros: 90, disposicion: 68 },
    { mes: 'Abr', registros: 81, disposicion: 75 },
    { mes: 'May', registros: 95, disposicion: 82 },
  ];

  const alertasRecientes = [
    { tipo: 'Almacenamiento', mensaje: '15 equipos superan 6 meses', sede: 'Barranquilla', nivel: 'alta' },
    { tipo: 'Certificación', mensaje: 'Gestor "EcoRecicla SAS" vence en 30 días', sede: 'Todas', nivel: 'media' },
    { tipo: 'Capacidad', mensaje: 'Bodega Cartagena al 85%', sede: 'Cartagena', nivel: 'media' },
    { tipo: 'Riesgo', mensaje: '3 equipos con sustancias peligrosas sin tratar', sede: 'Santa Marta', nivel: 'alta' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                    <span className={`text-sm ${stat.change.startsWith('+') ? 'text-secondary' : 'text-destructive'}`}>
                      {stat.change} vs mes anterior
                    </span>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart - Sedes */}
        <Card>
          <CardHeader>
            <CardTitle>Equipos RAEE por Sede</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sedeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="sede" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="cantidad" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart - Clasificación */}
        <Card>
          <CardHeader>
            <CardTitle>Clasificación por Línea</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={clasificacionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {clasificacionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Tendencia de Registro y Disposición</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="registros" stroke="#0369a1" strokeWidth={2} name="Registros" />
              <Line type="monotone" dataKey="disposicion" stroke="#10b981" strokeWidth={2} name="Disposición Final" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Alerts and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Alertas Recientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alertasRecientes.map((alerta, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    alerta.nivel === 'alta'
                      ? 'border-destructive bg-destructive/5'
                      : 'border-warning bg-warning/5'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{alerta.tipo}</p>
                      <p className="text-sm text-muted-foreground mt-1">{alerta.mensaje}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      alerta.nivel === 'alta'
                        ? 'bg-destructive text-white'
                        : 'bg-warning text-white'
                    }`}>
                      {alerta.nivel.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{alerta.sede}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Environmental Impact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-secondary" />
              Impacto Ambiental
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Huella de Carbono Reducida</span>
                  <span className="text-2xl font-bold text-secondary">3.2 Ton CO₂</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-secondary h-3 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Meta anual: 78% completada</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Material Recuperable</span>
                  <span className="text-2xl font-bold text-primary">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-primary h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">2.4 Ton de materiales valorizables</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-bold">1,158</p>
                  <p className="text-xs text-muted-foreground">Equipos Procesados</p>
                </div>
                <div className="text-center">
                  <XCircle className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-2xl font-bold">89</p>
                  <p className="text-xs text-muted-foreground">Pendientes</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Mapa de Sedes - Zona Caribe
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative bg-muted rounded-lg h-80 overflow-hidden">
            {/* Simplified map representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="grid grid-cols-2 gap-8">
                  {sedeData.map((sede, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="font-bold">{sede.sede}</p>
                      <p className="text-2xl font-bold text-secondary mt-2">{sede.cantidad}</p>
                      <p className="text-xs text-muted-foreground">equipos RAEE</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
