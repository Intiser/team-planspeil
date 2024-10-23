import { Component } from '@angular/core';
import { PageService } from '../../services/page-service';
import { PageConstants } from '../../models/page-contants';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  constructor(private pageService:PageService){
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



}
