import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogTemplateComponent } from './dialog-template/dialog-template.component';

@NgModule({
  imports: [MatDialogModule],
  declarations: [DialogTemplateComponent],
})
export class SharedComponentsModule {}
