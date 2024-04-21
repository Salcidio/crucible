import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrecarioServiceService } from '../../services/precario-service.service';
import { Precario } from '../../model/precario';

@Component({
  selector: 'app-precario-edit',
  templateUrl: './precario-edit.component.html',
  styleUrl: './precario-edit.component.css'
})
export class PrecarioEditComponent {
  id: any;
  data: any;
  precario = new Precario();

  constructor(
    private route: ActivatedRoute,
    private dataService: PrecarioServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getPrecarioById(this.id).subscribe((res) => {
      this.data = res;
      this.precario = this.data;
    });
  }
  updatePrecario() {
    this.dataService.updateData(this.id, this.precario).subscribe((res) => {
      console.log('successfull');
      this.router.navigate(['home']);
    });
  }
}
