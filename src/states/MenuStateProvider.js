import React, { createContext, useReducer } from 'react';


export const MenuEnum = Object.freeze({
    "Home": 0,
    "Slider": 1,
    "Representative": 2,
    "Setting": 3
})

const initialState = {
    activeMenu: MenuEnum.Home,
    collapsed: false,
};

const defaultValue = { menuState: initialState };

const menuStore = createContext(defaultValue);
const { Provider } = menuStore;

const MenuStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'ChangeActiveMenu':
                return {
                    ...state,
                    activeMenu: action.newMenu,
                }
            case 'Collapse':
                return {
                    ...state,
                    collapsed: action.collapsed,
                }
            default:
                throw new Error();
        }
    }, initialState)

    return <Provider value={{ menuState: state, menuDispatch: dispatch }}>{children}</Provider>;
};

export { menuStore, MenuStateProvider }