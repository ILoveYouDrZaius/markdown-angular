import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Note } from '../../Note';

@Component({
  selector: 'note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit, OnChanges {
  @Input() note: Note;
  @Output() onNoteChanged: EventEmitter<Note> = new EventEmitter<Note>();


  constructor() { }

  ngOnInit() {
  }

  noteChanged(value: string) {
    this.note.value = value;
    this.onNoteChanged.emit(this.note);
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

}
