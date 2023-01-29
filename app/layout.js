import "../styles/globals.css";
import { Open_Sans } from '@next/font/google';

const openSans = Open_Sans({
  weight: ["300","400","500","600","700","800"],
  subsets:["latin"]
});


const RootLayout = ({ children }) => {
  return (
    <html className={openSans.className}>
      <head />
      <body>{children}</body>
    </html>
  )
};

export default RootLayout;
