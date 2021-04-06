import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders,HttpErrorResponse,HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  getAllImages(myquery:string){
    
    const headers = new HttpHeaders()
      .set('Authorization', 'Client-ID ab0d67e6686a6fcd660eab789207ef2cf03fdba03e7f79ef13475e5340fbd942');
      let params = new HttpParams();
 
      // params=params.set('params','dogs');
    return this._http.get('https://api.unsplash.com/search/photos',  {
      params : { query : myquery} ,headers: headers });
  }
}
/*headers : {
  Authorization : 'Client-ID ab0d67e6686a6fcd660eab789207ef2cf03fdba03e7f79ef13475e5340fbd942'
}*

params : { query : "dog"}

*/