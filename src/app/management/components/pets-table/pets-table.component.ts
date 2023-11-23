import { Component, Input, OnDestroy } from '@angular/core';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { AddPetPageComponent } from '../../pages/add-pet-page/add-pet-page.component';

import { Pet } from '../../interfaces/pets.interface';

@Component({
  selector: 'pets-table',
  templateUrl: './pets-table.component.html',
})
export class PetsTableComponent implements OnDestroy {

    @Input()
    pets: Pet[] = [];

    petActions: MenuItem[] = [];

    currentIndex?: number;

    dynamicDialogRef: DynamicDialogRef | undefined;


    constructor(
        private messageService: MessageService,
        private dialogService: DialogService,
    ) {
        this.petActions = [
            {
                label: 'Add Care',
                icon: 'pi pi-heart',
                command: () => this.scheaduleCare(),
            },
            {
                separator: true,
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    console.log("hi");
                },
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    this.delete();
                },
            },
        ];
    }

    ngOnDestroy(): void {
        if (this.dynamicDialogRef) {
            this.dynamicDialogRef.close();
        }
    }


    public clearTable(table: Table) {
        table.clear();
    }

    showAddPetComponent() {
        this.dynamicDialogRef = this.dialogService.open(AddPetPageComponent, {
            header: 'Add a new Pet',
            width: '75%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true
        });

        this.dynamicDialogRef.onClose.subscribe((petAdded: Pet) => {
            //Push unshifting the petAdded in the list.
            if (petAdded) {
                this.messageService.add({ severity: 'info', summary: 'Pet added', detail: petAdded.petName });
            }
        });

        this.dynamicDialogRef.onMaximize.subscribe((value) => {
            this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
        });
    }

    public dropdownClickHandler(index: number) {
        this.currentIndex = index;
    }

    public showInfoAction(petId: number) {
        console.log(petId);
    }

    public scheaduleCare() {
        console.log("scheaduleCare");
        if (this.currentIndex === null) return;
        console.log(this.currentIndex);
    }

    delete() {
        if (this.currentIndex === null) return;
        console.log("delete", this.currentIndex);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }

    getSeverity(status: string) {
        switch (status.toLowerCase()) {

            case 'alive':
                return 'primary';

            case 'deceased':
                return 'danger';

            case 'ill':
                return 'warning';

            case 'adopted':
                return 'success';
        }
        return;
    }
}
