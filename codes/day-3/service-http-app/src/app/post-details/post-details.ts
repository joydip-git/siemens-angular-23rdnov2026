import { Component, effect, EffectCleanupRegisterFn, inject, input, signal } from '@angular/core';
import { SERVICE_TOKEN } from '../config/constants';
import { count, Observable, Subscribable, Subscription } from 'rxjs';
import { Post } from '../models/post';

@Component({
  imports: [],
  selector: 'app-post-details',
  styleUrl: './post-details.css',
  templateUrl: './post-details.html',
})
export class PostDetails {
  postId = input(0)
  private postSvc = inject(SERVICE_TOKEN)

  protected post = signal<Post | null>(null)
  protected errorInfo = signal('')
  protected isRequestOver = signal(false)

  
  constructor() {
    console.log('PD created....');
    effect(
      (cleanUpFn: EffectCleanupRegisterFn) => {      
        console.log('PD effect...');
        const obs: Observable<Post | null> = this.postSvc.get(this.postId())
        const sub: Subscription = obs.subscribe(
          {
            next: (data: Post | null) => {
              if (data !== null) {
                this.post.set(data)
                this.errorInfo.set('')
                this.isRequestOver.set(true)
              } else {
                this.post.set(null)
                this.errorInfo.set('no data')
                this.isRequestOver.set(true)
              }
            },
            error: (err) => {
              this.post.set(null)
              this.errorInfo.set(err.message)
              this.isRequestOver.set(true)
            }
          }
        )

        cleanUpFn(
          () => {
            console.log('cleaning up...');
            sub.unsubscribe()
          }
        )
      }
    )
  }
}
