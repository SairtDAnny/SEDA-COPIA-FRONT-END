import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AreaComponent } from './area/area.component';
import { FormAreaComponent } from './area/area/form-area.component';
import { PatrimonioComponent } from './patrimonio/patrimonio.component';
import { FormsPatrimonioComponent } from './patrimonio/forms-patrimonio.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { FormsColaboradorComponent } from './colaborador/forms-colaborador.component';
import { EntradaComponent } from './entrada/entrada.component';
import { FormsEntradaComponent } from './entrada/forms-entrada.component';
import { SalidaComponent } from './salida/salida.component';
import { FormsSalidaComponent } from './salida/salida/forms-salida.component';


const routes:Routes=[
  {path:'', redirectTo:'/area', pathMatch: 'full'},
  {path:'area', component:AreaComponent},
  {path:'area/form', component:FormAreaComponent},
  {path:'area/form/:idArea', component:FormAreaComponent},
  //patrimonio
  {path:'', redirectTo:'/patrimonio', pathMatch: 'full'},
  {path:'patrimonio', component:PatrimonioComponent},
  {path:'patrimonio/form', component:FormsPatrimonioComponent},
  {path:'patrimonio/form/:idpatrimonio', component:FormsPatrimonioComponent},
  //colaborador
  {path:'', redirectTo:'/colaborador', pathMatch: 'full'},
  {path:'colaborador', component:ColaboradorComponent},
  {path:'colaborador/form', component:FormsColaboradorComponent},
  {path:'colaborador/form/:idcolaborador', component:FormsColaboradorComponent},
  //entrada
  {path:'', redirectTo:'/entrada', pathMatch: 'full'},
  {path:'entrada', component:EntradaComponent},
  {path:'entrada/form', component:FormsEntradaComponent},
  {path:'entrada/form/:identradaoficina', component:FormsEntradaComponent},
   //entrada
   {path:'', redirectTo:'/salida', pathMatch: 'full'},
   {path:'salida', component:SalidaComponent},
   {path:'salida/form', component:FormsSalidaComponent},
   {path:'salida/form/:idsalidaoficina', component:FormsSalidaComponent},

]
 

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    FormAreaComponent,
    PatrimonioComponent,
    FormsPatrimonioComponent,
    ColaboradorComponent,
    FormsColaboradorComponent,
    EntradaComponent,
    FormsEntradaComponent,
    SalidaComponent,
    FormsSalidaComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
