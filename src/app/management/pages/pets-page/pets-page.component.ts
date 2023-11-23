import { Component, OnInit, inject } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { Pet, Specie } from '../../interfaces/pets.interface';


@Component({
  selector: 'management-pet-list-page',
  templateUrl: './pets-page.component.html',
  styles: [
  ]
})
export class PetsPageComponent implements OnInit {

    private petsService = inject(PetsService);

    petList: Pet[] = [];

    ngOnInit() {
        this.petsService.retrievePets()
            .subscribe(pets => {
                this.petList = pets;
                this.petList.forEach((pet) => pet.rescueDate = new Date(<Date>pet.rescueDate));
                this.petList.forEach((pet) => pet.registrationDateTime = new Date(<Date>pet.registrationDateTime));
            });
    }
}
