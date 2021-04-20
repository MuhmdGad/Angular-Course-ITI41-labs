import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-employeedetails",
  templateUrl: "./employeedetails.component.html",
  styleUrls: ["./employeedetails.component.css"],
})
export class EmployeedetailsComponent implements OnInit {
  id:number;
  fname:string;
  lname:string;
  age:number;

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params.id;
    // this.age = route.snapshot.params.age;
    // this.fname = route.snapshot.params.fname;
    // this.lname = route.snapshot.params.lname;
  }

  ngOnInit(): void {}
}
