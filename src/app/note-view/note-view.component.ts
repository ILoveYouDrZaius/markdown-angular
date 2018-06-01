import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Note } from '../Note'

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit, OnChanges {
  @Input() note: Note;

  @Output() onNoteChanged: EventEmitter<Note> = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) : void {
    if(changes['note'] && changes['note'].currentValue) {
      const note: Note = changes['note'].currentValue;
      this.note = {
        id: note.id,
        title: note.title,
        value: note.value
      };
    }
  }

  noteChanged(value: Note) {
    this.onNoteChanged.emit(value);
  }

}
