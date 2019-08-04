import { Component, OnInit } from '@angular/core';

//import { NoteService } from '../note.service';
import { NoteClass } from '../note';
import { SEARCH } from '../note-stock';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  private CurrentSearchValue : NoteClass;
  private pastSearchValue : NoteClass[] = []
  notes: any;
  constructor() { }

  
  ngOnInit() {
  }

  getClick(SearchElement: string): NoteClass{
    for(var i = 0; i < this.notes.length; i++)
    {
      if(this.notes[i].SearchElement == SearchElement)
      {
        return this.notes[i];
      }
    }
  }
  
}

