import { Component } from '@angular/core';

@Component({
    selector: 'sandbox7',
    template: `
        <h3>Sandbox 7</h3>
        <h4 [class.special]="isSpecial">This is a binding</h4>
        <h4 [ngClass]="currentClasses">This is an ngClass binding</h4>
    `,
    styles: [
        `
            .special{color: blue;}
            .savable{text-transform: uppercase;}
        `
    ]
})

export class Sandbox7Component{
    isSpecial:boolean = true;
    canSave:boolean = true;
    currentClasses = {};

    constructor(){
        this.setCurrentClasses();
    }

    setCurrentClasses(){
        this.currentClasses = {
            savable: this.canSave, 
            special: this.isSpecial
        }
    }
}