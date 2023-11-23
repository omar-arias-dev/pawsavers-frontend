import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

import { ManagementRoutingModule } from './management-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AddPetPageComponent } from './pages/add-pet-page/add-pet-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ManagementLayoutComponent } from './layouts/management-layout/management-layout.component';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';
import { PetsTableComponent } from './components/pets-table/pets-table.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { BToMbPipe } from './pipes/bToMb.pipe';

@NgModule({
    imports: [
        BToMbPipe,
        CommonModule,
        FormsModule,
        ManagementRoutingModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    exports: [],
    declarations: [
        AddPetPageComponent,
        HomePageComponent,
        ManagementLayoutComponent,
        PetsPageComponent,
        PetsTableComponent,
        ToolbarComponent,
    ],
    providers: [
        DialogService,
        MessageService,
    ],
})
export class ManagementsModule {  }
