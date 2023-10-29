import React from 'react';
import './spinner.css';

const Spinner = () => {
    return (
        <div className='for_center '>
            <section className="loader">
                <div className="slider bg-black" style={{ '--i': 0 }}></div>
                <div className="slider" style={{ '--i': 1 }}></div>
                <div className="slider" style={{ '--i': 2 }}></div>
                <div className="slider" style={{ '--i': 3 }}></div>
                <div className="slider" style={{ '--i': 4 }}></div>
            </section>
        </div>
    );
}

export default Spinner;
