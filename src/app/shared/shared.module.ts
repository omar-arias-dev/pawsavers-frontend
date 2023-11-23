import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomPrimeNgModule } from './custom-prime-ng/custom-prime-ng.module';

import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


@NgModule({
    declarations: [
        MenuBarComponent,
        NotFoundPageComponent,
    ],
    imports: [
        CommonModule,
        CustomPrimeNgModule,
    ],
    exports: [
        CustomPrimeNgModule,
        MenuBarComponent,
        NotFoundPageComponent,
    ],
})
export class SharedModule {}
