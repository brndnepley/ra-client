import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendPageComponent } from './pages/send-page/send-page.component';

const sendRoutes: Routes = [
  { path: '', component: SendPageComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(sendRoutes)]
})
export class SendRoutingModule { }
