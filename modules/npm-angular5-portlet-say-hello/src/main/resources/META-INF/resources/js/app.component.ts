import {
	AfterViewInit,
	Component,
	ComponentFactoryResolver,
	ElementRef,
	QueryList,
	ViewChildren,
	ViewContainerRef,
} from '@angular/core';

import { RootComponent } from './app/root.component';

@Component({
	selector: 'app-component',
	template: `
		<root-component></root-component>
	`,
})
export class AppComponent {}
