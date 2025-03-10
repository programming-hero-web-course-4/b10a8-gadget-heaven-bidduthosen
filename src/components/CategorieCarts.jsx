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
        <div>
            {
                categories.length ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-2 '>
                        {
                            categories.map(category => <Card key={category.id} category={category}></Card>)
                        }
                    </div>
                    :
                    <div>
                        <h1 className=' text-red-600 font-semibold text-3xl py-5'>No Category Available!</h1>
                    </div>
            }
        </div>
    );
};

export default CategorieCarts;