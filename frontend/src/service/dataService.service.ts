import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "src/models/book";

@Injectable({
    providedIn: 'root',
})
export class DataService {

    private static readonly URL: string = 'http://localhost:3000/getBooks';

    constructor(private http: HttpClient) { }
    
    public getData(): Observable<Book[]> {
        return this.http.get<Book[]>(DataService.URL);
    }
}