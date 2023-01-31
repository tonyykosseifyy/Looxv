"use client";
import "../styles/globals.css";
import { Inter } from '@next/font/google';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useLocalStorage from "../helpers/localStorage";
import { useRouter } from 'next/navigation';
import { red , blue } from '@mui/material/colors';

const inter = Inter({
  weight: ["300","400","500","600","700","800"],
  subsets:["latin"]
});

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif'
  },
  palette: {
    mode:"light",
    primary: {
      main: blue[600],
    },
  },
});

const RootLayout = ({ children }) => {
  const [ token , updateToken ] = useLocalStorage("token","");
  const router = useRouter();

  // useEffect(() => {
  //   if (token === "") {
  //     router.push("/auth/signup");
  //   }
  // },[token])
  return (
    <html className={inter.className}>
      <head />
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
