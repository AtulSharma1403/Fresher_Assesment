import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChildComponent } from './child/child.component';
import { AuthGuard } from './shared/auth.guard';
const ROUTES: Route[] = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home/:username', component: HomeComponent},
   {path: 'home/:username/:id/:name/:email/:phone/:website/:street/:suite/:city/:zipcode/:company', component: ChildComponent,
   canActivate:[AuthGuard]  },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
