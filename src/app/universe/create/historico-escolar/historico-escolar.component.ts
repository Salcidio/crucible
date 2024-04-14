import { Component } from '@angular/core';
import { HistoricoEscolarServiceService } from '../../services/historico-escolar-service.service';
import { HistoricoEscolar } from '../../model/historico-escolar';

@Component({
  selector: 'app-historico-escolar',
  templateUrl: './historico-escolar.component.html',
  styleUrl: './historico-escolar.component.css'
})
export class HistoricoEscolarComponent {
  historicoEscolars:any;
  historicoEscolar=new HistoricoEscolar();


  
  constructor(private dataService:HistoricoEscolarServiceService){}

  ngOnInit():void{
    this.getHistoricoEscolarData();
  }

  getHistoricoEscolarData(){
    this.dataService.getData().subscribe(res=>{
      this.historicoEscolars=res;

    })
  }

 insertData(){
  this.dataService.insertData(this.historicoEscolar).subscribe(res=>{
    this.getHistoricoEscolarData();
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getHistoricoEscolarData();
})
}
}
