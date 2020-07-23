export default class NewsService {

    _apiBase = 'https://jsonplaceholder.typicode.com';

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw  new Error(`Could not fetch ${url}. Received status ${res.status}`)
        }
        return await res.json();
    };

     getAllPosts = async () => {
        return this.getResource(`/posts`); 
    };

     getPost = async (id) => {
        return this.getResource(`/posts/${id}`);
    };

    getAllPhotos = async () => {
        return this.getResource(`/photos`);  
    };
   
    getPhoto = async (id) => {
       return this.getResource(`/photos/${id}`);
    };

    
}