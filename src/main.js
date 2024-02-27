import './assets/main.css'
import { createStore } from './store'

import { createApp } from 'vue'
import App from './App.vue'


// create a const to run the createStore function
const store = createStore();

// create a const tp create the App
const app = createApp(App);
// add the store to the the App
app.use(store);
// mount the app
app.mount('#app');