import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { DataService, DataItem } from "../data.service";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "ns-players",
    moduleId: module.id,
    templateUrl: "./players.component.html",
})
export class PlayerComponent implements OnInit {
    items: DataItem[];

    constructor(private itemService: DataService, private _router: RouterExtensions) { }

    ngOnInit(): void {
        this.items = this.itemService.getPlayers();
    }

    navToWelcome() {
        this._router.navigate(["welcome"]);
    }

    navToProfile() {
        this._router.navigate(["profile"]);
    }
}