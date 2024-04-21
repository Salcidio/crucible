import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoricoEscolarServiceService } from '../../services/historico-escolar-service.service';
import { HistoricoEscolar } from '../../model/historico-escolar';

@Component({
  selector: 'app-historico-escolar-edit',
  templateUrl: './historico-escolar-edit.component.html',
  styleUrl: './historico-escolar-edit.component.css'
})
export class HistoricoEscolarEditComponent {
  id: any;
  data: any;
  historicoEscolar = new HistoricoEscolar();

  constructor(
    private route: ActivatedRoute,
    private dataService: HistoricoEscolarServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getHistoricoEscolarById(this.id).subscribe((res) => {
      this.data = res;
      this.historicoEscolar = this.data;
    });
  }
  updateHistoricoEscolar() {
    this.dataService.updateData(this.id, this.historicoEscolar).subscribe((res) => {
      console.log('successfull');
      this.router.navigate(['home']);
    });
  }
}
