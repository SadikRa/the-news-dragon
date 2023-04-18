import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    } , [])
    return (
        <div>
            <h4>All Categories</h4>
            <h3 className='my-3 p-3 bg-secondary rounded'>National News</h3>
            {
                categories.map(categories => <p key={categories.id}>

                        <Link to={`/categories/${categories.id}`} className='text-decoration-none'>{categories.name}</Link>

                </p>)
            }
        </div>
    );
};

export default LeftNav;