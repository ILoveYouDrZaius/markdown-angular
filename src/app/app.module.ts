import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteFormComponent } from './note-view/note-form/note-form.component';
import { NotePreviewComponent } from './note-view/note-preview/note-preview.component';
import { NotesListComponent } from './notes-list/notes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    NoteViewComponent,
    NoteFormComponent,
    NotePreviewComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
