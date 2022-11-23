import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right: 5px; 
  }`]
})
export class PorRegionComponent{

  regiones: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];



  constructor(private paisService: PaisService) { }

  getClassCSS( region: string ): string {
    return ( region === this.regionActiva) 
      ? 'btn btn-primary' 
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {

    if(region === this.regionActiva){
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    // TODO: hacer el llamado al servicio
    this.paisService.buscarRegion(region)
      .subscribe(paises => {
        this.paises = paises;
        console.log(paises);
        
      })
  }

  // buscar( termino: string){
  //   this.error = false;
  //   this.termino = termino;

  //   this.paisService.buscarRegion(region)
  //   .subscribe((paises) => {
  //     this.paises = paises;
  //   }, () => {
  //     this.error = true;
  //     this.paises = [];
  //   })
  // }

  


}
