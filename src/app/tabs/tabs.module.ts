import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TabsComponent } from "./tabs.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            {
                path: "default", component: TabsComponent, children: [
                    {
                        path: "players",
                        outlet: "playerTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/player/players.module#PlayersModule",
                    },
                    {
                        path: "teams",
                        outlet: "teamTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/team/teams.module#TeamsModule"
                    }
                ]
            }
        ])
    ],
    declarations: [
        TabsComponent
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule { }