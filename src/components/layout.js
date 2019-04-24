import React from "react"
import PropTypes from "prop-types"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Links from "../components/Header/HeaderLinks"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { karaenaGold } from "../assets/jss/material-kit-react";
const theme = createMuiTheme({
  palette: {
    primary:{main: karaenaGold},
  },
});
const Layout = ({ children }) => (
  <div>
     <MuiThemeProvider theme={theme}>
    <Header
    
    brand="Karaena Vincent Photography"
    rightLinks={<Links/>}
    fixed
    color="white"
    changeColorOnScroll={{
        height: 400,
        color: "white"
      }}>
    </Header>
    <main>{children}</main>
    <Footer />
    </MuiThemeProvider>
  </div>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
