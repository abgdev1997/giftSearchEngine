const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=lIEY4fUtn5X3LBdAdcKz2dsqUZXjC8sj&q=panda&limit=10&offset=0&rating=g&lang=en'

export default function getGifs(){
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const {data} = response;
            if (Array.isArray(data)){
                const gifs = data.map(image => image.images.downsized_medium.url)
                return gifs;
            }
        })
}