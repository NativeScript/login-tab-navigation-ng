import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { DataService, DataItem } from "../data.service";

@Component({
    selector: "ns-players",
    templateUrl: "./players.component.html",
})
export class PlayerComponent implements OnInit {
    items: DataItem[];

    constructor(private itemService: DataService) { }

    ngOnInit(): void {
        this.items = this.itemService.getPlayers();
    }
}