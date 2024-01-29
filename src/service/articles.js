import axios from './axios';

const ArticleServise = {
    articles(){
        return axios.get('/articles')
    },
    articleDetail(slug) {
        return axios.get(`/articels/${slug}`)
    }
}

export default ArticleServise
