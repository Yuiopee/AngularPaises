import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit{

  pais!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pasiService: PaisService
    ){}
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({id}) => {
    //   console.log(id);

    //   this.pasiService.getPaisPorCodigo(id).subscribe(pais => {
    //     console.log(pais);
    //   })
    // })

    this.activatedRoute.params.pipe(switchMap(({id})=>this.pasiService.getPaisPorCodigo(id)), tap(console.log)).subscribe(pais =>  this.pais = pais)
  }
}
