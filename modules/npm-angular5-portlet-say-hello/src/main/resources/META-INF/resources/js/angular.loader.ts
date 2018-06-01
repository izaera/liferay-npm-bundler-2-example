import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { AppLoader } from './app.loader';
import { AppModule } from './app.module';

export default function(namespace: string) {
	platformBrowserDynamic()
		.bootstrapModule(AppModule)
		.then((injector: any) => {
			new AppLoader(injector).loadComponent(AppComponent, namespace);
		});
}
