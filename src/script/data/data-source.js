class DataSource {
   static searchMovie(keyword) {
       return fetch(`https://itunes.apple.com/search?term=${keyword}&media=movie&entity=movie`)
       .then(response => {
           return response.json();
       })
       .then(responseJson => {
           if(responseJson.results) {
               return Promise.resolve(responseJson.results);
           } else {
               return Promise.reject(`${keyword} is not found`);
           }
       })
   }
}

export default DataSource;
