import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes:Note[]= [
    new Note(1,'class meeting','at moringa school', new Date(2020,2,1)),
    new Note(2,'Taking Yoga classes','at Coreta place', new Date(2020,3,1)),
    new Note(3,'Taking Gym membership','its about time', new Date(2020,4,1)),
    new Note(4,'Develop home Work out routine' , 'light exercises', new Date(2020,5,1)),
    new Note(5,'Vacation','outside the country', new Date(2020,6,1)),
    new Note(6,'go swimming','summer time', new Date(2020,5,5)),
    new Note(7,'travel upcountry','August holidays', new Date(2020,5,7)),
    new Note(8,'Attend AGM Meeting','for my younger brother at school', new Date(2020,7,2)),
    new Note(9,'work on my IP','startup-idea', new Date(2020,11,4)),
  ];

  addNewNote(note){
    let noteLength = this.notes.length;
    note.id = noteLength+1;
    note.completeDate = new Date(note.completeDate)
    this.notes.push(note)
  }

  toggleDetails(index){
    this.notes[index].showDescription = !this.notes[index].showDescription;
    }
    completeNote(isComplete, index) {
      if (isComplete) {
        this.notes.splice(index,1);
      }
    }
    deleteNote(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.notes[index].name}?`);
  
        if (toDelete){
          this.notes.splice(index,1)
        }
      }
    } 

  constructor() { }

  ngOnInit() {
  }

}
