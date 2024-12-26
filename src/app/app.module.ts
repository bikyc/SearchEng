import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { SearchBoxService } from './Services/Searchbox.service';
import { HttpClientModule } from '@angular/common/http';
import { ListResultPageComponent } from './list-result-page/list-result-page.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ListResultPageComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchBoxComponent,SearchBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
