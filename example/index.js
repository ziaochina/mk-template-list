import { config, start, componentFactory } from 'mk-meta-engine'
import myConfig  from './config'

import mk_template_list from './apps/mk-template-list/index.js'

const apps = {
	[mk_template_list.name]:mk_template_list,	
}


config(myConfig({apps}))


import * as mkComponents from 'mk-component'

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	

start()