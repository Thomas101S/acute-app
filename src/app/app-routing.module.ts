import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcuteHeroComponent } from "./acute-hero/acute-hero.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./acute-hero/hero-detail/hero-detail.component"

const routes: Routes = [
{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{path: "heroes", component: AcuteHeroComponent},
{path: "detail/:id", component: HeroDetailComponent},
{path: "dashboard", component: DashboardComponent},
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*Ignore this file.*/