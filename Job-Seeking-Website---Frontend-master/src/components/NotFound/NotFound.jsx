import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='page notfound'>
            <div className="content">
                <img src="/notfound.jpg" alt="notfound" style={{ marginBottom: 'auto' }} />
                <Link to={'/'}>RETURN TO HOME PAGE</Link>
            </div>
        </section>

    )
}

export default NotFound;