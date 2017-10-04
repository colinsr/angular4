import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'dataservicesandbox',
  templateUrl: './dataservicesandbox.component.html',
  styleUrls: ['./dataservicesandbox.component.css']
})
export class DataservicesandboxComponent implements OnInit {
  users:string[];
  data:any[] = [];
  fakeUsers:any[];

  constructor(public dataService:DataService) {
    console.log(this.dataService.getUsers());
    this.users = this.dataService.getUsers();
    this.dataService.getFakeUsers().subscribe(u => {
      console.log(u);
      this.fakeUsers = u;
    });

    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.data.push(data);
    });
  }

  ngOnInit() {
  }

}
