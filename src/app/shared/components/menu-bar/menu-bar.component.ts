import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {

    items: MenuItem[] | undefined;


    ngOnInit(): void {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                routerLink: 'management',
            },
            {
                label: 'Pets',
                icon: 'pi pi-book',
                routerLink: 'pets',
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'Employees'
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'Adopters'
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'Rescuers'
                            },
                        ]
                    }
                ]
            },
        ];
    }
}
