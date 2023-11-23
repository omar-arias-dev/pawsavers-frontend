import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';

import { FileUploadEvent } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';

import { PetsService } from '../../services/pets.service';

import { Breed, Pet, Specie } from '../../interfaces/pets.interface';
import { PetPersonality, PetSize, PetStatus } from '../../constants/pet-enums';

@Component({
  selector: 'management-add-pet-page',
  templateUrl: './add-pet-page.component.html',
  styles: [
  ],
  providers: [
    DatePipe,
  ]
})
export class AddPetPageComponent implements OnInit {

    public newPetForm: FormGroup = this.formBuilder.group({
        petName: ['', Validators.required, ],
        petAge: [null, Validators.required, ],
        petSize: ['', Validators.required, ],
        petPersonality: ['', Validators.required, ],
        petStatus: ['', Validators.required, ],
        registrationDateTime: ['', Validators.required, ],
        rescueDate: ['', Validators.required, ],
        rescueHistory: ['', Validators.required, ],
        specialFeatures: ['', Validators.required, ],
        specieId: ['', Validators.required, ],
        breedId: ['', Validators.required, ],
    });
    petSizes: Object[] = [];
    petPersonalities: Object[] = [];
    petStatus: Object[] = [];
    petSpecies: Specie[] = [];
    petBreeds: Breed[] = [];
    uploadedFiles: any[] = [];
    imageSize: number = 2097152;


    constructor(
        private messageService: MessageService,
        private petsService: PetsService,
        private formBuilder: FormBuilder,
        private datePipe: DatePipe,
    ) {  }

    ngOnInit(): void {

        this.petsService.retrieveSpecies()
            .subscribe(species => {
                this.petSpecies = species;
            });

        this.onSpecieChanged();

        this.petSizes = Object.values(PetSize)
            .filter(size => isNaN(Number(size)))
            .map(size => ({ size }));

        this.petPersonalities = Object.values(PetPersonality)
            .filter(personality => isNaN(Number(personality)))
            .map(personality => ({ personality }));

        this.petStatus = Object.values(PetStatus)
            .filter(status => isNaN(Number(status)))
            .map(status => ({ status }));
    }


    public onSubmit(): void {
        let newPet: Pet = {
            ...this.newPetForm.value,
            petAvatar: 'https://robohash.org/etlaboriosamea.png?size=50x50&set=set1',
            rescueDate: this.datePipe.transform(this.newPetForm.value.rescueDate, 'yyyy-MM-dd'),
            registrationDateTime: this.datePipe.transform(this.newPetForm.value.registrationDateTime, 'yyyy-MM-dd HH:mm:ss'),
        };
        this.petsService.createNewPet(newPet)
            .subscribe(newPet => {
                console.log("newPet", newPet);
            });
    }

    public onSpecieChanged(): void {

        this.newPetForm.get('specieId')!.valueChanges
            .pipe(
                switchMap(specieId => {
                    return this.petsService.retrieveBreedsBySpecieId(specieId);
                }),
            )
            .subscribe((breeds) => {
                this.petBreeds = breeds;
            });
    }

    public onUploadPetImage(event: FileUploadEvent): void {
        for (let petPhoto of event.files) {
            this.uploadedFiles.push(petPhoto);
        }
        this.messageService.add({severity: 'info', summary: 'File Uploaded'});
    }
}
