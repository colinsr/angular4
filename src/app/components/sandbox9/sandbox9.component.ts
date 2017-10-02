import { Component } from '@angular/core';

@Component({
    selector: 'sandbox9',
    template: `
    <h3>hello sandbox9</h3>
    <button id="btn" (click)="fireEvent($event,'colin')">fire</button>
    `
})

export class Sandbox9Component{

    fireEvent(e, name){
        console.log("hello, ", name);
        console.log(e.target.id);
    }
}