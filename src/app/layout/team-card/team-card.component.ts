import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MemberDialogComponent } from '../../pages/member-dialog/member-dialog.component';
import { TeamData } from '../../models/team-data';
import { MemberService } from '../../services/team-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss'
})
export class TeamCardComponent implements OnInit{
    mailImgSrc='/mail_black_alt.svg';
    instaImgSrc='/insta_black_alt.svg';
    linkImgSrc='/linkedin_black_alt.svg';
    gitImgSrc='/github_black_alt.svg';


    @Input("person")
    person = "";

    selectedPerson: any;

    constructor(private matDialog:MatDialog,
          private memberService: MemberService,
          private router:Router,
    ){

    }

    shortText(){
      return this.selectedPerson.about.substring(0, 80) + "...";
    }

    ngOnInit(): void {
      //console.log(this.person);
      this.selectedPerson = TeamData.data[this.person];
    }

    clickPerson(){
      this.memberService.setSelectedMemberSubject(this.person);
      //console.log("called");
      this.router.navigate(["/profile"]);
    }


    buttonClicked(config?:any, dialogConfig?:MatDialogConfig){
      //console.log("clicked");
      //this.matDialog.open(MemberDialogComponent).afterClosed();
    }


    mouseOverMail(){
      this.mailImgSrc = '/mail_black.svg';
      console.log("log");
    }

    mouseOutMail(){
      this.mailImgSrc='/mail_black_alt.svg';
    }

    mouseOverInsta(){
      this.instaImgSrc = '/insta_black.svg';
    }

    mouseOutInsta(){
      this.instaImgSrc='/insta_black_alt.svg';
    }

    mouseOverLink(){
      this.linkImgSrc = '/linkedin_black.svg';
    }

    mouseOutLink(){
      this.linkImgSrc='/linkedin_black_alt.svg';
    }

    mouseOverGit(){
      this.gitImgSrc = '/github_black.svg';
    }

    mouseOutGit(){
      this.gitImgSrc='/github_black_alt.svg';
    }
}
