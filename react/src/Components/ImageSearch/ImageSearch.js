import React, { useState } from 'react'
import Unsplash from '../../services/Unsplash';
import SearchBar from './SearchBar'
import ImageList from './ImageList'

function ImageSearch(){

    const [images,setImages] = useState([])

     const onSearchSubmit = async (term)=> {
            const response = await Unsplash.get('https://api.unsplash.com/search/photos', {
                params : { query : term}
            } );

            setImages(response.data.results);
        }



    return(
        <div className="ui container" style={{marginTop:'1%'}}>
            <SearchBar onSubmit={onSearchSubmit}/>
            <ImageList images={images}/>


        </div>
    )
}

export default ImageSearch