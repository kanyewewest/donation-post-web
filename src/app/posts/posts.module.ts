import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostDescriptionComponent } from './post-description/post-description.component';
import { PostViewerComponent } from './post-viewer/post-viewer.component';



@NgModule({
  declarations: [
    PostsComponent,
    PostListComponent,
    PostDetailComponent,
    PostDescriptionComponent,
    PostViewerComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
