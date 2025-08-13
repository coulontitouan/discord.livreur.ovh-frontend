import { Component, OnInit } from '@angular/core';

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
    name = 'John Doe';
    banner: { color: string, url: string | null; } = { color: '#000000', url: null };

    constructor() { }

    ngOnInit() {
    }
}