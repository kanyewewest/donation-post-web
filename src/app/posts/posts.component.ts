import { Component, OnInit } from '@angular/core';

//fix for @types/animejs being outdated
//see https://github.com/juliangarnier/anime/issues/527
import anime from 'animejs/lib/anime.es';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    isSidebarActive: boolean = true;
    constructor() { }

    ngOnInit() {
    }

    // toggleSidebar() {
    //     anime({
    //         targets: '.wrapper>.sidebar',
    //         easing: 'linear',
    //         flexBasis: this.isSidebarActive ? '0' : '400px'
    //     });
    //     this.isSidebarActive = !this.isSidebarActive;
    //     console.log('Sidebar toggle!', this.isSidebarActive);
    // }
}
