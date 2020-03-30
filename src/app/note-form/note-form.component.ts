import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';



@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {


  newNote = new Note(0,"","",new Date());
  @Output() addNote = new EventEmitter<Note>();

    submitNote() {
      this.addNote.emit(this.newNote);
    }
  
  constructor() { }

  ngOnInit(): void {
  }

}
