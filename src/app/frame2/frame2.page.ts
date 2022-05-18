import { Component, OnInit } from '@angular/core';
import { FrameserviciosService } from '../services/frameservicios.service';

@Component({
  selector: 'app-frame2',
  templateUrl: './frame2.page.html',
  styleUrls: ['./frame2.page.scss'],
})
export class Frame2Page implements OnInit {
  precio_wera_usd: any;

  constructor(
    private FrameserviciosService: FrameserviciosService,


  ) 
  
  {
    this.obtenerprecio_wera_usdsegunfase();
    
   }

   ionViewWillEnter(){
    this.obtenerprecio_wera_usdsegunfase();
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


}
