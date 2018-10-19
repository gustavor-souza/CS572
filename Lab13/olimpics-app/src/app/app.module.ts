
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OlimpicsModule } from './olimpics/olimpics.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { GuardsComponent } from "./guards/guards.component";

import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";  

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'olimpics',
    pathMatch: 'full'
  },
  {
    path: 'olimpics',
    component: OlimpicsModule
  },
  { path: '**', component: GuardsComponent, canActivate: [MyCanActivateGuard], canDeactivate: [MyCanDeactivateGuard] }
]

@NgModule({
  declarations: [
    AppComponent, GuardsComponent
  ],
  imports: [
    BrowserModule,
    OlimpicsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MyCanActivateGuard, MyCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
