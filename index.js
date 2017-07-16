import config from './config'
import * as api from './api'

export default {
	name: "mk-template-list",
	version: "1.0.0",
	description: "mk-template-list",
	meta: api.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "mk-template-list")
	}
}