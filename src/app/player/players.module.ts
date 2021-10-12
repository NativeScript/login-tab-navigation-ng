
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { PlayerComponent } from "./players.component";
import { PlayerDetailComponent } from "./player-detail.component";
import { NativeScriptCommonModule, NativeScriptRouterModule } from "@nativescript/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "players" },
            { path: "players", component: PlayerComponent },
            { path: "player/:id", component: PlayerDetailComponent},
        ])
    ],
    declarations: [
        PlayerComponent,
        PlayerDetailComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PlayersModule { }
