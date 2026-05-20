import React, { useState } from 'react';
import { Plus, QrCode, Upload, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function RegistroView() {
  const [showForm, setShowForm] = useState(false);

  const equipos = [
    { codigo: 'UNAD-BAQ-001', tipo: 'Computador', marca: 'Dell', estado: 'Baja', sede: 'Barranquilla', fecha: '2024-01-15' },
    { codigo: 'UNAD-CTG-045', tipo: 'Monitor', marca: 'LG', estado: 'Baja', sede: 'Cartagena', fecha: '2024-02-20' },
    { codigo: 'UNAD-STA-023', tipo: 'Impresora', marca: 'HP', estado: 'Baja', sede: 'Santa Marta', fecha: '2024-03-10' },
    { codigo: 'UNAD-COR-008', tipo: 'Scanner', marca: 'Canon', estado: 'Baja', sede: 'Corozal', fecha: '2024-04-05' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Registro de Activos Tecnológicos</h2>
          <p className="text-muted-foreground mt-1">Gestión de equipos electrónicos en desuso</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="w-5 h-5" />
          Nuevo Registro
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Formulario de Registro RAEE</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Código o Placa UNAD" placeholder="UNAD-XXX-000" required />
                <Input label="Serial del Equipo" placeholder="ABC123XYZ456" required />

                <div>
                  <label className="block mb-2 text-sm font-medium">Tipo de Equipo</label>
                  <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Computador</option>
                    <option>Monitor</option>
                    <option>Impresora</option>
                    <option>Scanner</option>
                    <option>Teclado</option>
                    <option>Mouse</option>
                    <option>Portátil</option>
                    <option>Tablet</option>
                    <option>Otro</option>
                  </select>
                </div>

                <Input label="Marca" placeholder="Dell, HP, Lenovo..." required />

                <div>
                  <label className="block mb-2 text-sm font-medium">Estado</label>
                  <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Obsoleto</option>
                    <option>Dañado</option>
                    <option>Incompleto</option>
                    <option>Fuera de servicio</option>
                  </select>
                </div>

                <Input label="Fecha de Baja" type="date" required />

                <div>
                  <label className="block mb-2 text-sm font-medium">Sede</label>
                  <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Barranquilla</option>
                    <option>Cartagena</option>
                    <option>Santa Marta</option>
                    <option>Corozal</option>
                  </select>
                </div>

                <Input label="Responsable" placeholder="Nombre del responsable" required />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Observaciones</label>
                <textarea
                  className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-24"
                  placeholder="Detalles adicionales del equipo..."
                ></textarea>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block mb-2 text-sm font-medium">Fotografías del Equipo</label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Tomar foto</p>
                  </div>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Subir imagen</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Button type="submit" variant="primary">
                  <QrCode className="w-5 h-5" />
                  Registrar y Generar QR
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Equipos Registrados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-sm">Código</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Tipo</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Marca</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Estado</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Sede</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">Fecha</th>
                  <th className="text-left py-3 px-4 font-medium text-sm">QR</th>
                </tr>
              </thead>
              <tbody>
                {equipos.map((equipo, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 font-medium">{equipo.codigo}</td>
                    <td className="py-3 px-4">{equipo.tipo}</td>
                    <td className="py-3 px-4">{equipo.marca}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-warning/10 text-warning rounded text-xs font-medium">
                        {equipo.estado}
                      </span>
                    </td>
                    <td className="py-3 px-4">{equipo.sede}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{equipo.fecha}</td>
                    <td className="py-3 px-4">
                      <button className="p-2 hover:bg-primary/10 rounded transition-colors">
                        <QrCode className="w-5 h-5 text-primary" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
