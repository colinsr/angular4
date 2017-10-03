import { Component } from '@angular/core';

@Component({
    selector: 'sandbox14',
    template: `
    <h3>Sandbox 14</h3>
    <form novalidate #f="ngForm" (ngSubmit)="onSubmit(f)" >
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" [(ngModel)]="user.name" name="name" #userName="ngModel" minlength="2" required >
            <div *ngIf="userName.errors?.required && userName.touched" class="alert alert-danger">Name is req'd.</div>
            <div *ngIf="userName.errors?.minlength && userName.touched" class="alert alert-danger">Name should be at least 2 chars.</div>
            
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" [(ngModel)]="user.email" name="email" #userEmail="ngModel" required >
            <div *ngIf="userEmail.errors?.required && userEmail.touched" class="alert alert-danger">Email is req'd.</div>
        </div>
        <div class="form-group">
            <label>Phone</label>
            <input type="text" class="form-control" [(ngModel)]="user.phone" name="phone" #userPhone="ngModel" minlength="10" >
            <div *ngIf="userPhone.errors?.required && userPhone.touched" class="alert alert-danger">Phone is req'd.</div>
            <div *ngIf="userPhone.errors?.minlength && userPhone.touched" class="alert alert-danger">Phone should be 10 chars.</div>
        </div>
        <input type="submit" class="btn btn-success" value="Submit" >        
    </form>
    <br><hr>`
})

export class Sandbox14Component{
    user = {
        name:'',
        email:'',
        phone:''
    }
    onSubmit({value, valid}){
        if(valid){
            console.log(value);
        } else {
            console.log("error");
        }
    }
}

