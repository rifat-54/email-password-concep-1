import React, { useContext } from 'react';
import { authContex } from '../MainLoayout/MainLayout';

const PhChild = () => {
    const contexValue=useContext(authContex)
    console.log('from ph child',contexValue)
    return (
        <div>
            <h2> I am ph child</h2>
        </div>
    );
};

export default PhChild;