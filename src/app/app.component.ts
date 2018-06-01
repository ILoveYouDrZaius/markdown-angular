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
  note: string = '';

  notes: Note[] = []

  constructor(private notesService: NoteService) {

  }

  ngOnInit() {
    this.getAllNotes();
  }

  
  noteChanges(value: string) : void {
    this.note = value;
    localStorage.setItem('note', this.note);
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
}
