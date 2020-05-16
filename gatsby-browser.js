import React from "react"
import PropTypes from "prop-types"

import Layout from "./src/components/layout"

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>
}

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}
