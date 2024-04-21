import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncarregadoServiceService } from '../../services/encarregado-service.service';
import { Encarregado } from '../../model/encarregado';

@Component({
  selector: 'app-encarrgado-edit',
  templateUrl: './encarrgado-edit.component.html',
  styleUrl: './encarrgado-edit.component.css'
})
export class EncarrgadoEditComponent {
  id: any;
  data: any;
  encarregado = new Encarregado();

  constructor(
    private route: ActivatedRoute,
    private dataService: EncarregadoServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getEncarregadoById(this.id).subscribe((res) => {
      this.data = res;
      this.encarregado = this.data;
    });
  }
  updateEncarregado() {
    this.dataService.updateData(this.id, this.encarregado).subscribe((res) => {
      console.log('successfull');
      this.router.navigate(['home']);
    });
  }
}
