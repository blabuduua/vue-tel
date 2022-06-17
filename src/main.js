import Vue from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib';

Vue.config.productionTip = false;
Vue.use(VueTelInputVuetify, { vuetify });

new Vue({
	render: (h) => h(App),
	vuetify,
}).$mount('#app');
