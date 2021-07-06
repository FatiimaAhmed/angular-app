import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() images = [{}];
  @Output() pageChanged = new EventEmitter<number>();
  currentPage = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(index: number) {
    this.currentPage = index;
    this.pageChanged.emit(this.currentPage);
  }

  onPrev() {
    this.currentPage = this.currentPage - 1;
    this.pageChanged.emit(this.currentPage);
  }

  onNext() {
    this.currentPage = this.currentPage + 1;
    this.pageChanged.emit(this.currentPage);
  }

}
