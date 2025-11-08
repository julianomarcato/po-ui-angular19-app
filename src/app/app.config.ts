import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { HttpClientModule,provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {  PoModule, PoHttpRequestModule, PoI18nConfig, PoI18nModule } from '@po-ui/ng-components';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core'; // <-- CoreLib


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      HttpClientModule,
      PoModule,
      ProtheusLibCoreModule,
      PoHttpRequestModule]),
    { provide: "Window", useValue: window },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi())
  ],

};