import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  constructor(private foodservice:FoodService,private router:Router){}
  public foodArray:any[]=[];
  public errormessage:string='';
  ngOnInit():void{
    this.getfood();


  }
  getfood(){
    this.foodservice.getfood().subscribe((response)=>{
      this.foodArray=response;

    },(error)=>{
      this.errormessage="Food error"
    })
  }
  showcusine(food:any){
    this.router.navigate(['/cuzines',food])
  
  }

}
