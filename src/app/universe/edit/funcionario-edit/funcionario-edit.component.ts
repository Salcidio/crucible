import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioServiceService } from '../../services/funcionario-service.service';
import { Funcionario } from '../../model/funcionario';

@Component({
  selector: 'app-funcionario-edit',
  templateUrl: './funcionario-edit.component.html',
  styleUrl: './funcionario-edit.component.css'
})
export class FuncionarioEditComponent {
  user_id: any;
  data: any;
  funcionario = new Funcionario();

  constructor(
    private route: ActivatedRoute,
    private dataService: FuncionarioServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user_id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getFuncionarioById(this.user_id).subscribe((res) => {
      this.data = res;
      this.funcionario = this.data;
    });
  }
  updateFuncionario() {
    this.dataService.updateData(this.user_id, this.funcionario).subscribe((res) => {
      console.log('successfull');
      this.router.navigate(['home']);
    });
  }
}
