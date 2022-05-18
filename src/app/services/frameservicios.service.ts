import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from "@ionic/angular";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrameserviciosService {

  constructor(
    public toastController: ToastController,
    private loadingController: LoadingController,
    private http: HttpClient
  ) 
  
  { 

  }

  variasfunciones(data: any)
  {
  var url = 'https://app.werathon.com/laravel/public/api/variasfunciones';
  return this.http.post(url,data,
  {headers:new HttpHeaders({"Content-Type":'application/json'})});
  }



}
