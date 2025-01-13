import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BucketComponent } from './components/bucket/bucket.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { Grocery } from '../models/grocery.model';
import { Store } from '@ngrx/store';
import { groceryActionGroup } from './store/action/grocery.action';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BucketComponent,GroceryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  constructor(private store:Store<{grocery:Grocery[]}>){}
  ngOnInit(){
    this.store.dispatch(groceryActionGroup.loadyGrocery());
  }
}
