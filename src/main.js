import Vue from 'vue';
import App from './App.vue';
import {
  library
} from '@fortawesome/fontawesome-svg-core';
import {
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

import SideBar from './components/SideBar.vue';
import SdtdMap from './components/SdtdMap.vue';
import ServerSettings from './components/ServerSettings.vue';
import ClaimsModal from './components/ClaimsModal.vue';
import ClaimCreator from './components/ClaimCreator.vue';

require('../node_modules/leaflet/dist/leaflet.css');

window.claimTypes = [
  "hostilefree",
  "notify",
  "command",
  "leveled",
  "reversed",
  "normal",
  "timed",
  "portal",
  "openhours",
  "playerlevel",
  "lcbfree"
];

library.add(faExternalLinkAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('sidebar', SideBar);
Vue.component('sdtd-map', SdtdMap);
Vue.component('server-settings', ServerSettings)
Vue.component('claims', ClaimsModal);
Vue.component('claim-creator', ClaimCreator);

Vue.use(BootstrapVue)

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')