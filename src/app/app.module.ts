import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteSomethingComponent } from './delete-something/delete-something.component';
import { ModalService } from './shared/modal.service';

@NgModule({
  declarations: [		
    AppComponent,
      DeleteSomethingComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
