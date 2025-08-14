import { Component, model, OnInit } from '@angular/core';
import { ApiService } from './api/api';
import { APIUser } from 'discord-api-types/v10';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [],
    providers: []
})
export class AppComponent implements OnInit {
    title = 'frontend';
    user = model<APIUser | null>(null);

    constructor(private readonly api: ApiService) { }

    ngOnInit() {
        this.api.getUser('@me').subscribe(this.user.set)
    }
}