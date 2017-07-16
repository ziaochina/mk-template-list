import { fetch } from 'mk-utils'

var _options = {
	fetchList: (current, pageSize, filter) => {
		return fetch.test('', '', {
			result: true,
			list: [...Array(pageSize)].map((k, i) => { return { select: false, code: (current - 1) * pageSize + i + 1 } }),
			pagination: { pageSize: pageSize, current: current, total: 100 }
		})
	}
}

function config(options) {
	if (options) {
		_options = { ..._options, ...options }
	}

}

config.getCurrent = () => _options

export default config