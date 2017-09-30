import { Component } from '@angular/core'
import { ICustomer } from '../interfaces/ICustomer'

@Component({
    selector: 'sandbox3',
    template: `<h1>Hello sandbox3</h1>`
})

export class Sandbox3Component {
    customer: ICustomer

    constructor(){
        this.customer = {
            id:1,
            name: 'Colin Detwiller',
            email:'colinsr@me.com'
        };
    }
}