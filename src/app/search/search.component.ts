import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>()
  onSearch(searchQuery: string): void {
    console.log("find:", searchQuery)
    this.search.emit(searchQuery);
  }
}
