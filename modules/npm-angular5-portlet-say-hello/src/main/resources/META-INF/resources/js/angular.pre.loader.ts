// Bootstrap shims and providers
import 'npm-angular5-provider';

// Launch application
declare var Liferay: any;

export default function(namespace: string) {
	Liferay.Loader.require(
		'npm-angular5-portlet-say-hello@1.0.0/js/angular.loader',
		(main: any) => {
			main.default(namespace);
		},
	);
}
