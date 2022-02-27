
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({

})


const ThemeOptions = ({ children }) => {

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider >
    )
}

export default ThemeOptions