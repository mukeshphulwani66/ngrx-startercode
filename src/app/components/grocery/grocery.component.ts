import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToBucket, removeFromBucket } from '../../store/actions/bucket.action';
import { selectGroceries, selectGroceryByType } from '../../store/selectors/grocery.selectors';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {

  groceries$?: Observable<Grocery[]>;
  filteredGroceries$?: Observable<Grocery[]>;

  private readonly store = inject(Store) as Store<{ groceries: Grocery[] }>;

  constructor() {
    this.groceries$ = this.store.select(selectGroceries);
  }

  onTypeChange(event: Event) {
    const selectedType = (event.target as HTMLSelectElement).value;
    if(selectedType){
      this.filteredGroceries$ = this.store.select(selectGroceryByType(selectedType))
    }
    else{
      this.filteredGroceries$ = undefined;
    }
  }


  increment(item: Grocery) {
    const { id, name } = item;
    const payload = { id, name, quantity: 1 };
    this.store.dispatch(addToBucket({ payload }))
  }

  decrement(item: Grocery) {
    const payload = { id: item.id};
    this.store.dispatch(removeFromBucket({ payload }))

  }

}
