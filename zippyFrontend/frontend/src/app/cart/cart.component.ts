import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent  implements OnInit{
  selectedFoodItem: { name: string, price: number } = { name: '', price: 0 };
constructor(private a_route:ActivatedRoute){}
ngOnInit(): void {
  this.a_route.params.subscribe((data)=>{
    this.selectedFoodItem={name:data['name'],price:data['price']};
  })
  console.log(this.selectedFoodItem);
}

  
  


}
