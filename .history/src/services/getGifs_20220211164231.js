const apiKey = 'lIEY4fUtn5X3LBdAdcKz2dsqUZXjC8sj'

export default function getGifs({keyword}){
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
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