import { NgModule } from "@angular/core";
import { HomeComponent } from './Home/Home.component';
import { IndexComponent } from './Index/Index.component';

@NgModule({
    declarations:[HomeComponent,IndexComponent],
    exports:[HomeComponent,IndexComponent]
})


export class ComponentsModule {}