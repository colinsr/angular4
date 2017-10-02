import { Component } from '@angular/core';

@Component({
    selector: 'sandbox11',
    template: `
    <h3>hello sandbox 11</h3>
    <div>
        <input type="text" (keyup)="fireEvent($event)" placeholder="keyup">
    </div>
    <div>
        <input type="text" (keydown)="fireEvent($event)" placeholder="keydown">
    </div>
    <div>
        <input type="text" (focus)="fireEvent($event)" placeholder="focus">
    </div>
    <div>
        <input type="text" (blur)="fireEvent($event)" placeholder="blur">
    </div>
    <div>
        <input type="text" (cut)="fireEvent($event)" placeholder="cut">
    </div>
    <div>
        <input type="text" (copy)="fireEvent($event)" placeholder="copy">
    </div>
    <div>
        <input type="text" (paste)="fireEvent($event)" placeholder="paste">
    </div>
    `
})

export class Sandbox11Component{
    fireEvent(e){
        console.log(e.type)
    }
    
}