import { useEffect, useState } from 'react';
import { Gif } from './Gif';
import GetGifs from '../services/GetGifs';

export const ListOfGifs = ({ gifs }) => {

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
      GetGifs({keyword: 'chile'})
        .then(gifs => setGifs(gifs))
    }, []);

    return gifs.map(({id, title, url}) => 
        <Gif
            id={id}
            key={id}
            title={title}
            url={url}
        />
    )
}

