import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../components/Home/Home.component";
import { IndexComponent } from "../components/Index/Index.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent  },
    { path: 'index', component: IndexComponent }
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}


