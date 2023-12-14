import { ViewStyle, View } from 'react-native';

type ThemeAction =
    | { type: 'set_default_theme' }
    | { type: 'set_theme_1' }
    | { type: 'set_theme_2'}
    | { type: 'set_theme_3'}

export interface ThemeState {
    currentTheme: 'theme1' | 'theme2' | 'theme3' |'default';
    viewStyle: ViewStyle;
    cardStyle: ViewStyle;
}

export const defaultTheme: ThemeState = {
    currentTheme: 'default',
    viewStyle: {backgroundColor: 'white'},
    cardStyle: {backgroundColor: 'white'},
}

export const theme1: ThemeState = {
    currentTheme: 'theme1',
    viewStyle: {backgroundColor: '#b4dfb3'},
    cardStyle: {backgroundColor: '#cde4b3'},

// .color1 { #69d0b3 };
// .color2 { #9bdab3 };
// .color3 { #b4dfb3 };
// .color4 { #cde4b3 };
// .color5 { #d9cf85 };

}

export const theme2: ThemeState = {
    currentTheme: 'theme2',
    viewStyle: {backgroundColor: '#7c6c8c'},
    cardStyle: {backgroundColor: '#c2b6b8'},

    // .color1 { #8b7377 };
    // .color2 { #c2b6b8 };
    // .color3 { #483c3e };
    // .color4 { #7c6c8c };
    // .color5 { #bfb2b4 };
}

export const theme3: ThemeState = {
    currentTheme: 'theme3',
    viewStyle: {backgroundColor: '#7c877d'},
    cardStyle: {backgroundColor: '#c5c7b1'},

    // .color1 { #909569 };
    // .color2 { #c5c7b1 };
    // .color3 { #4a4d37 };
    // .color4 { #7c877d };
    // .color5 { #bcbfa5 };

}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'set_default_theme':
            return { ...defaultTheme }
        case 'set_theme_1':
            return { ...theme1 }
        case 'set_theme_2':
            return { ...theme2 }
        case 'set_theme_3':
            return { ...theme3 }
        default:
            return { ...state }
    }
}