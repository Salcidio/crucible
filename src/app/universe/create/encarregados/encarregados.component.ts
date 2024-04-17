import { Component } from '@angular/core';
import { EncarregadoServiceService } from '../../services/encarregado-service.service';
import { Encarregado } from '../../model/encarregado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encarregados',
  templateUrl: './encarregados.component.html',
  styleUrl: './encarregados.component.css'
})
export class EncarregadosComponent {
  encarregados:any;
  encarregado=new Encarregado();


  
  constructor(private dataService:EncarregadoServiceService,private router:Router){}

  ngOnInit():void{
    this.getEncarregadoData();
  }

  getEncarregadoData(){
    this.dataService.getData().subscribe(res=>{
      this.encarregados=res;

    })
  }

 insertData(){
  this.dataService.insertData(this.encarregado).subscribe(res=>{
    this.getEncarregadoData();
    console.log('Sucessfull')
    this.router.navigate(['home']);
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getEncarregadoData();
})
}
}
