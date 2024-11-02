import { Injectable, OnDestroy } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class MemberService implements OnDestroy{
    
    
    private selectedMemberSubject = new ReplaySubject<any>(1);
    private selectedMember: any = "";

    setSelectedMemberSubject(string: any){
        this.selectedMember = string;
        this.selectedMemberSubject.next(this.selectedMember);
    }

    getSelectedMember(): Observable<any> {
        return this.selectedMemberSubject;
    }

    ngOnDestroy() {

    }
}