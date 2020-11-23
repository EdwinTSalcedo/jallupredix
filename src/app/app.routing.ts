import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { InicioComponent } from './components/inicio.component';
import { AcercaComponent } from './components/acerca.component';
import { UsuarioAdicionarComponent } from './components/usuario-adicionar.component';
import { UsuarioEditarComponent } from './components/usuario-editar.component';
import { UsuariosTablaEditarComponent } from './components/usuarios-tabla-editar.component';
import { UsuarioEditarContraseñaComponent } from './components/usuario-editar-contraseña.component';
import { EstacionAdicionarComponent } from './components/estacion-adicionar.component';
import { EstacionEditarComponent } from './components/estacion-editar.component';
import { RedesMonitoreoTablaComponent } from './components/redes.monitoreo.tabla.component';
import { EstacionesTablaComponent } from './components/estaciones.tabla.component';
import { EstacionesDetallesTablaComponent } from './components/estacion.detalles.tabla.component';

// Graficas
import { GraficaDiaComponent } from './components/grafica.dia.component';
import { GraficaMensualComponent } from './components/grafica.mensual.component';
import { GraficaAnualComponent } from './components/grafica.anual.component';
import { MapaComponent } from './components/mapa.component';
import { MapaEstacionComponent } from './components/mapa.estacion.component';
import { Mapa2EstacionComponent } from './components/mapa2.estacion.component';
import { Mapa3EstacionComponent } from './components/mapa3.estacion.component';
import { MapaSatelitalComponent } from './components/mapa.satelital.component';
import { MapaHibridoComponent } from './components/mapa.hibrido.component';
import { MapaRutasComponent } from './components/mapa.rutas.component';


// Dispositivos
import { DispositivoAdicionarComponent } from './components/dispositivo.adicionar.component';
import { DispositivoEditarComponent } from './components/dispositivo.editar.component';


import { ErrorComponent } from './components/error.component';



const appRoutes: Routes = [

	{path:'',component:InicioComponent},
	{path:'inicio',component:InicioComponent},
	{path:'acerca',component:AcercaComponent},
	{path:'adicionar-usuario',component:UsuarioAdicionarComponent},
	{path:'editar-usuario/:id',component:UsuarioEditarComponent},
	{path:'editar-usuarios',component:UsuariosTablaEditarComponent},
	{path:'editar-usuario-contraseña/:id',component:UsuarioEditarContraseñaComponent},
	{path:'adicionar-estacion',component:EstacionAdicionarComponent},
	{path:'editar-estacion/:id',component:EstacionEditarComponent},
	{path:'redes-monitoreo',component:RedesMonitoreoTablaComponent},
	{path:'estaciones',component:EstacionesTablaComponent},
	{path:'estacion',component:EstacionesDetallesTablaComponent},
	{path:'grafica-dia',component:GraficaDiaComponent},
	{path:'grafica-mensual',component:GraficaMensualComponent},
	{path:'grafica-anual',component:GraficaAnualComponent},
	{path:'mapas',component:MapaComponent},
	{path:'mapa',component:MapaEstacionComponent},
	{path:'mapa2',component:Mapa2EstacionComponent},
	{path:'mapa3',component:Mapa3EstacionComponent},
	{path:'mapa-satelital',component:MapaSatelitalComponent},
	{path:'mapa-hibrido',component:MapaHibridoComponent},
	{path:'mapa-rutas',component:MapaRutasComponent},
	{path:'dispositivo-adicionar',component:DispositivoAdicionarComponent},
	{path:'editar-dispositivo/:id',component:DispositivoEditarComponent},
	{path:'**',component: ErrorComponent} 

];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);