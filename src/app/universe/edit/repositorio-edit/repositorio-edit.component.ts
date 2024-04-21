import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositorioServiceService } from '../../services/repositorio-service.service';
import { Repositorio } from '../../model/repositorio';

@Component({
  selector: 'app-repositorio-edit',
  templateUrl: './repositorio-edit.component.html',
  styleUrl: './repositorio-edit.component.css'
})
export class RepositorioEditComponent {
  id: any;
  data: any;
  repositorio = new Repositorio();

  constructor(
    private route: ActivatedRoute,
    private dataService: RepositorioServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getRepositorioById(this.id).subscribe((res) => {
      this.data = res;
      this.repositorio = this.data;
    });
  }
  updateRepositorio() {
    this.dataService.updateData(this.id, this.repositorio).subscribe((res) => {
      console.log('successfull');
      this.router.navigate(['home']);
    });
  }
}
