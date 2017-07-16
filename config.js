import { fetch } from 'mk-utils'

function fetchList(pagination, filter) {
	var allData = []
	for (let i = 0; i < 200; i++) {
		allData.push({
			selected: false,
			code: 'code' + (i + 1),
			name: 'name' + (i + 1)
		})
	}

	var data = allData
	if (filter && filter.search)
		data = allData.filter(o => o.code.indexOf(filter.search) != -1 || o.name.indexOf(filter.search) != -1)

	var current = pagination.current
	var pageSize = pagination.pageSize
	var start = (current - 1) * pageSize
	var end = current * pageSize

	start = start > data.length - 1 ? 0 : start
	end = start > data.length - 1 ? pageSize : end
	current = start > data.length - 1 ? 1 : current

	var ret = { result: true, pagination: { current, pageSize, total: data.length }, list: [] }
	for (let j = start; j < end; j++) {
		if (data[j])
			ret.list.push(data[j])
	}

	return ret
}

var _options = {
	fetchList: (pagination, filter) => {
		return fetch.test('', '', fetchList(pagination, filter))
	}
}

function config(options) {
	if (options) {
		_options = { ..._options, ...options }
	}

}

config.getCurrent = () => _options

export default config