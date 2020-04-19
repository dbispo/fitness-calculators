import React from "react"
import { BMIForm } from "../components/bmi/form"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
    <Layout>
        <SEO title="Body Mass Index" />
        <h1>Body Mass Index</h1>
        <BMIForm />
    </Layout>
)

export default IndexPage
