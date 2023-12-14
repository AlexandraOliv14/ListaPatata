import { createContext, useEffect, useReducer } from "react";
import { ThemeState, defaultTheme, themeReducer } from "./themeReducer";


interface ThemeContextProps {
    theme: ThemeState;
    setDefaultTheme: ()=>void;
    setTheme1: () => void;
    setTheme2: () => void;
    setTheme3: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

    const [theme, dispatch] = useReducer(themeReducer, defaultTheme)

    useEffect(() => {
    //     switch () {
    //         case 0:
                setDefaultTheme()
    //             break;
    //         case 1:
    //             setTheme1()
    //             break;
    //         case 2:
    //             setTheme2()
    //             break;
    //         case 3:
    //             setTheme3()
    //             break;
    //         default:
    //             setDefaultTheme()
    //             break;
    //     }
     }, [])

    const setDefaultTheme = () => {
        dispatch({ type: 'set_default_theme' })
    }

    const setTheme1 = () => {
        dispatch({type: 'set_theme_1'})
    }

    const setTheme2 = () => {
        dispatch({ type: 'set_theme_2'})
    }

    const setTheme3 = () => {
        dispatch({ type: 'set_theme_3'})
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDefaultTheme,
            setTheme1,
            setTheme2,
            setTheme3
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
