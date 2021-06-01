export default class MyFetch {
    static baseUrl = '/api/blog';

    constructor () {
    }

    static async getPosts() {
        const res = await fetch(MyFetch.baseUrl);
        const data = await res.json()
        // console.log(data)
        return data;
    }

    static async createPost(datas, successCallback){
         const res = await fetch(MyFetch.baseUrl, {
          
         method: 'POST',
         headers: {
         'Content-type': 'application/json',
          },
         body: datas,
  
         });
         const data = await res.json();
         // console.log(data)
         return successCallback(data)
         

    }
}