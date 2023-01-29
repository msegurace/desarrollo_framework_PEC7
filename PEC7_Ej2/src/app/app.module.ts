import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WineitemComponent } from './wineitem/wineitem.component';
import { WinelistComponent } from './winelist/winelist.component';
import { WineNewComponent } from './wine-new/wine-new.component';
import { WineServiceService } from './wine-service.service';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './service/user.service';
import { UserStoreService } from './service/user-store.service';
import { LoginAppInterceptor } from './service/login-app.interceptor';
import { WineDetailsComponent } from './wine-details/wine-details.component';
import { AuthGuard } from './guards/auth.guard';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ImageNotNullPipe } from './imageNotNullPipe';
import { AppRoutesModule } from './app-routes.module';
import { WineLoadResolverService } from './service/wine-load-resolver.service';


registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    WineitemComponent,
    WinelistComponent,
    WineNewComponent,
    ImageNotNullPipe,
    WineDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [
    WineServiceService,
    {
      provide: LOCALE_ID,
        useValue: 'es' 
    },
    UserService,
    UserStoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginAppInterceptor,
      multi: true,
    },
    AuthGuard,
    WineLoadResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
