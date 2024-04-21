import { Component } from '@angular/core';
import { RepositorioServiceService } from '../../../services/repositorio-service.service';

@Component({
  selector: 'app-sysrepositorios',
  templateUrl: './sysrepositorios.component.html',
  styleUrl: './sysrepositorios.component.css'
})
export class SysrepositoriosComponent {
  repositorios: any;

  constructor(
    private repositorioData: RepositorioServiceService,
   
  ) {
    
  }

  ngOnInit(): void {
   this.getRepositorioData
  }
  getRepositorioData() {
    this.repositorioData.getData().subscribe((res) => {
      this.repositorios = res;
    });
  }

  deleteRepositorioData(id: any) {
    this.repositorioData.deleteData(id).subscribe((res) => {
      this.getRepositorioData();
    });
  }
}
