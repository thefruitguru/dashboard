import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Specie } from '../../etitys/specie';
import { SpecieService } from '../../services/specie/specie.service';
import { SpecieStorageService } from '../../services/specie-storage/specie-storage.service';

@Component({
  selector: 'app-species-register',
  templateUrl: './species-register.component.html',
  styleUrls: ['./species-register.component.css']
})
export class SpeciesRegisterComponent implements OnInit {
  public statusMessage: boolean = false;
  public static saveRegisterLoad: EventEmitter<boolean> = new EventEmitter();

  public specieForm = this.fb.group({
    nomeCientifico: ['', Validators.required],
    nomePopular: ['', Validators.required],
    familia: ['', Validators.required],
    formaDeVida: ['', Validators.required],
    usos: ['', Validators.required],
    cores: ['', Validators.required],
    textura: ['', Validators.required],
    sabores: ['', Validators.required],
    caracteristicas: ['', Validators.required],
    biomaGeral: ['', Validators.required],
    subBioma: ['', Validators.required],
    reproducao: ['', Validators.required],
    formato: ['', Validators.required]
  });

  constructor(
    public fb: FormBuilder,
    public specieSevice: SpecieService,
    public specieStorageService: SpecieStorageService
  ) { }

  ngOnInit() {
    this.specieStorageService.statusErrorRegister.subscribe((error) => {
      SpeciesRegisterComponent.saveRegisterLoad.emit(false);

      if (!error) {
        this.specieForm.reset();
        this.statusMessage = true;

        setTimeout(() => {
          this.statusMessage = false;
        }, 2000);
      }
    });
  }

  submit() {
    SpeciesRegisterComponent.saveRegisterLoad.emit(true);

    let specie: Specie = new Specie();

    specie.setNomeCientifico(this.specieForm.get('nomeCientifico').value);
    specie.setNomePopular(this.specieForm.get('nomePopular').value);
    specie.setFamilia(this.specieForm.get('familia').value);
    specie.setFormaDeVida(this.specieForm.get('formaDeVida').value);
    specie.setUsos(this.specieForm.get('usos').value);
    specie.setCores(this.specieForm.get('cores').value);
    specie.setTextura(this.specieForm.get('textura').value);
    specie.setSabores(this.specieForm.get('sabores').value);
    specie.setCaracteristicas(this.specieForm.get('caracteristicas').value);
    specie.setBiomaGeral(this.specieForm.get('biomaGeral').value);
    specie.setSubBioma(this.specieForm.get('subBioma').value);
    specie.setReproducao(this.specieForm.get('reproducao').value);
    specie.setFormato(this.specieForm.get('formato').value)

    this.specieSevice.registerService(specie);
  }
}
