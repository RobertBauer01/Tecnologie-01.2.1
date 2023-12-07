import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
results: string[];
title = 'client-angular';

// Inject HttpClient into your component or service.
constructor(private http: HttpClient) {}
ngOnInit(): void {

// Make the HTTP request:
this.http.get('https://3000-robertbauer-tecnologie0-seaz9wjhn2b.ws-eu106.gitpod.io/api').subscribe(data => {
// Read the result field from the JSON response.
this.results = data['results'];
});
}
}