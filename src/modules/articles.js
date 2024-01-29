import ArticleServise from "@/service/articles.js";

const state = {
    data: null,
    isLoading: false,
    error: null,
    articleDetail: null
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
    getArticleDetailStart(state) {
        state.isLoading = true;
        state.articleDetail = null
        state.error = null
    },
    getArticleDetailSucces(state, payload) {
        state.isLoading = false;
        state.articleDetail = payload
    },
    getArticleDetailFailure(state, payload) {
        state.isLoading = false
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
    },
    articleDetail(context, slug) {
        return new Promise((resolve, reject) => {
            context.commit('getArticleDetailStart')
            ArticleServise.articleDetail(slug).then( response => {
                context.commit('getArticleDetailSucces')
            }).catch(() => context.commit('getArticleDetailFailure'))
        })

    }
}

export default {
    state, mutations, actions
}