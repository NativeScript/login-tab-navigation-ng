
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { TeamsComponent } from "./teams.component";
import { TeamDetailComponent } from "./team-detail.component";
import { NativeScriptCommonModule, NativeScriptRouterModule } from "@nativescript/angular";

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
