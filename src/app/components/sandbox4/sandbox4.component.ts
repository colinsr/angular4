import { Component } from '@angular/core';

@Component ({
    selector: 'sandbox4',
    template: `
        <h1>Hello sandbox4</h1>
        {{people}}
        <br>
        <ul>
            <li *ngFor="let p of people">{{p}}</li>
        </ul>
        <ul>
            <li *ngFor="let p of people; let i = index">{{p}} {{i}}</li>
        </ul>
        <br>
        <ul>
            <li *ngFor="let p of people2; let i = index">{{p.firstName}} {{p.lastName}}</li>
        </ul>`
})

export class Sandbox4Component {
    constructor(){
        this.people2.push({firstName:'Bob',lastName:'Marley'});
    }
    
    people:string[] = ['Colin','Jr','Lily','Sean','Noelle'];

    people2:object[] = [
        {firstName:'Colin',lastName:'Detwiller'},
        {firstName:'Jr',lastName:'Detwiller'},
        {firstName:'Lily',lastName:'Detwiller'},
        {firstName:'Sean',lastName:'Detwiller'},
        {firstName:'Noelle',lastName:'Detwiller'},
    ];
}