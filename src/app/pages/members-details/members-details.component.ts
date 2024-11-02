import { Component } from '@angular/core';
import { TeamData } from '../../models/team-data';

@Component({
  selector: 'app-members-details',
  templateUrl: './members-details.component.html',
  styleUrl: './members-details.component.scss'
})
export class MembersDetailsComponent {
    

data:any = TeamData.team;

  constructor(){
    
  }


}
