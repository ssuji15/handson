import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Book } from "src/models/book";

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnChanges{

    @Input() public book: Book | undefined;
    public url:SafeUrl | undefined = undefined;

    constructor(private sanitizer: DomSanitizer) {}

    ngOnChanges(changes: SimpleChanges): void {
        if(this.book?.image) {
            this.url = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.book.image);       
        }
    }
}