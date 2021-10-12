import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
export const COMPONENTS = [LoginComponent, WelcomeComponent];
const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
  {
        path: "login", component: LoginComponent
    },
    {
        path: "welcome", component: WelcomeComponent
    },
    {
        path: "tabs",
        loadChildren: () => import("~/app/tabs/tabs.module").then(m => m.TabsModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
