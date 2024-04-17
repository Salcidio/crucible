import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AlunosComponent } from './universe/create/alunos/alunos.component';
import { CursosComponent } from './universe/create/cursos/cursos.component';
import { DepartamentosComponent } from './universe/create/departamentos/departamentos.component';
import { EncarregadosComponent } from './universe/create/encarregados/encarregados.component';
import { FuncionariosComponent } from './universe/create/funcionarios/funcionarios.component';
import { HistoricoEscolarComponent } from './universe/create/historico-escolar/historico-escolar.component';
import { MatriculasComponent } from './universe/create/matriculas/matriculas.component';
import { PrecariosComponent } from './universe/create/precarios/precarios.component';
import { ProfessoresComponent } from './universe/create/professores/professores.component';
import { RepositoriosComponent } from './universe/create/repositorios/repositorios.component';
import { TurmasComponent } from './universe/create/turmas/turmas.component';
import { UsersComponent } from './universe/create/users/users.component';
const routes: Routes = [
  {path:'',component:AppComponent,title:'jecs.inc'},

  {path:'home',component:AppComponent,title:'Jecs.inc'},


  {path:'alunos',component:AlunosComponent,title:'Aluno'},


  {path:'cursos',component:CursosComponent,title:'Cursos'},


  {path:'departamentos',component:DepartamentosComponent,title:'Departamentos'},


  {path:'encarregados',component:EncarregadosComponent,title:'Encarregados'},


  {path:'funcionarios',component:FuncionariosComponent,title:'Fucionarios'},


  {path:'historicoEscolar',component:HistoricoEscolarComponent,title:'Historico Escolar'},


  {path:'matriculas',component:MatriculasComponent,title:'Matriculas'},


  {path:'precarios',component:PrecariosComponent,title:'Preçario'},


  {path:'professores',component:ProfessoresComponent,title:'Professores'},


  {path:'repositorio',component:RepositoriosComponent,title:'Repositório'},


  {path:'turmas',component:TurmasComponent,title:'Turmas'},


  {path:'users',component:UsersComponent,title:'Usuários'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
