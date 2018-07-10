import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className='f3'>
            <p>{'This Magic Brain will detect face in your pictures. Give it an image link.'}</p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input type="text" className='fa4 pa2 w-70 center' />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;