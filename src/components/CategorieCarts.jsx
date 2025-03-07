import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CategorieCarts = () => {
    const [categories, setCategories] = useState([]);
    const categoriesData = useLoaderData();
    const { category } = useParams()

    useEffect(() => {
        if (category) {
            const filterByCategories = categoriesData.filter(cd => cd.category === category);
            setCategories(filterByCategories);
        } else {
            setCategories(categoriesData)
        }

    }, [category, categoriesData])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-2 '>
            {
                categories.map(category => <Card key={category.id} category={category}></Card>)
            }
        </div>
    );
};

export default CategorieCarts;