import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book';
import { DataService } from 'src/service/dataService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public books: Book[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((books: Book[]) => {
      this.books = books;
    });
  }
}
