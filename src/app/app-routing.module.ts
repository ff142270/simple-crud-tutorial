import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DVDlistComponent } from './components/dvdlist/dvdlist.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [ 
  {  
    path:"dvdlist",   
    component: DVDlistComponent 
  },
  {  
    path: "home",   
    component: HomeComponent 
  }, 
  {  
    path:"**",   
    redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
