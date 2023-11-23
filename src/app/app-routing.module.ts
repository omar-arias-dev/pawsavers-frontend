import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule),
    },
    {
        path: 'management',
        loadChildren: () => import('./management/management.module').then(module => module.ManagementsModule),
    },
    {
        path: '**',
        redirectTo: 'auth',
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
