import { Author } from './../../models/author';
import { AuthorService } from './../../../utils/services/author/author.service';
import { MatMenuModule } from '@angular/material/menu';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../../utils/services/book/book.service';
import { first } from 'rxjs/internal/operators/first';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LibraryService } from '../../../utils/services/library/library.service';
import { Library } from './../../models/library';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  book: Book[];
  author: Author[];
  selected = [];
  author_id: number;
  library_id: number;
  library: Library[];

  constructor(
    private bookService: BookService,
    private _authorService: AuthorService,
    private _alertService: MatSnackBar,
    private ser: LibraryService,
  ) { }

  ngOnInit(): void {

    this.getAuthor();
    this.getLibraries();
  }
  onAuthorSelected(val: any) {
    this.getAuthorAllBooks(val);
  }

  getAuthor() {
    this._authorService.listAuthor().subscribe(data => {
      this.author = data;
    });
  }

  getAuthorAllBooks(author_id) {
    this.bookService.getAuthorAllBooks(author_id).subscribe(data => {
      this.book = data;
    });
  }

  onLibrarySelected(val: any) {
    this.getAllLibraries(val);
  }

  getAllLibraries(library_id) {
    this.ser.getByIdLibrary(library_id).subscribe(data => {

    });
  }

  getLibraries() {
    this.ser.listLibrary(JSON.parse(localStorage.getItem('currentUser')).id).subscribe(data => {
      this.library = data;
    })
  }




 bookDelete(id) {
    this.bookService.bookDelete(id).subscribe(data => {
      window.location.reload();
    });
  }

  addBookOnLibrary(book_id) {
    this.bookService.addBookOnLibrary({
      LibraryID: this.library_id,
      BookID: book_id
    }).pipe(first())
      .subscribe(
        data => {
          console.log('data', data);
        },
        error => {
          console.log('error', error);
        });
    this._alertService.open(
      'Kitap kütüphanenize eklenmiştir.',
      'İŞLEM BAŞARILI',
      {
        duration: 2000,
      }
    );
    window.location.reload();
  }
}
