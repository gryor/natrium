import wilu from 'wilu';
import * as pkg from './package.json';

(async function () {
	try {
		pkg.build.name = pkg.name;
		pkg.build.version = pkg.version;
		await wilu(pkg.build);
	} catch(e) {
		throw e;
	}
})();
