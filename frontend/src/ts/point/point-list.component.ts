import 'rxjs/add/operator/map'
import {Component, OnInit} from "angular2/core";

import {PointService} from "./point.service";

@Component({
    bindings: [PointService],
    template: `
		<table>
            <thead>
                <tr>
                    <td>name</td>
                    <td>x</td>
                    <td>y</td>
                    <!--<td>projectID</td>-->
                    
                    <td>createDate</td>
                    <td>createdBy</td>
                    <!--<td>deletedDate</td>-->
                    <td>isOpened</td>
                    <td>isDeleted</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#point of points">
                    <td>{{point.name}}</td>
                    <td>{{point.x}}</td>
                    <td>{{point.y}}</td>
                    <!--<td>{{point.projectID}}</td>-->
                    
                    <td>{{point.createDate}}</td>
                    <td>{{point.createdBy}}</td>
                    <!--<td>{{point.deletedDate}}</td>-->
                    <td>{{point.isOpened}}</td>
                    <td>{{point.isDeleted}}</td>
                    
                    <td><a href="" class="button alert" (click)="removePoint($event)" data-id="{{point._id}}">Delete</a></td>
                    <td><a href="" class="button">Edit</a></td>
                </tr>
            </tbody>
        </table>
	`
})
export class PointListComponent {
    points;

    constructor(public pointService:PointService) {

    }

    getPoints() {
        this.pointService.getPoints()
            .subscribe(
                data => {
                    // console.log(data);
                    this.points = data;
                    // this.lsPoints = this.points;
                },
                error => console.error('Error: ' + error[0]),
                () => {
                    // console.log("Data loaded!")
                }
            )
    }

    removePoint(e) {
        e.preventDefault();
        this.pointService.removePoint(e.currentTarget.dataset.id)
            .subscribe(
                data => {
                    // console.log(data);
                    this.points = data;
                    // this.lsPoints = this.points;
                },
                error => console.error('Error: ' + error[0]),
                () => {
                    // console.log("Data loaded!")
                }
            )
    }



    ngOnInit() {
        this.getPoints();
    }
}