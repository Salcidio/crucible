import { Component } from '@angular/core';
import { MatriculaServiceService } from '../../services/matricula-service.service';
import { Matricula } from '../../model/matricula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrl: './matriculas.component.css'
})
export class MatriculasComponent {
  matriculas:any;
  matricula=new Matricula();


  
  constructor(private dataService:MatriculaServiceService,private router:Router){}

  ngOnInit():void{
    this.getMatriculaData();
  }

  getMatriculaData(){
    this.dataService.getData().subscribe(res=>{
      this.matriculas=res;

    })
  }

 insertData(){
  this.dataService.insertData(this.matricula).subscribe(res=>{
    this.getMatriculaData();
    console.log('successfull')
    this.router.navigate(['home'])
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getMatriculaData();
})
}
}
