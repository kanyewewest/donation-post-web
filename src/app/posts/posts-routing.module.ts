import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

//posts/routes
const routes: Routes = [{
    path: '',
    component: PostsComponent,
    children: [
        {
            path: '',
            component: PostListComponent
        },
        {
            path: 'edit/:id',
            component: PostDetailComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule { }