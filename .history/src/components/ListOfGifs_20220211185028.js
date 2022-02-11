import { useEffect, useState } from 'react';
import { Gif } from './Gif';
import GetGifs from '../services/GetGifs';

export const ListOfGifs = ({params}) => {
    const {keyword} = params
    const [gifs, setGifs] = useState({loading: false, results: []});

    useEffect(() => {
        setGifs(actualGifs => ({loading: true, results: actualGifs.results}))
        GetGifs({keyword})
            .then(gifs => loading: false, results: gifs))
    }, [keyword]);

    if(gifs.loading){
        <i>loading...</i>
    }

    return (
        <div>
            {
                gifs.results.map(({id, title, url}) => 
                <Gif
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />)
            }
        </div>
    )
}

