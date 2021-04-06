import { Component, OnInit,EventEmitter } from '@angular/core';
import { ServiceService } from '../_services/service.service';
import { NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss']
})
export class ImageSearchComponent implements OnInit {
  data: any={};
  constructor( private service : ServiceService) { }
  myquery : any ='';
  ngOnInit(): void {


    this.service.getAllImages(this.myquery)
    .subscribe((res:any)=>{
      console.log("res",res);
      this.data=res.results;
    });
    
  }
  
  submit() {
    
    console.log("opiton",this.myquery);
    this.service.getAllImages(this.myquery).subscribe((res:any)=>{
      this.data=res.results;
    })
  }

  

}
