import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor: pointer;
    }`
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  error: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar( termino: string){
    this.error = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.paisService.buscarPais(this.termino)
    // .subscribe({
    //   next: (paises) => console.log(paises),
    //   error: (err) => this.error = (err),
    //   complete: () => console.log('complete')
    // })

    .subscribe((paises) => {       
      console.log(paises);
      this.paises = paises;
    }, () => {
      this.error = true;
      this.paises = [];
    })
  }

  sugenrecias(termino: string){
    this.error = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
      (error) => this.paisesSugeridos = []
      );
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
  }

}
