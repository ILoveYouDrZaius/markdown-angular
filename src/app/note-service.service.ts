import { Injectable } from '@angular/core';
import { Note } from './Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  findAll(): Note[] {
    return this.getAllIds()
      .map(id => this.findOne(id));
  }

  findOne(id: string): Note {
    return JSON.parse(localStorage.getItem(id));
  }

  saveNote(note: Note) {
    if (!note.id) {
      note.id = `${Math.random() * 1000000}`;
      const allIds: string[] = this.getAllIds();

      const newIdList = [...allIds, note.id];
      localStorage.setItem('allIds', JSON.stringify(newIdList));
    }
    localStorage.setItem(note.id, JSON.stringify(note));

  }

  removeNote(id: string) {
    localStorage.removeItem(id);

    const allIds = this.getAllIds()
      .filter(noteId => noteId !== id);

    localStorage.setItem('allIds', JSON.stringify(allIds));
  }

  private getAllIds() {
    const result = localStorage.getItem('allIds');

    if (!result) {
      return [];
    }

    return JSON.parse(result);
  }

}
