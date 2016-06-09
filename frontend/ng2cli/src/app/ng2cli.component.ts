import {Component} from '@angular/core';
// import {Router, ROUTER_DIRECTIVES, Routes} from "@angular/router";
// import {RouteParams, RouteConfig, ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';

import {ViewListComponent} from './views/view-list.component';
import {ViewSingleComponent} from './views/view-single/index';
import {UserListComponent,UserFormComponent, UserSingleComponent} from './users/index';
import {PointListComponent} from './points/point-list/index';
import {ProjectListComponent, ProjectFormComponent, ProjectSingleComponent} from './projects/index';

@Component({
    moduleId: module.id,
    selector: 'ng2cli-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'ng2cli.component.html',
    styleUrls: ['ng2cli.component.css']
})

@Routes([
    {path: '/view/:id', component: ViewSingleComponent},
    {path: '/views', component: ViewListComponent},

    {path: '/users', component: UserListComponent},
    {path: '/users/form', component: UserFormComponent},
    {path: '/user/:id', component: UserSingleComponent},

    {path: '/points', component: PointListComponent},
    {path: '/projects', component: ProjectListComponent},
    {path: '/project/:id', component: ProjectSingleComponent},
    {path: '/projects/form', component: ProjectFormComponent}
])

export class Ng2cliAppComponent {
    title = 'ng2cli works!';

    constructor(public router:Router) {

    }

    ngOnInit() {}
}

