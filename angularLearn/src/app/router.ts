import { ConnectComponent } from './watch/connect/connect.component';
import { BackComponent } from './watch/back/back.component';
import { WatchComponent } from './watch/watch.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes=[
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {
        path:'watch',component:WatchComponent,
        children:[
            {path:'back',component:BackComponent},
            {path:':connect',component:ConnectComponent},
        ]
    },
    {path:'**',component:HomeComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{


}