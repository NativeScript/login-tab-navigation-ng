import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    moduleId: module.id,
    selector: "login-page",
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    constructor(private routerExtension: RouterExtensions) { };

    onNavigateWelcome() {
        // Navigate to welcomew page with clearHistory
        this.routerExtension.navigate(["../welcome"], { clearHistory: true });
    }
}
