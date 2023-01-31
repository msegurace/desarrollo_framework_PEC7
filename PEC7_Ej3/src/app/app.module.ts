import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WineitemComponent } from './wine/wine-item/wine-item.component';
import { WinelistComponent } from './wine/wine-list/wine-list.component';
import { WineNewComponent } from './wine/wine-new/wine-new.component';
import { WineServiceService } from './service/wine-service.service';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './service/user.service';
import { UserStoreService } from './service/user-store.service';
import { LoginAppInterceptor } from './service/login-app.interceptor';
import { WineDetailsComponent } from './wine/wine-details/wine-details.component';
import { AuthGuard } from './guards/auth.guard';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ImageNotNullPipe } from './Pipes/imageNotNullPipe';
import { AppRoutesModule } from './app-routes.module';
import { WineLoadResolverService } from './guards/wine-load-resolver.service';
import { CreateWineDeactivateGuard } from './guards/create-wine-deactivate.guard';


registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
    AuthGuard,
    WineLoadResolverService,
    CreateWineDeactivateGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginAppInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
