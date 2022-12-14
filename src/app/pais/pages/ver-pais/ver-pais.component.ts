import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { 

  }

  ngOnInit(): void {
    // Metodo 1
    // this.activatedRoute.params
    //   .subscribe( ({id}) => {
    //     console.log(id);

    //     this.paisService.getPaisPorCodigo(id)
    //     .subscribe(pais => {
    //       console.log(pais);
    //     })
    //   });

      // Metodo 2
      this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorCodigo(id)),
        tap(console.log)
        )
      .subscribe(pais => this.pais = pais[0])
  }


}