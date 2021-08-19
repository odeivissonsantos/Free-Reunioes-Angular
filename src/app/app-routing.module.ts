import { ReunioesEditComponent } from './components/reunioes/reunioes-edit/reunioes-edit.component';
import { ReunioesDeleteComponent } from './components/reunioes/reunioes-delete/reunioes-delete.component';
import { ReunioesDetailsComponent } from './components/reunioes/reunioes-details/reunioes-details.component';
import { ReunioesCreateComponent } from './components/reunioes/reunioes-create/reunioes-create.component';
import { ReunioesListComponent } from './components/reunioes/reunioes-list/reunioes-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reunioes-list',
    component: ReunioesListComponent
  },
  {
    path: 'reunioes-create',
    component: ReunioesCreateComponent
  },
  {
    path: 'reunioes-details/:id',
    component: ReunioesDetailsComponent
  },
  {
    path: 'reunioes-delete/:id',
    component: ReunioesDeleteComponent
  }
  ,
  {
    path: 'reunioes-edit/:id',
    component: ReunioesEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }