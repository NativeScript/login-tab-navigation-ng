import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { DataService, DataItem } from "../data.service";
import { Subscription } from "rxjs";

@Component({
    selector: "ns-player-details",
    templateUrl: "./player-detail.component.html",
})
export class PlayerDetailComponent implements OnInit {
    item: DataItem;
    subscription: Subscription;

    constructor(
        private data: DataService,
        private route: ActivatedRoute,
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.subscription = this.route.params.subscribe(params => {
            const id = +params["id"];
            this.item = this.data.getPlayer(id);
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    back() {
        this.routerExtension.back();
    }

    backByOutlet() {
        this.routerExtension.back({ outlets: ["primary"] });
    }

    backByParentRoute() {
        this.routerExtension.back({ relativeTo: this.activeRoute.parent });
    }

    backByActivatedRoute() {
        this.routerExtension.back({ relativeTo: this.activeRoute });
    }
}
