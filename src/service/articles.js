import axios from './axios';

const ArticleServise = {
    articles(){
        return axios.get('/articles')
    }
}

export default ArticleServise
