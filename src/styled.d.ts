import 'styled-components';
interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    palette: {
      common: {
        primary: string
        secondary: string
        text: string
        comment: string
        cyan: string
        green: string
        orange: string
        pink: string
        purple: string
        red: string
        yellow: string
        textTwo: string;
      }
    }
  }
}