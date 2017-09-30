import {Component} from '@angular/core'

@Component ({
    selector: 'sandbox2',
    template: `<h1>Hello {{ name }}</h1>`
})

export class Sandbox2Component{
    name:string = 'John Doe'
    age:number = 37
    hasChildren:boolean = true
    city:any = "Cleveland"

    myArray:number[] = [1,2,3,4]
    myAny:any[] = [1,true,'false']

    myTuple:[string,number] = ['Colin',5]

    unusable:void = undefined

    undef:undefined = undefined

    nu:null = null

    constructor(){
        //this.name = 14;
        this.city = true;
    }
}