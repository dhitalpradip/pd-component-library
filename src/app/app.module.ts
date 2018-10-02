import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatMenuModule, MatButtonModule, MatCheckboxModule,MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PdInputModule } from './my-library/pd-input.module';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PdInputModule,
    MatMenuModule, MatButtonModule, 
    MatCheckboxModule,MatToolbarModule, 
    MatSidenavModule, MatIconModule, 
    MatListModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
