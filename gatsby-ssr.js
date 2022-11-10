import React from "react"
import Layout from "./src/components/Layout/Layout"
import "./src/components/css/index.css"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
