import ArticleServise from "@/service/articles.js";

const state = {
    isLoading: false,
}

const mutations = {
    createArticleStart(state) {
        state.isLoading = true
    },
    createArticleSuccess(state) {
        state.isLoading = false
    },
    createArticleFailer(state) {
        state.isLoading = false
    },
}

const actions = {
    createArticle(context, article){
        return new Promise(() => {
            context.commit('createArticleStart')
            ArticleServise.createArticle(article)
                .then(() => context.commit('createArticleSuccess'))
                .catch(() => context.commit('createArticleFailer'))
        })
    }
}

export default {
    state,
    mutations,
    actions,
}