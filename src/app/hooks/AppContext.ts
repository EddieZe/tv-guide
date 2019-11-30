import React from 'react';

export interface AppContext {
    searchStr: string;
    setCurrentSearchStr: (currentSearchStr: string) => void;
}

export const APP_SEARCH_DEFAULT_VAL = {
    searchStr: 'game',
    setCurrentSearchStr: () => {
    }
};

export const appContext = React.createContext<AppContext>(APP_SEARCH_DEFAULT_VAL);