import React from 'react';

import './form.scss';







export default function Form(props) {



    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon',
        };
        props.handleApiCall(formData);
    }



    return (







        <div>
            <form onSubmit={handleSubmit}>
                <label >
                    <span>URL: </span>
                    <input name='url' type='text' />
                    <button type="submit">GO!</button>
                </label>
                <label className="methods">
                    <span id="get">GET</span>
                    <span id="post">POST</span>
                    <span id="put">PUT</span>
                    <span id="delete">DELETE</span>
                </label>
            </form>


        </div>
    )
}