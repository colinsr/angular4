import { Component } from '@angular/core';

@Component({
    selector: 'sandbox7',
    template: `
        <h3>Sandbox 7</h3>
        <h4 [class.special]="isSpecial">This is a binding</h4>
        <h4 [ngClass]="currentClasses">This is an ngClass binding</h4>
        <br><p>this is sort of sandbox 8 but i'm getting sick of creating new sandboxes</p>
        <div [style.font-size]="isSpecial ? 'x-large' : 'smaller'">Font size</div>
        <div [ngStyle]="currentStyles">This is the special ngStyles</div>
    `,
    styles: [
        `
            .special{color: blue;}
            .savable{text-transform: uppercase;}
        `
    ]
})

export class Sandbox7Component{
    isSpecial:boolean = false;
    canSave:boolean = false;
    currentClasses = {};

    currentStyles = {};
    setCurrentStyles(){
        this.currentStyles = {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-size': this.isSpecial ? '30px' : '8px'
        }
    }

    constructor(){
        this.setCurrentClasses();
        this.setCurrentStyles();
    }

    setCurrentClasses(){
        this.currentClasses = {
            savable: this.canSave, 
            special: this.isSpecial
        }
    }
}