import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    selector: "profile-page",
    templateUrl: "./profile.component.html"
})
export class ProfileComponent {
    constructor(
        private routerExtension: RouterExtensions) {
    }

    navToWelcome() {
        this.routerExtension.navigate(["welcome"]);
    }
}
