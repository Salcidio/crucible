import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//my imports          --1
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './universe/create/users/users.component';
import { DepartamentosComponent } from './universe/create/departamentos/departamentos.component';
import { ProfessoresComponent } from './universe/create/professores/professores.component';
import { CursosComponent } from './universe/create/cursos/cursos.component';
import { PrecariosComponent } from './universe/create/precarios/precarios.component';
import { TurmasComponent } from './universe/create/turmas/turmas.component';
import { AlunosComponent } from './universe/create/alunos/alunos.component';
import { EncarregadosComponent } from './universe/create/encarregados/encarregados.component';
import { HistoricoEscolarComponent } from './universe/create/historico-escolar/historico-escolar.component';
import { MatriculasComponent } from './universe/create/matriculas/matriculas.component';
import { RepositoriosComponent } from './universe/create/repositorios/repositorios.component';
import { FuncionariosComponent } from './universe/create/funcionarios/funcionarios.component';
import { UsersUpdateComponent } from './universe/update/users-update/users-update.component';
import { HomePageComponent } from './universe/home/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
//                    --1

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DepartamentosComponent,
    ProfessoresComponent,
    CursosComponent,
    PrecariosComponent,
    TurmasComponent,
    AlunosComponent,
    EncarregadosComponent,
    HistoricoEscolarComponent,
    MatriculasComponent,
    RepositoriosComponent,
    FuncionariosComponent,
    UsersUpdateComponent,
    HomePageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
