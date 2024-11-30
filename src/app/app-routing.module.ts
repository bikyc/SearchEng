import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListResultPageComponent } from './list-result-page/list-result-page.component';
import { SearchBoxComponent } from './search-box/search-box.component';

const routes: Routes = [
  { path: '', component: SearchBoxComponent }, // Default route
  { path: 'results', component: ListResultPageComponent }, // Results route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
