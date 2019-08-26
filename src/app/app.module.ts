import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './services/auth.service';
import {PagesModule} from './pages/pages.module';
import {AuthenticationModule} from './authentication/authentication.module';
import {AuthGuardService} from './services/auth-guard.service';
import {PatientService} from './services/patient.service';
import {Utilitaire} from './utils/utilitaire';
import {RendezVousService} from './services/rendez-vous.service';
import {HasAuthorityDirective} from './services/has-authority.directive';

@NgModule({
    declarations: [AppComponent, HasAuthorityDirective],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        PagesModule,
        AuthenticationModule,
    ],
    providers: [
        AuthService,
        AuthGuardService,
        PatientService,
        Utilitaire,
        RendezVousService,
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    ],
    exports: [
        HasAuthorityDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
