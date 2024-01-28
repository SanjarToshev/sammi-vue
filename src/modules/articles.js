import ArticleServise from "@/service/articles.js";

const state = {
    data: null,
    isLoading: false,
    error: null
}

const mutations = {
    getArticlesStart(state) {
        state.isLoading = true;
        state.data = null
        state.error = null
    },
    getArticlesSucces(state, payload) {
        state.isLoading = false;
        state.data = payload
    },
    getArticlesFailure(state, payload) {
        state.isLoading = false
        state.error = payload.errors
    },
}

const actions = {
    articles(context) {
        return new Promise((resolve) => {
            context.commit('getArticlesStart')
            ArticleServise.articles()
                .then(response => {
                    context.commit('getArticlesSucces', response.data.articles)
                    resolve(response.data.articles)
                }).catch(() => context.commit('getArticlesFailure'))
        })
    }
}

export default {
    state, mutations, actions
}