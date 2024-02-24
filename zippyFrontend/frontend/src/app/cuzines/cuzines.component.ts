import { Component,OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuzines',
  templateUrl: './cuzines.component.html',
  styleUrl: './cuzines.component.css'
})
export class CuzinesComponent implements OnInit{
  constructor(private _aroute:ActivatedRoute,private foodservice:FoodService,private cartService:CartService,private router:Router){}
  public selectedfood:any[]=[];
  public errormessage:string='';
  public display:any[]=[];

  
 


  displaydifferentcard(selectedfood:any):void{
    if(selectedfood=='NorthIndian'){
      this.foodservice.getnorthfood().subscribe((data)=>{
        this.display=data;

      },(error)=>{
        this.errormessage='no food found';
      })

    } else if(selectedfood=='SouthIndian'){
      this.foodservice.getsouthfood().subscribe((data)=>{
        this.display=data;

      },(error)=>{
        this.errormessage='no food found';
      })

    } else if(selectedfood=='EastIndian'){
      this.foodservice.geteastfood().subscribe((data)=>{
        this.display=data;

      },(error)=>{
        this.errormessage='no food found';
      })

    }else{
      this.foodservice.getwestfood().subscribe((data)=>{
        this.display=data;

      },(error)=>{
        this.errormessage='no food found';
      })
      
    }

    

  }
  navigateToCart(foodItem: any): void {
    // Assuming the cart route is defined as 'cart'
    this.router.navigate(['/cart', {name:foodItem.Name,price:foodItem.price}]); // Navigate to the cart page with the selected food item's ID
  }
  

  ngOnInit(): void { 
    this._aroute.params.subscribe((data)=>{
      this.selectedfood=data['food'];
      this.displaydifferentcard(this.selectedfood);
      
    })
    
  }
  
  




}
