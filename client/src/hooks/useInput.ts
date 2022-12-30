import React, {useState} from 'react';

const UseInput = () => {
    const [value, setValue] = useState('')
    const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    return {onChange: ChangeHandler, value}
};

export default UseInput;