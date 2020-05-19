import React from "react"
import PropTypes from "prop-types"

import Layout from "./src/components/layout"

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}

wrapPageElement.propTypes = {
  element: PropTypes.node.isRequired,
}
