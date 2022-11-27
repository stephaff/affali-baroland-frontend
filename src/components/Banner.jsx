import React from 'react';

const Banner = () => {
    return (
        <div className='section blue darken-1'>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h3 className='white-text center-align'>Questions</h3>
                        <p className='white-text center-align'>
                            Ce forum est ouvert à toutes les questions liées à la programmation.<br/>
                            (PHP, Javascript, Java, C++, Ruby, Firebase, C, React, Dart, Julia...)
                        </p>
                        <div className="input-field">
                            <input type="search" id='search-input' className='browser-default' placeholder="Rechercher des questions" />
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Banner;
