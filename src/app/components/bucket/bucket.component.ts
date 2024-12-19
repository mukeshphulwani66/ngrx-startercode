import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Bucket } from '../../../models/bucket.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-bucket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.css'
})
export class BucketComponent {

   myBucket$?:Observable<Bucket[]>; 
  private readonly store = inject(Store) as Store<{ myBucket: Bucket[] }>;

  constructor(){
    this.myBucket$ = this.store.select('myBucket')
  }
   

}
