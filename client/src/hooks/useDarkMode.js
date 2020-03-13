import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage('dark mode', initialValue);

    useEffect(() => {
        if (value){
            document.querySelector('body').classList.add('darkmode');
        } else {
            document.querySelector('body').classList.remove('darkmode');
        }
    }, [value]);

    return [value, setValue];
}