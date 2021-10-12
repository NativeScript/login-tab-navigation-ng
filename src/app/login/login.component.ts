import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
@Component({
    selector: "login-page",
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    constructor(private routerExtension: RouterExtensions) { };

    onNavigateWelcome() {
        // Navigate to welcome page with clearHistory
        this.routerExtension.navigate(["../welcome"], { clearHistory: true });
    }
}
