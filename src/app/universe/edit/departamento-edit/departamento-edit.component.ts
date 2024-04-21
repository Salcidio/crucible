import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoServiceService } from '../../services/departamento-service.service';
import { Departamento } from '../../model/departamento';

@Component({
  selector: 'app-departamento-edit',
  templateUrl: './departamento-edit.component.html',
  styleUrl: './departamento-edit.component.css'
})
export class DepartamentoEditComponent {
  id: any;
  data: any;
  departamento = new Departamento();

  constructor(
    private route: ActivatedRoute,
    private dataService: DepartamentoServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getDepartamentoById(this.id).subscribe((res) => {
      this.data = res;
      this.departamento = this.data;
    });
  }
  updateDepartamento() {
    this.dataService.updateData(this.id, this.departamento).subscribe((res) => {
      console.log('successfull');
      this.router.navigate(['home']);
    });
  }
}
