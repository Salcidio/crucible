import { Component } from '@angular/core';
import { PrecarioServiceService } from '../../services/precario-service.service';
import { Precario } from '../../model/precario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precarios',
  templateUrl: './precarios.component.html',
  styleUrl: './precarios.component.css'
})
export class PrecariosComponent {
  precarios:any;
  precario=new Precario();


  
  constructor(private dataService:PrecarioServiceService,private router:Router){}

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
    console.log('sucessfull')
    this.router.navigate(['home']);
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getPrecarioData();
})
}
}
