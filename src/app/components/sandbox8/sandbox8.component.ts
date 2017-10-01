import { Component } from '@angular/core';

@Component({
    selector: 'sandbox8',
    template: `
        <h3>Here is sandbox 8</h3>
        <p>My birthday is {{ birthday | date }}</p>
        <p>My formatted birthday is {{ birthday | date:"MM-dd-yy" }}</p>
        <p>My birthyear is {{ birthday | date:"yyyy" }}</p>
        <p>I love {{ 'pizza' | uppercase }}</p>
        <p>I hate {{ 'CLOUDS' | lowercase | uppercase }}</p>
        <p>Currency {{ 500 | currency:"USD":"1" }}</p>
        <p>Percent {{ '.75' | percent }}</p>
    `
})

export class Sandbox8Component{
    birthday = new Date(1980,1,30);
}