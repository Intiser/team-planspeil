import { Component, Input, OnInit } from '@angular/core';
import { PageService } from '../../services/page-service';
import { PageConstants } from '../../models/page-contants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit {

  @Input("fullnav")
  fullNavbar = true;

  constructor(private pageService:PageService,
              private router:Router,
  ){
  }

  ngOnInit(): void{
    
  }

  homeClicked(){
    console.log("clicked");
    this.pageService.setSelectedPageSubject(PageConstants.HOME);
  }

  teamClicked(){
    console.log("clicked");
    this.pageService.setSelectedPageSubject(PageConstants.TEAM);
  }

  vissionClicked(){
    console.log("clicked");
    this.pageService.setSelectedPageSubject(PageConstants.DETAILS);
  }

  logoClicked(){
    console.log("logo");
    this.router.navigate(["/"]);
  }


}
