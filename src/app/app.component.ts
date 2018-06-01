import { Component, OnInit } from '@angular/core';
import { Note } from './Note';
import { NoteService } from './note-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Markdown editor';
  note: Note = null;

  notes: Note[] = []

  constructor(private notesService: NoteService) {

  }

  ngOnInit() {
    this.getAllNotes();
  }

  
  noteChanged(note: Note) : void {
    this.notesService.saveNote(note);
    this.edit(note.id);
    // localStorage.setItem('note', this.note);
  }
  
  createNewNote() {
    const newNote: Note = {
      title: `Nota ${this.notes.length +1}`,
      value: ''
    }
    
    this.notesService.saveNote(newNote);
    this.getAllNotes();
  }

  private getAllNotes() {
    this.notes = this.notesService.findAll();
  }

  edit(noteId) {
    this.note = this.notesService.findOne(noteId);
  }

  deleteNote(noteId: string) {
    this.notesService.removeNote(noteId);
    this.getAllNotes();
  }

}
