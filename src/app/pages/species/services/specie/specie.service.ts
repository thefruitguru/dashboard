import { Injectable } from '@angular/core';
import { Specie } from '../../etitys/specie';
import { SpecieStorageService } from '../../services/specie-storage/specie-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  constructor(
    public specieStorage: SpecieStorageService
  ) { }

  registerService(specie: Specie) {
    this.specieStorage.registerSpecie(specie);
  }

  listService(): Observable<Specie[]> {
    return this.specieStorage.ListSpecie();
  }
}
