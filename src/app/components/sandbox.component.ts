import { Component } from '@angular/core'

@Component({
    selector: 'sandbox',
    template: `<h1>Name is {{ name }} and is {{ age }} years old.</h1>
              <h2>My name is {{ person.firstname }} {{ person.lastname }}.
              <ul>
                <li> {{ 'hello colin' }} </li>
                <li> {{ showAge() }} </li>
                <li> {{ 1+1 }} </li>
              </ul>`
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