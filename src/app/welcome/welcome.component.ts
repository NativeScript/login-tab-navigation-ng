import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    selector: "welcome-page",
    templateUrl: "./welcome.component.html"
})
export class WelcomeComponent {
    constructor(private routerExtension: RouterExtensions) { };

    onLogout() {
        // Navigate to login page with clearHistory
        this.routerExtension.navigate(["../login"], { clearHistory: true });
    }
}
