import React from "react"
import * as sections from "../components/sections"
import Layout from "../containers/layout"

export default function Home() {
  return (
    <Layout>
      <sections.HeroSection />
      <sections.Introduction />
      <sections.Services />
    </Layout>
  )
}
