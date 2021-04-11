import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DmglSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [DmglSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class DmglHomeModule {}
