import {createStore} from "vuex";
import auth from "@/modules/auth.js";
import articles from "@/modules/articles.js";
import control from "@/modules/control.js";

const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {auth, articles,control},

})

export default store