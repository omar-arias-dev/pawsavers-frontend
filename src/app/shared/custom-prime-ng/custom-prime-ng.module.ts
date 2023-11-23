import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
    exports: [
        ButtonModule,
        CalendarModule,
        DividerModule,
        DropdownModule,
        DynamicDialogModule,
        FileUploadModule,
        ImageModule,
        InputNumberModule,
        InputTextareaModule,
        InputTextModule,
        MenubarModule,
        SplitButtonModule,
        TableModule,
        TabMenuModule,
        TagModule,
        ToastModule,
        ToolbarModule,
    ],
})
export class CustomPrimeNgModule {  }
