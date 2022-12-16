import {createStore} from 'vuex';
import router from "@/router";

export default createStore({
    state: {
        forms: [],
    },
    getters: {
        getForms(state) {
            return state.forms;
        },
    },
    mutations: {
        setForm(state, newForm) {
            state.forms.push(newForm);
        },
    },
    actions: {
        addNewForm(ctx, payload) {
            ctx.commit('setForm', payload);
            router.push('/list');
        },
    }
})
