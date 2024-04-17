import { Component } from '@angular/core';
import { CursoServiceService } from '../../services/curso-service.service';
import { Curso } from '../../model/curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursos:any;
  curso=new Curso();


  
  constructor(private dataService:CursoServiceService,private router:Router){}

  ngOnInit():void{
    this.getCursoData();
  }

  getCursoData(){
    this.dataService.getData().subscribe(res=>{
      this.cursos=res;

    })
  }

 insertData(){
  this.dataService.insertData(this.curso).subscribe(res=>{
    this.getCursoData();
    console.log('sucessfull')
    this.router.navigate(['home'])
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getCursoData();
})
}
}
