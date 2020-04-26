import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <head title="About" />
        <h1>About</h1>
        <p>Bio will sho up here!</p>
        <p>
          Dette er et <Link to="/contact">Link til kontakt-siden</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
