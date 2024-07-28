import { createContext, useState } from "react";

const MyThemeContext = createContext();

export function MyThemeProvider({ children }) {
    const [dark, setDark] = useState(true);

    function toggleTheme() {
        setDark(prevDark => !prevDark);
    }

    return (
        <MyThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </MyThemeContext.Provider>
    );
}

export default MyThemeContext;
