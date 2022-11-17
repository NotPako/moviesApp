import axios from 'axios';

var apiKey = '210d6a5dd3f16419ce349c9f1b200d6d';
var apiRoot = 'https://api.themoviedb.org/3';

export const getTrendy = async () => {
    return axios.get(`${apiRoot}/trending/movie/week?api_key=${apiKey}`);
};

