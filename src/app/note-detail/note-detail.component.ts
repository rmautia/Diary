import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';
@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  
  @Input() note: Note; 
  @Output() isComplete = new EventEmitter<boolean>();

  noteComplete(complete:boolean) {
    this.isComplete.emit(complete)
  }

  noteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
