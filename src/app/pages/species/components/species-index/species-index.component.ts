import { Component, OnInit } from '@angular/core';
import { SpeciesRegisterComponent } from '../species-register/species-register.component';
import { AuthService } from '../../../securitys/services/auth/auth.service';
import { Router } from '@angular/router';

interface Menu {
  title: string;
  router: string;
  icon: string;
}

@Component({
  selector: 'app-species-index',
  templateUrl: './species-index.component.html',
  styleUrls: ['./species-index.component.css']
})
export class SpeciesIndexComponent implements OnInit {
  public title: string = 'The Fruit Guru';
  public loadStatus: boolean = false;
  
  public menu: Menu[] = [
    { title: 'Lista de Espécies', router: '/species/list', icon: 'folder' },
    { title: 'Registrar Espécie', router: '/species/register', icon: 'folder' }
  ]; 

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    SpeciesRegisterComponent.saveRegisterLoad.subscribe((status) => {
      if (status) {
        this.loadStatus = true;
      } else {
        this.loadStatus = false;
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().subscribe(status => {
      if (status) {
        this.router.navigate(['/login']);
      }
    });
  }
}
