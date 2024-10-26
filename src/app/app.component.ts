import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageService } from './services/page-service';
import { Init } from 'v8';
import { PageConstants } from './models/page-contants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'team-page';

  @ViewChild('home')
  home!: ElementRef;

  @ViewChild('team')
  team!: ElementRef;

  @ViewChild('vission')
  vission!: ElementRef;


  constructor(private pageService:PageService){
  }

  ngOnInit(): void{

    this.pageService.getSelectedPage()
      .subscribe((result)=>{
          console.log(result);
          if(result == PageConstants.HOME){
            this.home.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
          else if(result ==  PageConstants.TEAM){
            this.team.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
          else if(result == PageConstants.DETAILS){
            this.vission.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }


      });

  }

}
