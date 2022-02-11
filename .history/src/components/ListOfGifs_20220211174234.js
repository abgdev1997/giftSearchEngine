import { useEffect, useState } from 'react';
import { Gif } from './Gif';
import GetGifs from '../services/GetGifs';

export const ListOfGifs = ({keyword}) => {

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
      GetGifs({keyword})
        .then(gifs => setGifs(gifs))
    }, [keyword]);

    return gifs.map(({id, title, url}) => 
        <Gif
            id={id}
            key={id}
            title={title}
            url={url}
        />
    )
}

