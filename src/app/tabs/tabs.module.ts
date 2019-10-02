import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TabsComponent } from "./tabs.component";
import { ProfileComponent } from "./profile.component";

const routes = [
    {
        path: "default", component: TabsComponent, children: [
            {
                path: "players",
                outlet: "playerTab",
                component: NSEmptyOutletComponent,
                loadChildren: () => import('../player/players.module').then(m => m.PlayersModule)
            },
            {
                path: "teams",
                outlet: "teamTab",
                component: NSEmptyOutletComponent,
                loadChildren: () => import('../team/teams.module').then(m => m.TeamsModule)
            }
        ]
    },
    { path: 'profile', component: ProfileComponent }
]

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        TabsComponent,
        ProfileComponent
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule { }