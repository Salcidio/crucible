import { Component } from '@angular/core';
import { EncarregadoServiceService } from '../../../services/encarregado-service.service';

@Component({
  selector: 'app-sysencarregados',
  templateUrl: './sysencarregados.component.html',
  styleUrl: './sysencarregados.component.css'
})
export class SysencarregadosComponent {
  encarregados: any;

  constructor(
 
    private encarregadoData: EncarregadoServiceService,

  
  ) {
    
  }

  ngOnInit(): void {
   this.getEncarregadoData()
  }

  getEncarregadoData() {
    this.encarregadoData.getData().subscribe((res) => {
      this.encarregados = res;
    });
  }


  deleteEncarregadoData(id: any) {
    this.encarregadoData.deleteData(id).subscribe((res) => {
      this.getEncarregadoData();
    });
  }


}
