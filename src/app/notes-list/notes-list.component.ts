import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  @Input()
  notes: Note[] = [];

  @Output()
  newNote: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  editNote: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  deleteNote: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  newNoteButtonClicked() {
    this.newNote.emit();
  }

  edit(note: Note) {
    this.editNote.emit(note.id);
  }

  delete(note: Note) {
    this.deleteNote.emit(note.id);
  }

}
