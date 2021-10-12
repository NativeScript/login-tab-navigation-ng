import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptRouterModule, NSEmptyOutletComponent } from "@nativescript/angular";
import { NativeScriptMaterialBottomNavigationModule } from '@nativescript-community/ui-material-bottom-navigation/angular';

import { TabsComponent } from "./tabs.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptMaterialBottomNavigationModule,
        NativeScriptRouterModule.forChild([
            {
                path: "default", component: TabsComponent, children: [
                    {
                        path: "players",
                        outlet: "playerTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/player/players.module").then(m => m.PlayersModule),
                    },
                    {
                        path: "teams",
                        outlet: "teamTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/team/teams.module").then(m => m.TeamsModule),
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