import { Component } from '@angular/core';

@Component({
    selector: 'sandbox9',
    template: `
    <h3>hello sandbox9</h3>
    <button (click)="fireEvent('colin')">fire</button>
    `
})

export class Sandbox9Component{

    fireEvent(name){
        console.log("hello, ", name);
    }
}