import { Component, OnInit } from '@angular/core';
import { SpecieService } from '../../services/specie/specie.service';
import { Specie } from '../../etitys/specie';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {
  private specieList: Specie[] = [];
  private statusSpecieList = true;

  constructor(private specieService: SpecieService) { 
  }

  ngOnInit() {
    this.specieService.listService().subscribe((specieList) => {
      this.specieList = specieList;
      this.statusSpecieList = false;
    });
  }

}
