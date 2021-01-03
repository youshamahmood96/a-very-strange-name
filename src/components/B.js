import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { stringAction } from '../actions';

const B = () => {
    const [string,setString] = useState('')
    const dispatch = useDispatch();
    return (
        <div>
            <input onChange={e=>setString(e.target.value)} type="text" name="" id=""/>
            <button onClick={()=>dispatch( stringAction(string) )} >Submit</button>
        </div>
    );
};

export default B;