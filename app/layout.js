"use client";
import "../styles/globals.css";
import { useEffect } from "react";
import { Inter } from '@next/font/google';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocalStorage } from "../helpers/localStorage";
import { useRouter } from 'next/navigation';


const inter = Inter({
  weight: ["300","400","500","600","700","800"],
  subsets:["latin"]
});

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif'
}});

const RootLayout = ({ children }) => {
  const [ token , setToken ] = useLocalStorage();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/auth/signup");
    }
  },[])
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
