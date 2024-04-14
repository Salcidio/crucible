import { Component } from '@angular/core';
import { PrecarioServiceService } from '../../services/precario-service.service';
import { Precario } from '../../model/precario';

@Component({
  selector: 'app-precarios',
  templateUrl: './precarios.component.html',
  styleUrl: './precarios.component.css'
})
export class PrecariosComponent {
  precarios:any;
  precario=new Precario();


  
  constructor(private dataService:PrecarioServiceService){}

  ngOnInit():void{
    this.getPrecarioData();
  }

  getPrecarioData(){
    this.dataService.getData().subscribe(res=>{
      this.precarios=res;

    })
  }

 insertData(){
  this.dataService.insertData(this.precario).subscribe(res=>{
    this.getPrecarioData();
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getPrecarioData();
})
}
}
