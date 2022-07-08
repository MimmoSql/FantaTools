import { Component, Input } from '@angular/core';
import { Team } from '../model/objects/Team';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent {
  @Input() team!:Team;

}
