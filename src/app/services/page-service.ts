import { Injectable, OnDestroy } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class PageService  implements OnDestroy{
    
    
    private selectedPageSubject = new ReplaySubject<String>(1);
    private selectedPage: String = "";

    setSelectedPageSubject(string: String){
        this.selectedPage = string;
        this.selectedPageSubject.next(this.selectedPage);
    }

    getSelectedPage(): Observable<String> {
        return this.selectedPageSubject;
    }

    private scrolledPagePageSubject = new ReplaySubject<String>(1);
    private scrolledPage: String = "";

    setScrolledPageSubject(string: String){
        this.scrolledPage = string;
        this.scrolledPagePageSubject.next(this.scrolledPage);
    }

    getScrolledPage(): Observable<String> {
        return this.scrolledPagePageSubject;
    }

    

    ngOnDestroy() {

    }
}