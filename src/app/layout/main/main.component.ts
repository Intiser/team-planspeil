import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageService } from '../../services/page-service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PageConstants } from '../../models/page-contants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  title = 'team-page';

  @ViewChild('home')
  home!: ElementRef;

  @ViewChild('team')
  team!: ElementRef;

  @ViewChild('about')
  vission!: ElementRef;

  constructor(private pageService:PageService,
    private breakpointObserver:BreakpointObserver
  ){
  
  
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
