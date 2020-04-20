import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostDescriptionComponent } from './post-description/post-description.component';
import { PostViewerComponent } from './post-viewer/post-viewer.component';
import { LocationComponent } from './location/location.component';
import { SharedModule } from '../shared/shared.module';
import { PostItemComponent } from './post-item/post-item.component';


@NgModule({
  declarations: [
    PostsComponent,
    LocationComponent,
    PostListComponent,
    PostDetailComponent,
    PostDescriptionComponent,
    PostViewerComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
