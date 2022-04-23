import lightTheme from "./LightTheme";
import darkTheme from "./DarkTheme";
import { createTheme } from "react-native-theming";

const _themes = [darkTheme, lightTheme,];

const themes = _themes.map(({ theme, name }) => createTheme(theme, name))

export default themes