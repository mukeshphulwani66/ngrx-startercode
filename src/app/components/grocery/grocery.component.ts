import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { decrementAction, incrementAction } from '../../store/action/bucket.action';
import { grocerySelector, SelectGroceryByType } from '../../store/selector/grocery.selector';



@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {

  groceries$?:Observable<Grocery[]>;

constructor(private store:Store<{grocery:Grocery[]}>){
 this.groceries$ = this.store.select(grocerySelector);
 
}

  onTypeChange(event: any){
     let type = event.target.value;
     this.groceries$ = this.store.select(SelectGroceryByType(type));
  }


  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }

    this.store.dispatch(incrementAction({payload:payload}));


  }
  decrement(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name
    }
    this.store.dispatch(decrementAction({payload:payload}));


  }

}
