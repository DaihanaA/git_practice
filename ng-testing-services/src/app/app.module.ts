import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { PicoPreviewComponent } from './components/pico-preview/pico-preview.component';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({ declarations: [
        AppComponent,
        ProductsComponent,
        PicoPreviewComponent
    ],
    bootstrap: [AppComponent],
     imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule],
        providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
