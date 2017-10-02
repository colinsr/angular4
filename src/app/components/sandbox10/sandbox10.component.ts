import { Component } from '@angular/core';

@Component({
    selector: 'sandbox10',
    template: `
    <h3>hello sandbox 10</h3>
    <button (click)="changeValue()">Change value</button>
    <div *ngIf="value">
        <h4> {{text}} </h4>
    </div>
    `
})

export class Sandbox10Component{
    text:string = "Hello world";
    value:boolean = true;

    changeValue(){
        //this.value = false;
        this.value = !this.value;
    }
}