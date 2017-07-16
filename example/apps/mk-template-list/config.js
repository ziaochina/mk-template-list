import { fetch } from 'mk-utils'

var data = []

for (let i = 0; i < 200; i++) {
	data.push({
		selected: false,
		code: 'code' + (i + 1),
		name: 'name' + (i + 1)
	})
}

var _options = {
	fetchList: (current, pageSize, filter) => {
		let list = []

		for (let j = (current - 1) * pageSize; j < current * pageSize; j++) {
			if (data[j])
				list.push(data[j])
		}

		return fetch.test('', '', {
			result: true,
			list: list,
			pagination: { pageSize: pageSize, current: current, total: data.length }
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