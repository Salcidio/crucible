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
import { HomePageComponent } from './universe/home/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlunoEditComponent } from './universe/edit/aluno-edit/aluno-edit.component';
import { CursoEditComponent } from './universe/edit/curso-edit/curso-edit.component';
import { DepartamentoEditComponent } from './universe/edit/departamento-edit/departamento-edit.component';
import { EncarrgadoEditComponent } from './universe/edit/encarrgado-edit/encarrgado-edit.component';
import { FuncionarioEditComponent } from './universe/edit/funcionario-edit/funcionario-edit.component';
import { HistoricoEscolarEditComponent } from './universe/edit/historico-escolar-edit/historico-escolar-edit.component';
import { MatriculaEditComponent } from './universe/edit/matricula-edit/matricula-edit.component';
import { PrecarioEditComponent } from './universe/edit/precario-edit/precario-edit.component';
import { ProfessorEditComponent } from './universe/edit/professor-edit/professor-edit.component';
import { RepositorioEditComponent } from './universe/edit/repositorio-edit/repositorio-edit.component';
import { TurmaEditComponent } from './universe/edit/turma-edit/turma-edit.component';
import { UserEditComponent } from './universe/edit/user-edit/user-edit.component';
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
import { SysusersComponent } from './universe/sysadmin/tables/sysusers/sysusers.component';
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
    HomePageComponent,
    AlunoEditComponent,
    CursoEditComponent,
    DepartamentoEditComponent,
    EncarrgadoEditComponent,
    FuncionarioEditComponent,
    HistoricoEscolarEditComponent,
    MatriculaEditComponent,
    PrecarioEditComponent,
    ProfessorEditComponent,
    RepositorioEditComponent,
    TurmaEditComponent,
    UserEditComponent,
    SysalunoComponent,
    SyscursosComponent,
    SysdepartamentosComponent,
    SysencarregadosComponent,
    SysfuncionariosComponent,
    SyshistoricoEscolarComponent,
    SysmatriculasComponent,
    SysprecariosComponent,
    SysprofessoresComponent,
    SysrepositoriosComponent,
    SysturmasComponent,
    SysusersComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
