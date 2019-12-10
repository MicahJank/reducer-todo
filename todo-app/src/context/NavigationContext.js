import React, { createContext, useState } from 'react';

export const NavigationContext = createContext();


export const NavigationProvider = props => {

    const [activeItem, setActiveItem] = useState('ALL');

    return (
        <NavigationContext.Provider value={[activeItem, setActiveItem]}>
            {props.children}
        </NavigationContext.Provider>
    );
}