import { Component } from '@angular/core';

@Component({
    selector: 'sandbox12',
    template: `
    <h3>Sandbox 12</h3>
    <div class="container">
        <form class="form">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" [(ngModel)]="name" name="name" >
            </div>
            <div class="form-group">
                <label>Age</label>
                <input type="text" class="form-control" [(ngModel)]="age" name="age" >
            </div>
            <input type="submit" value="Submit" class="btn btn-submit" >
        </form>
        <h4>{{ name }}</h4>
        <h4>{{ age  }}</h4>
    </div>
    <br><hr>`
})

export class Sandbox12Component{
    name:string = "";
    age:number = 0;
}