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
import { UserEditComponent } from './universe/edit/user-edit/user-edit.component';
import { TurmaEditComponent } from './universe/edit/turma-edit/turma-edit.component';
import { RepositorioEditComponent } from './universe/edit/repositorio-edit/repositorio-edit.component';
import { ProfessorEditComponent } from './universe/edit/professor-edit/professor-edit.component';
import { PrecarioEditComponent } from './universe/edit/precario-edit/precario-edit.component';
import { MatriculaEditComponent } from './universe/edit/matricula-edit/matricula-edit.component';
import { HistoricoEscolarEditComponent } from './universe/edit/historico-escolar-edit/historico-escolar-edit.component';
import { FuncionarioEditComponent } from './universe/edit/funcionario-edit/funcionario-edit.component';
import { EncarrgadoEditComponent } from './universe/edit/encarrgado-edit/encarrgado-edit.component';
import { DepartamentoEditComponent } from './universe/edit/departamento-edit/departamento-edit.component';
import { CursoEditComponent } from './universe/edit/curso-edit/curso-edit.component';
import { AlunoEditComponent } from './universe/edit/aluno-edit/aluno-edit.component';
import { Title } from '@angular/platform-browser';
import { SysusersComponent } from './universe/sysadmin/tables/sysusers/sysusers.component';
import { SysalunoComponent } from './universe/sysadmin/tables/sysaluno/sysaluno.component';
import { SyscursosComponent } from './universe/sysadmin/tables/syscursos/syscursos.component';
import { SysdepartamentosComponent } from './universe/sysadmin/tables/sysdepartamentos/sysdepartamentos.component';
import { SysencarregadosComponent } from './universe/sysadmin/tables/sysencarregados/sysencarregados.component';
import { SysfuncionariosComponent } from './universe/sysadmin/tables/sysfuncionarios/sysfuncionarios.component';
import { SyshistoricoEscolarComponent } from './universe/sysadmin/tables/syshistorico-escolar/syshistorico-escolar.component';
import { SysmatriculasComponent } from './universe/sysadmin/tables/sysmatriculas/sysmatriculas.component';
import { SysprecariosComponent } from './universe/sysadmin/tables/sysprecarios/sysprecarios.component';
import { SysprofessoresComponent } from './universe/sysadmin/tables/sysprofessores/sysprofessores.component';
import { SysrepositoriosComponent } from './universe/sysadmin/tables/sysrepositorios/sysrepositorios.component';
import { SysturmasComponent } from './universe/sysadmin/tables/systurmas/systurmas.component';
const routes: Routes = [
  {path:'sys/alunos',component:SysalunoComponent,title:'syscore'},
  {path:'sys/cursos',component:SyscursosComponent,title:'syscore'},
  {path:'sys/departamentos',component:SysdepartamentosComponent,title:'syscore'},
  {path:'sys/encarregados',component:SysencarregadosComponent,title:'syscore'},
  {path:'sys/funcionarios',component:SysfuncionariosComponent,title:'syscore'},
  {path:'sys/historicoEscolars',component:SyshistoricoEscolarComponent,title:'syscore'},
  {path:'sys/matriculas',component:SysmatriculasComponent,title:'syscore'},
  {path:'sys/precarios',component:SysprecariosComponent,title:'syscore'},
  {path:'sys/professores',component:SysprofessoresComponent,title:'syscore'},
  {path:'sys/repositorios',component:SysrepositoriosComponent,title:'syscore'},
  {path:'sys/turmas',component:SysturmasComponent,title:'syscore'},
  {path:'sys/users',component:SysusersComponent,title:'syscore'},






















  
  {path:'',component:AppComponent,title:'jecs.inc'},

  {path:'home',component:AppComponent,title:'Jecs.inc'},


  {path:'alunos',component:AlunosComponent,title:'Aluno'},
  {path:'sys/alunos/aluno/edit/:id',component:AlunoEditComponent,title:'Editar alunos'},


  {path:'cursos',component:CursosComponent,title:'Cursos'},
  {path:'sys/cursos/curso/edit/:id',component:CursoEditComponent,title:'Editar cursos'},


  {path:'departamentos',component:DepartamentosComponent,title:'Departamentos'},
  {path:'sys/departamentos/departamento/edit/:id',component:DepartamentoEditComponent,title:'Editar departamentos'},


  {path:'encarregados',component:EncarregadosComponent,title:'Encarregados'},
  {path:'sys/encarregados/encarregado/edit/:id',component:EncarrgadoEditComponent,title:'Editar encarregados'},


  {path:'funcionarios',component:FuncionariosComponent,title:'Fucionarios'},
  {path:'sys/funcionarios/funcionario/edit/:id',component:FuncionarioEditComponent,title:'Editar funcionarios'},


  {path:'historicoEscolars',component:HistoricoEscolarComponent,title:'Historico Escolar'},
  {path:'sys/historicoEscolars/historicoEscolar/edit/:id',component:HistoricoEscolarEditComponent,title:'Editar historicoEscolars'},


  {path:'matriculas',component:MatriculasComponent,title:'Matriculas'},
  {path:'sys/matriculas/matricula/edit/:id',component:MatriculaEditComponent,title:'Editar matriculas'},


  {path:'precarios',component:PrecariosComponent,title:'Preçario'},
  {path:'sys/precarios/precario/edit/:id',component:PrecarioEditComponent,title:'Editar precarios'},


  {path:'professores',component:ProfessoresComponent,title:'Professores'},
  {path:'sys/professores/professor/edit/:id',component:ProfessorEditComponent,title:'Editar professores'},


  {path:'repositorios',component:RepositoriosComponent,title:'Repositório'},
  {path:'sys/repositorios/repositorio/edit/:id',component:RepositorioEditComponent,title:'Editar repositorios'},


  {path:'turmas',component:TurmasComponent,title:'Turmas'},
  {path:'sys/turmas/turma/edit/:id',component:TurmaEditComponent,title:'Editar turma'},


  {path:'users',component:UsersComponent,title:'Usuários'},
  {path:'sys/users/user/edit/:id',component:UserEditComponent,title:'Editar Usuario'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
    