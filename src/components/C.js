import React from 'react';
import { useSelector } from 'react-redux';

const C = () => {
    const string = useSelector(state=>state?state.payload:null)
    return (
        <div>
            <p>
            {
                string
            }
            </p>
        </div>
    );
};

export default C;