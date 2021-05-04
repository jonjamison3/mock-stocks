import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-tag-filter',
  templateUrl: './tag-filter.component.html',
  styleUrls: ['./tag-filter.component.scss']
})
export class TagFilterComponent implements OnInit {
  @Input() tags: Tag[]; 
  @Output() selectedTagEmitter: EventEmitter<Tag> = new EventEmitter();

  selectedTag: Tag; 
  constructor() { }

  ngOnInit(): void {}

  selectionChangeHandler(tag: Tag) {
    this.selectedTag = tag; 
    this.selectedTagEmitter.emit(tag);
  }
}
