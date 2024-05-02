import GetRoutes from './routes'
// import GetRoutes2 from './routes2'
import './App.css'

import { createTheme, ThemeProvider } from '@mui/material';

const textFieldTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF"
    },
    
    secondary:{
      main:"#000000"
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={textFieldTheme}>
      <div style={{ overflow: "hidden" }}>
        <GetRoutes />
      </div>
    </ThemeProvider>
  )
}

export default App
