import { Component, OnInit } from '@angular/core';
import { TeamData } from '../../models/team-data';
import { Init } from 'v8';
import { MemberService } from '../../services/team-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  mailImgSrc='/mail_black_alt.svg';
  instaImgSrc='/insta_black_alt.svg';
  linkImgSrc='/linkedin_black_alt.svg';
  gitImgSrc='/github_black_alt.svg';

  selectedPerson: any = TeamData.data["elmira"];

  constructor(private memberservice:MemberService){

  }

  ngOnInit(): void{
    //console.log(this.selectedPerson);
    //console.log(TeamData.data.khairul);
    this.memberservice.getSelectedMember().subscribe((result)=>{
      console.log(result);
      this.selectedPerson = TeamData.data[result];
    })
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
