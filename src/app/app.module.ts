import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { NoteFormComponent } from './note-form/note-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    NoteFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
