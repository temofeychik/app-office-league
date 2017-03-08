import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {BaseComponent} from '../../common/base.component';
import {LeagueTeam} from '../../../graphql/schemas/LeagueTeam';

@Component({
    selector: 'league-team-list',
    templateUrl: 'league-team-list.component.html'
})
export class LeagueTeamListComponent extends BaseComponent implements OnInit {

    @Input() title: String;
    @Input() leagueTeams: LeagueTeam[];
    @Input() displayTeams: boolean;
    @Input() displayLeagues: boolean;
    @Input() detailsPath: string[];

    constructor(route: ActivatedRoute, private router: Router) {
        super(route);
    }

    onLeagueTeamClicked(leagueTeam: LeagueTeam) {
        if (this.displayLeagues) {
            this.router.navigate(['leagues', leagueTeam.league.name.toLowerCase()]);
        } else if (this.displayTeams) {
            this.router.navigate(['teams', leagueTeam.team.name.toLowerCase()]);
        }
    }

    onDetailsClicked() {
        this.router.navigate(this.detailsPath);
    }
}