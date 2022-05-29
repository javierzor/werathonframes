import { Component, OnInit } from '@angular/core';
import { FrameserviciosService } from '../services/frameservicios.service';

@Component({
  selector: 'app-frame4',
  templateUrl: './frame4.page.html',
  styleUrls: ['./frame4.page.scss'],
})
export class Frame4Page implements OnInit {
  progress: any;
  buffer: any;

  constructor(
    private FrameserviciosService: FrameserviciosService,

  )


  {

    this.obtenerbarrauno();

   }

   ionViewWillEnter(){

    this.obtenerbarrauno();

  }

  ngOnInit() {
  }

  async obtenerbarrauno(){
    var dataobtenerbarrauno = {
      nombre_solicitud: 'obtenerbarrauno'
    }
    this.FrameserviciosService.variasfunciones(dataobtenerbarrauno).subscribe(async( res: any ) =>{
      console.log('respuesta de obtenerbarrauno', res);
      this.progress=res/100;
      this.buffer=this.progress+0.05;
  });
  }


}
