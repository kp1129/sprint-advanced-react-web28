import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        let item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })

    const setStoredValue = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setValue(value);
    }

    return [value, setStoredValue];
}