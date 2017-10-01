import {Component} from '@angular/core';

@Component ({
    selector: 'sandbox5',
    template: `<h2>Hello 
                 <span *ngIf="showName">{{name}}</span>
                 <span *ngIf="!showName">World</span>

                 <span *ngIf="showName; else noName">{{name}}</span>
                 <ng-template #noName>NoName</ng-template>

                 <p>Hello {{ showName ? name : 'Ternary' }}</p>

                 <hr>

                 <div [ngSwitch]="greeting">
                    <div *ngSwitchCase="'1'">Hello ngSwitch</div>
                    <div *ngSwitchCase="'2'">Hello 2</div>
                    <div *ngSwitchCase="'3'">Hello 3</div>
                    <div *ngSwitchDefault>Hello Default</div>
                 </div>
               </h2>`
})

export class Sandbox5Component {
    name:string = "Colin Doe";
    showName:boolean = true;
    greeting:number = 7;

    constructor(){
        this.showName = false;
    }
}