
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { TeamsComponent } from "./teams.component";
import { TeamDetailComponent } from "./team-detail.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "teams" },
            { path: "teams", component: TeamsComponent },
            { path: "team/:id", component: TeamDetailComponent },
        ])
    ],
    declarations: [
        TeamsComponent,
        TeamDetailComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TeamsModule { }
