import { NgModule } from '@angular/core';
import { TestLibComponent } from './test-lib.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';



@NgModule({
  declarations: [TestLibComponent, SampleComponentComponent],
  imports: [
  ],
  exports: [TestLibComponent, SampleComponentComponent]
})
export class TestLibModule { }
