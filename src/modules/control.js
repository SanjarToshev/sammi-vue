import ArticleServise from "@/service/articles.js";

const state = {
    isLoading: false,
}

const mutations = {
    controlArticleStart(state) {
        state.isLoading = true
    },
    controlArticleSuccess() {
        state.isLoading = false
    },
    controlArticleFailer() {
        state.isLoading = false
    },
}

const actions = {
    createArticle(context, article){
        return new Promise(() => {
            context.commit('controlArticleStart')
            ArticleServise.createArticle(article)
                .then(() => context.commit('controlArticleSuccess'))
                .catch(() => context.commit('controlArticleFailer'))
        })
    },
    deleteArticle(context, slug) {
        return new Promise((resolve) => {
            context.commit('controlArticleStart')
            ArticleServise.deleteArticle(slug)
                .then(() => {
                    context.commit('controlArticleSuccess')
                    resolve()
                })
                .catch(() => context.commit('controlArticleFailer'))
        })
    }
}

export default {
    state,
    mutations,
    actions,
}