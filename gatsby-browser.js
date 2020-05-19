import React from "react"
import PropTypes from "prop-types"
import { LocalizationProvider } from "gatsby-plugin-internationalization"

import Layout from "./src/components/layout"

export const wrapPageElement = ({ element, props }) => {
  return (
    <LocalizationProvider {...props}>
      <Layout>{element}</Layout>
    </LocalizationProvider>
  )
}

wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
}
