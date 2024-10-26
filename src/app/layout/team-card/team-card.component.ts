import { Component } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss'
})
export class TeamCardComponent {
    mailImgSrc='/mail_black.svg';
    instaImgSrc='/insta_black.svg';
    linkImgSrc='/linkedin_black.svg';
    gitImgSrc='/github_black.svg';


    mouseOverMail(){
      this.mailImgSrc = '/mail_black_alt.svg';
      console.log("log");
    }

    mouseOutMail(){
      this.mailImgSrc='/mail_black.svg';
    }

    mouseOverInsta(){
      this.instaImgSrc = '/insta_black_alt.svg';
    }

    mouseOutInsta(){
      this.instaImgSrc='/insta_black.svg';
    }

    mouseOverLink(){
      this.linkImgSrc = '/linkedin_black_alt.svg';
    }

    mouseOutLink(){
      this.linkImgSrc='/linkedin_black.svg';
    }

    mouseOverGit(){
      this.gitImgSrc = '/github_black_alt.svg';
    }

    mouseOutGit(){
      this.gitImgSrc='/github_black.svg';
    }
}
