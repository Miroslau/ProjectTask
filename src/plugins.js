import Vue from 'vue'
import root from './root.json'

const globalRoot = root;

globalRoot.install = function() {
    Object.defineProperty(Vue.prototype, '$myRoot', {
        get() { return globalRoot }
    })
};

Vue.use(globalRoot)

export default globalRoot;