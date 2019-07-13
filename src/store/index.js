import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos'


//Load Vuex
Vue.use('vuex');

//Create store


export default new Vuex.Store({
    modules:{
        todos
    }
});

