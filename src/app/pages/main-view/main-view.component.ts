import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      "Some random Idea",
      "Another random Idea",
      "Awesome Random Idea"
    ]),
    new Column('Research', [
      "Lorem ipsum",
      "Fo fighters",
      "Third item in research item"
    ]),
    new Column('Todo', [
      "Go to Work",
      "Pick up some groceries",
      "Fall sleep right now"
    ]),
    new Column('Done', [
      'Get up', 
      'Brush teeth', 
      'Take a shower', 
      'Check e-mail', 
      'Walk dog'
    ])
  ])

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
