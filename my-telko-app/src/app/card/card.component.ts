import { Component ,Input, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  items = [
    { name: 'Item 1', description: 'Short description of item 1', price: 500, deliveryDate: new Date('2024-09-25'), customerReview: 4.5 },
    { name: 'Item 2', description: 'Short description of item 2', price: 1500, deliveryDate: new Date('2024-09-28'), customerReview: 3.9 },
    { name: 'Item 3', description: 'Short description of item 3', price: 2500, deliveryDate: new Date('2024-10-01'), customerReview: 4.8 }
  ];

  // Grand total of all items
  grandTotal: number = 0;

  // Method to calculate the grand total of all items
  calculateGrandTotal() {
    this.grandTotal = this.items.reduce((acc, item) => acc + item.price, 0);
  }

  // Calculate grand total on initialization
  ngOnInit() {
    this.calculateGrandTotal();
  }

// Input data for each item in the card
@Input() item: any;

// Subtotal price
subtotal: number = 0;

// Method to calculate subtotal (can be updated with more complex logic if needed)
calculateSubtotal() {
  // Assuming `item.price` is the price of the current item
  this.subtotal = this.item.price;
}

// Trigger calculation after item data is set
ngOnChanges() {
  this.calculateSubtotal();
}

}
