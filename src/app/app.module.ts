import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";

// Routing Module
import { AppRoutingModule } from "./app-routing.module";

// Main Component
import { AppComponent } from "./app.component";

// Ng Zorro
import { IconsProviderModule } from "./icons-provider.module";
import { NgZorroAntdModule, NZ_I18N, en_GB } from "ng-zorro-antd";
import en from "@angular/common/locales/en";

// Angular Fire
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

// Env
import { environment } from "../environments/environment";
import { GlobalModule } from "./global/global.module";
import { AuthenticateComponent } from "./global/components/authenticate/authenticate.component";

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, AuthenticateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, "drumsdotro"),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    GlobalModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_GB }],
  entryComponents: [AuthenticateComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
