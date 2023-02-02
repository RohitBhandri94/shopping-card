import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { DashboradComponent } from './dashborad/dashborad.component';

const routes: Routes = [
  {path:"",component:DashboradComponent},
  {path:"buy",component:BuyNowComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
