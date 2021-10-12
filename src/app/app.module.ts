import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule, COMPONENTS } from './app-routing.module'
import { AppComponent } from './app.component'

import { DataService } from "./data.service";

export class MyErrorHandler implements ErrorHandler {
    handleError(error) {
        console.log("### ErrorHandler Error: " + error.toString());
        console.log("### ErrorHandler Stack: " + error.stack);
    }
}
@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent,
  		...COMPONENTS],
    providers: [
        DataService,
        { provide: ErrorHandler, useClass: MyErrorHandler },
    ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
