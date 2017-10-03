import { Component } from '@angular/core';

@Component({
    selector: 'sandbox13',
    template: `
    <h3>Sandbox 13</h3>
    <form (submit)="onSubmit()" >
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" [(ngModel)]="name" name="name">            
        </div>
        <input type="submit" class="btn btn-submit">
    </form>
    <hr>
    <ul class="list-group">
        <li class="list-group-item" *ngFor="let n of users">{{n}}</li>
    </ul>
    <br><hr>`
})

export class Sandbox13Component{
    name:string = "";
    users:string[] = ["Colin", "Kimmy", "Jordan", "Colin Jr", "Lily", "Sean", "Noelle"];

    onSubmit(){
        console.log(this.name);
        this.users.push(this.name);
    }
}

