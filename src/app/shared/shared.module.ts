import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, LoginComponent],
  imports: [CommonModule, TranslateModule],
  exports: [TranslateModule, WebviewDirective]
})
export class SharedModule {}
