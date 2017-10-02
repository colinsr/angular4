import { Component } from '@angular/core';

@Component({
    selector: 'sandbox9',
    template: `
    <h3>hello sandbox9</h3>
    <button id="btn" (click)="fireEvent($event.type)">click</button>
    <br><br>    
    <button id="btn" (mouseover)="fireEvent($event.type)">mouse over</button>
    <br><br>
    <button id="btn" (mousedown)="fireEvent($event.type)">mouse down</button>
    <br><br>
    <button id="btn" (mouseup)="fireEvent($event.type)">mouse up</button>
    <br><br>
    <button id="btn" (dblclick)="fireEvent($event.type)">double click</button>
    <br><br>
    <button id="btn" (drag)="fireEvent($event)">drag</button>
    <br><br>
    <button id="btn" (dragover)="fireEvent($event.type)">drag over</button>
    `
})

export class Sandbox9Component{

    fireEvent(eventType){
        console.log(eventType);
    }
}