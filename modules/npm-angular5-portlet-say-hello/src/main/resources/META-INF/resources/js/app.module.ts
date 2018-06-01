import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { RootComponent } from './app/root.component';

@NgModule({
	bootstrap: [],
	declarations: [AppComponent, RootComponent],
	entryComponents: [AppComponent, RootComponent],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		FormsModule,
		MatInputModule,
	],
	providers: [],
})
export class AppModule {
	ngDoBootstrap() {}
}
