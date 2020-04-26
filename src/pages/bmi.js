import React from "react"
import { BMIForm } from "../components/bmi/form"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row } from "react-bootstrap"
import { useIntl } from "gatsby-plugin-intl"
import CalcLayout from "../components/calc_layout"


const IndexPage = () => {
    const intl = useIntl()
    return (
        <Layout>
            <CalcLayout>
                <SEO title={intl.formatMessage({ id: "bodyMassIndex" })} lang={intl.locale} />
                <Container>
                    <Row className="mb-3">
                        <h1>{intl.formatMessage({ id: "bodyMassIndex" })}</h1>
                    </Row>
                    <Row>
                        <BMIForm />
                    </Row>
                </Container>
            </CalcLayout>
        </Layout>
    )
}

export default IndexPage
