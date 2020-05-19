import React from "react"
import { Link } from "gatsby"

import { useLocalization } from "gatsby-plugin-internationalization"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const { localizedNavigate } = useLocalization()

  const onClick = () => {
    localizedNavigate("/page-2")
  }

  return (
    <>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <button onClick={onClick}>localized navigation</button>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </>
  )
}

export default IndexPage
