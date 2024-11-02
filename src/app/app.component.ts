import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageService } from './services/page-service';
import { Init } from 'v8';
import { PageConstants } from './models/page-contants';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  


  constructor(private pageService:PageService,
              private breakpointObserver:BreakpointObserver
  ){
  }

  ngOnInit(): void{

    // this.pageService.getSelectedPage()
    //   .subscribe((result)=>{
    //       console.log(result);
    //       if(result == PageConstants.HOME){
    //         this.home.nativeElement.scrollIntoView({ behavior: 'smooth' });
    //       }
    //       else if(result ==  PageConstants.TEAM){
    //         this.team.nativeElement.scrollIntoView({ behavior: 'smooth' });
    //       }
    //       else if(result == PageConstants.DETAILS){
    //         this.vission.nativeElement.scrollIntoView({ behavior: 'smooth' });
    //       }
    //   });

      this.breakpointObserver.observe([
        Breakpoints.Tablet,
        Breakpoints.Handset,
        Breakpoints.Web
      ])
      .subscribe((result)=>{
          if(result.breakpoints[Breakpoints.Web] == true){

          }
          else if(result.breakpoints[Breakpoints.Handset] == true){

          }
          else if(result.breakpoints[Breakpoints.Tablet] == true){

          }
      });

  }

}
