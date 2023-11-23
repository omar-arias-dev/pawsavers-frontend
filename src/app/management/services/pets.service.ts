import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Breed, Pet, Specie } from '../interfaces/pets.interface';


@Injectable({providedIn: 'root'})
export class PetsService {

    private petUrl: string = '';
    private specieUrl: string = '';
    private breedUrl: string = '';
    private token: string = '';

    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
    });

    private requestOptions = { headers: this.headers };


    constructor(private http: HttpClient) { }


    public retrievePets(): Observable<Pet[]> {
        return this.http.get<Pet[]>(this.petUrl, this.requestOptions);
    }

    public retrieveSpecies(): Observable<Specie[]> {
        return this.http.get<Specie[]>(this.specieUrl, this.requestOptions);
    }

    public retrieveBreedsBySpecieId(specieId: number): Observable<Breed[]> {
        if (!specieId) return of([]);
        return this.http.get<Breed[]>(`${this.breedUrl}/by-specie/${specieId}`, this.requestOptions);
    }

    public createNewPet(pet: Pet): Observable<Pet> {
        return this.http.post<Pet>(this.petUrl, pet, this.requestOptions);
    }
}
