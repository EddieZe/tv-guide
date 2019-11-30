import React from 'react';
import {AppContext} from '../AppContext';

export const useAppContext = (): AppContext => {
    const [searchStr, setSearchStr] = React.useState('game');

    const setCurrentSearchStr = React.useCallback((currentStr: string): void => {
        setSearchStr(currentStr);
    }, []);

    return {
        searchStr,
        setCurrentSearchStr,
    };
};