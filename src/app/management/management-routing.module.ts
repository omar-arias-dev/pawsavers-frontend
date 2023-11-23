import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPetPageComponent } from './pages/add-pet-page/add-pet-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ManagementLayoutComponent } from './layouts/management-layout/management-layout.component';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';

const routes: Routes = [
    {
        path: '',
        component: ManagementLayoutComponent,
        children: [
            { path: '', component: HomePageComponent },
            { path: 'pets', component: PetsPageComponent },
            { path: 'pets/add', component: AddPetPageComponent },
            { path: '**', redirectTo: '' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ManagementRoutingModule { }
