import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipDirective } from './directives/flip/flip.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StickyDirective } from './directives/sticky/sticky.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FlipDirective,
    StickyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FlipDirective,
    StickyDirective
  ]
})
export class SharedModule { }
