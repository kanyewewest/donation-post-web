import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateDirective } from './directives/translate.directive';
import { RouterModule } from '@angular/router';
import { ArrJoinPipe } from './pipes/arr-join.pipe';
import { ArrMapPipe } from './pipes/arr-map.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TranslateDirective,
    ArrJoinPipe,
    ArrMapPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TranslateDirective,
    ArrJoinPipe,
    ArrMapPipe
  ]
})
export class SharedModule { }
