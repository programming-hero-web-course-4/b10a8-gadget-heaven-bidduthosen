import React from 'react';
import { getCategoryStoredByLocalStorage } from '../Utils/Utils';

const Dashbord = () => {
    const storedCartsLc = getCategoryStoredByLocalStorage()
    console.log(storedCartsLc)
    return (
        <div>
            <h1>dashbord</h1>
        </div>
    );
};

export default Dashbord;