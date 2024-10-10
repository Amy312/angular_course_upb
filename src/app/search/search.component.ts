import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchQuery: string = ''
  @Output() search = new EventEmitter<string>()
  onSearch(): void {
    this.search.emit(this.searchQuery);
  }
}
