import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GLOBAL } from './services/global';
// Mapas
import { AgmCoreModule } from '@agm/core';

// Graficos
import { ChartsModule } from 'ng2-charts';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Component
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio.component';
import { AcercaComponent } from './components/acerca.component';
import { UsuarioAdicionarComponent } from './components/usuario-adicionar.component';
import { UsuarioEditarComponent } from './components/usuario-editar.component';
import { UsuariosTablaEditarComponent } from './components/usuarios-tabla-editar.component';
import { UsuarioEditarContraseñaComponent } from './components/usuario-editar-contraseña.component';

import { RedesMonitoreoTablaComponent } from './components/redes.monitoreo.tabla.component';
import { EstacionesTablaComponent } from './components/estaciones.tabla.component';
import { EstacionesDetallesTablaComponent } from './components/estacion.detalles.tabla.component';
// Loaders
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

// Estaciones
import { EstacionAdicionarComponent } from './components/estacion-adicionar.component';
import { EstacionEditarComponent } from './components/estacion-editar.component';

// Dispositivo
import { DispositivoAdicionarComponent } from './components/dispositivo.adicionar.component';
import { DispositivoEditarComponent } from './components/dispositivo.editar.component';

// Error
import { ErrorComponent } from './components/error.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaComponent,
    UsuarioAdicionarComponent,
    UsuarioEditarComponent,
    UsuariosTablaEditarComponent,
    UsuarioEditarContraseñaComponent,
    EstacionAdicionarComponent,
    EstacionEditarComponent,
    RedesMonitoreoTablaComponent,
    EstacionesTablaComponent,
    EstacionesDetallesTablaComponent,
    GraficaDiaComponent,
    GraficaMensualComponent,
    GraficaAnualComponent,
    MapaComponent,
    DispositivoAdicionarComponent,
    DispositivoEditarComponent,
    MapaEstacionComponent,
    Mapa2EstacionComponent,
    Mapa3EstacionComponent,
    MapaSatelitalComponent,
    MapaHibridoComponent,
    MapaRutasComponent,
    ErrorComponent

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ChartsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA12w59nAz67oMVhhjt5LCW9esWtC9mceU'
    })
  ],
  providers: [appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }