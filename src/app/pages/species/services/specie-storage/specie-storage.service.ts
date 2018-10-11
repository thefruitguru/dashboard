import { Injectable, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';
import { Specie } from '../../etitys/specie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecieStorageService {
  public database;
  public statusErrorRegister: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.database = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    this.database.settings(settings);
  }

  registerSpecie(specie: Specie) {
    let batch = this.database.batch();

    let species = this.database.collection('especies').doc(specie.getNomeCientifico());

    batch.set(species, {
      nomePopular: specie.getNomePopular(),
      nomeCientifico: specie.getNomeCientifico(),
      familia: specie.getFamilia(),
      formaDeVida: specie.getFormaDeVida(),
      usos: specie.getUsos(),
      cores: specie.getCores(),
      textura: specie.getTextura(),
      sabores: specie.getSabores(),
      caracteristicas: specie.getCaracteristicas(),
      biomaGeral: specie.getBiomaGeral(),
      subBioma: specie.getSubBioma(),
      reproducao: specie.getReproducao(),
      formato: specie.getFormato()
    });

    let family = this.database.collection('familia').doc(specie.getFamilia());

    batch.set(family, {
      nome: specie.getFamilia()
    });

    let formaDeVida = this.database.collection('formaDeVida').doc(specie.getFormaDeVida());

    batch.set(formaDeVida, {
      nome: specie.getFormaDeVida()
    })

    for (let uso in specie.getUsos()) {
      let usos = this.database.collection('usos').doc(uso);

      batch.set(usos, {
        nome: uso
      });
    }

    for (let cor in specie.getCores()) {
      let cores = this.database.collection('cores').doc(cor);

      batch.set(cores, {
        nome: cor
      });
    }

    let textura = this.database.collection('textura').doc(specie.getTextura());

    batch.set(textura, {
      nome: specie.getTextura()
    });

    for (let sabor in specie.getSabores()) {
      let sabores = this.database.collection('sabores').doc(sabor);

      batch.set(sabores, {
        nome: sabor
      });
    }

    for (let biomaGeral in specie.getBiomaGeral()) {
      let bioma = this.database.collection('biomaGeral').doc(biomaGeral);

      batch.set(bioma, {
        nome: biomaGeral
      });
    }

    for (let subBioma in specie.getSubBioma()) {
      let bioma = this.database.collection('subBioma').doc(subBioma);

      batch.set(bioma, {
        nome: subBioma
      });
    }

    let formato = this.database.collection('formato').doc(specie.getFormato());

    batch.set(formato, {
      nome: specie.getFormato()
    });

    batch.commit().then(() => {
      this.statusErrorRegister.emit(false);
    }).catch((error) => {
      this.statusErrorRegister.emit(true);
    });
  }

  ListSpecie(): Observable<Specie[]> {
    let specieList: Specie[] = [];

    return Observable.create((observer) => {
      this.database.collection('especies').get().then((querySnapshot) => {
        querySnapshot.forEach(currentSpecie => {
          let docSpecie = currentSpecie.data();
          let specie = new Specie();
  
          specie.setNomePopular(docSpecie.nomePopular);
          specie.setNomeCientifico(docSpecie.nomeCientifico);
  
          specieList.unshift(specie);
        });

        observer.next(specieList);
      });
    });
  }
}
