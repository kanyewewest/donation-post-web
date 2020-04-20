import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipDirective } from './directives/flip/flip.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StickyDirective } from './directives/sticky/sticky.directive';
import { TranslateDirective } from './directives/translate/translate.directive';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FlipDirective,
    StickyDirective,
    TranslateDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FlipDirective,
    StickyDirective,
    TranslateDirective
  ]
})
export class SharedModule { }
