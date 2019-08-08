import Vue from 'vue'
import { oc } from '@/utils'
import * as filters from '@/filters'

Vue.prototype.$oc = oc
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
