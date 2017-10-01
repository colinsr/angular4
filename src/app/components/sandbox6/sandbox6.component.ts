import {Component} from '@angular/core';

@Component({
    selector: 'sandbox6',
    template: ` <h3>Hello sandbox6<h3>
                <!-- 3 ways to bind props -->
                <div><img src="{{ imageUrl }}"></div>
                <div><img [src]=imageUrl></div>
                <div><img bind-src="imageUrl"></div>
                
                <h4>Image Location: 
                    <span [textContent]="imageUrl"></span>
                </h4>
                
                <h4>
                    Create Post
                </h4>
                <p [hidden]="!isChanged">
                Post has been changed, please save.
                </p>
                <button [disabled]="!isChanged">Save</button>`
})

export class Sandbox6Component{
    imageUrl = 'http://lorempixel.com/400/200';
    isChanged:boolean = false;

    constructor(){
        this.isChanged = true;
    }
}