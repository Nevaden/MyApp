import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './pages/one/one.component';
import { TwoComponent } from './pages/two/two.component';
import { DataResolver } from './resolver/data.resolver';

const routes: Routes = [
  {
    path: 'one',
    component: OneComponent,
    resolve: {
      data: DataResolver
    },
    data: {
      part: 0
    }

  },
  {
    path: 'two',
    component: TwoComponent,
    resolve: {
      data: DataResolver
    },
    data: {
      part: 1
    }

  },
  { path: '', redirectTo: '/one', pathMatch: 'full' },
  { path: '**', component: OneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
