import React from "react"
import PropTypes from "prop-types"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Links from "../components/Header/HeaderLinks"

const Layout = ({ children }) => (
  <div>
    <Header
    brand="Karaena Vincent Photography"
    rightLinks={<Links/>}
    fixed
    color="transparent"
    changeColorOnScroll={{
        height: 400,
        color: "white"
      }}
    >  
    </Header>
    <main>{children}</main>
    <Footer />
  
  </div>
)
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
