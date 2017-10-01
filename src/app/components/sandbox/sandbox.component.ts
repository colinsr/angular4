import { Component } from '@angular/core'

@Component({
    selector: 'sandbox',
    templateUrl: `./sandbox.component.html`,
    styles: [`
        .special{
            color: green;
        }
    `]
})

export class SandboxComponent{
    name = 'Colin Deeee';
    age = 37;
    person = { firstname: 'Colin', lastname: 'Detwiller'}

    constructor(){
        console.log("Counstructor running...")
        this.hasBirthday();
        this.hasBirthday();
        //this.age = 21;
        //this.name = "colin";
    }

    hasBirthday(){
        this.age += 1;
    }

    showAge(){
        return this.age;
    }
}