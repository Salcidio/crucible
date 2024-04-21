import { Component } from '@angular/core';
import { PrecarioServiceService } from '../../../services/precario-service.service';

@Component({
  selector: 'app-sysprecarios',
  templateUrl: './sysprecarios.component.html',
  styleUrl: './sysprecarios.component.css'
})
export class SysprecariosComponent {
  precarios: any;

  constructor(
    private precarioData: PrecarioServiceService,

  ) {
    
  }

  ngOnInit(): void {
   this.getPrecarioData()
  }
  getPrecarioData() {
    this.precarioData.getData().subscribe((res) => {
      this.precarios = res;
    });
  }
  deletePrecarioData(id: any) {
    this.precarioData.deleteData(id).subscribe((res) => {
      this.getPrecarioData();
    });
  }

}
