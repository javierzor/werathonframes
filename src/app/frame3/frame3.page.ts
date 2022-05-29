import { Component, OnInit } from '@angular/core';
import { FrameserviciosService } from '../services/frameservicios.service';

@Component({
  selector: 'app-frame3',
  templateUrl: './frame3.page.html',
  styleUrls: ['./frame3.page.scss'],
})
export class Frame3Page implements OnInit {

  precio_wera_usd: any;
  respuestadewerathonobtenertablafase: any;
  indice_delafase_actual: number;
  info_de_la_siguiente_fase: any;
  info_de_la_fase_actual:any;
  limiteinicialfaseusd: any;
  info_de_la_fase_anterior: any;
  saldo_de_app: any;

  constructor(
    private FrameserviciosService: FrameserviciosService,


  ) 
  
  {
    this.obtenerprecio_wera_usdsegunfase();
    this.werathonObtenerTablaFaseFuncionReutilizada();
    this.obtenerSaldoDeApp();

   }

   ionViewWillEnter(){
    this.obtenerprecio_wera_usdsegunfase();
    this.werathonObtenerTablaFaseFuncionReutilizada();
    this.obtenerSaldoDeApp();

  }

  ngOnInit() {
  }
  
   obtenerprecio_wera_usdsegunfase(){
    var datawerathonobtenerprecio_wera_usd = {
      nombre_solicitud: 'werathonobtenerprecio_wera_usd'
    }
    this.FrameserviciosService.variasfunciones(datawerathonobtenerprecio_wera_usd).subscribe(async( res: any ) =>{
      console.log('respuesta de werathonobtenerprecio_wera_usd', res);
      this.precio_wera_usd=res;
  });

  }


  werathonObtenerTablaFaseFuncionReutilizada(){
    var datawerathonobtenertablafase = {
      nombre_solicitud: 'werathonobtenertablafase'
    }
     this.FrameserviciosService.variasfunciones(datawerathonobtenertablafase).subscribe(async( res: any ) =>{
       console.log('respuesta de werathonobtenertablafase', res);
       this.respuestadewerathonobtenertablafase=res;
       for (var i=0; i<this.respuestadewerathonobtenertablafase.length; i++) { 
  
        if(this.respuestadewerathonobtenertablafase[i].estafase==1)
        this.indice_delafase_actual=i+1;
        this.info_de_la_siguiente_fase=res[this.indice_delafase_actual];
        this.info_de_la_fase_actual=res[this.indice_delafase_actual-1];
        // this.precio_de_la_siguiente_fase=res[this.indice_delafase_actual+1].precio_wera_usd;
        // this.cuanto_aumentara_wera=this.precio_de_la_siguiente_fase-this.precio_de_la_fase_actual;
      }
        console.log('INFO DE LA FASE ACTUAL',this.info_de_la_fase_actual);
        console.log('INFO DE LA SIGUIENTE FASE',this.info_de_la_siguiente_fase);
        if(this.info_de_la_fase_actual.numero==res[0].numero)
        
        {
          this.limiteinicialfaseusd=0;
        }
        
        else{
          this.info_de_la_fase_anterior=res[this.indice_delafase_actual-2];
          this.limiteinicialfaseusd=this.info_de_la_fase_anterior.limitefaseusd;
        }
     });
  }


  obtenerSaldoDeApp(){
    var datawerathonsaldodetodalaapp = {
      nombre_solicitud: 'werathonsaldodetodalaapp',
    }
     this.FrameserviciosService.variasfunciones(datawerathonsaldodetodalaapp).subscribe(async( res: any ) =>{
       console.log('respuesta de werathonsaldodetodalaapp', res);
       this.saldo_de_app=res;
     });
  }



}
