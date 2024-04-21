import { Component } from '@angular/core';
import { HistoricoEscolarServiceService } from '../../../services/historico-escolar-service.service';

@Component({
  selector: 'app-syshistorico-escolar',
  templateUrl: './syshistorico-escolar.component.html',
  styleUrl: './syshistorico-escolar.component.css'
})
export class SyshistoricoEscolarComponent {
  historicoEscolar: any;
  constructor(
    private historicoEscolarData: HistoricoEscolarServiceService,

  ) {
    
  }

  ngOnInit(): void {
   this.getHistoricoEscolarData()
  }

  getHistoricoEscolarData() {
    this.historicoEscolarData.getData().subscribe((res) => {
      this.historicoEscolar = res;
    });
  }

  deleteHistoricoEscolarData(id: any) {
    this.historicoEscolarData.deleteData(id).subscribe((res) => {
      this.getHistoricoEscolarData();
    });
  }
}
