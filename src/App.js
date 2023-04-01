import CssBaseline from "@mui/material/CssBaseline";
import AppRouter from "./router/AppRouter";
import {createTheme, ThemeProvider} from "@mui/material/styles"
import { blueGrey,  pink } from "@mui/material/colors";
function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main:pink["900"]
      },
      secondary:{
        main:blueGrey["900"]
      }
    }
  })
  return (
    <>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
    </ThemeProvider>
    </>
  );
}
export default App;