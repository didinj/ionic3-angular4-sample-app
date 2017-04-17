import { NgModule } from '@angular/core';
import { ContactPage} from './contact';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [ContactPage],
  imports: [IonicPageModule.forChild(ContactPage)],
  entryComponents: [ContactPage]
})
export class ContactPageModule { }
