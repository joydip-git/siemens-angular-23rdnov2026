import { Component, effect, EffectCleanupRegisterFn, inject, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SERVICE_TOKEN } from '../config/constants';
import { Post } from '../models/post';

@Component({
  imports: [],
  selector: 'app-post-list',
  styleUrl: './post-list.css',
  templateUrl: './post-list.html',
})
export class PostList {

  private postSvc = inject(SERVICE_TOKEN)

  protected posts = signal<Post[]>([]);
  protected isRequestOver = signal(false)
  protected errorInfo = signal('')

  private fetchSub: Subscription | undefined;

  constructor() {
    console.log('PL created');
    
    effect(
      (cleanUpFn: EffectCleanupRegisterFn) => {

        console.log('side effect causing code being executed...');
        const obs: Observable<Post[]> = this.postSvc.getAll()
        this.fetchSub = obs.subscribe({
          next: (data: Post[]) => {
            //console.log(data);
            this.posts.set(data.slice(0, 10))
            //console.log(this.posts());
            this.isRequestOver.set(true)
            this.errorInfo.set('')

          },
          error: (err) => {
            //console.log(err);
            this.posts.set([])
            this.isRequestOver.set(true)
            this.errorInfo.set(err.message)
          },
          complete: () => { }
        })
        // console.log('this is after subscription but before getting data');
        cleanUpFn(
          () => {
            console.log('cleaning up');
            this.fetchSub?.unsubscribe()
          }
        )
      }
    )
  }
}
