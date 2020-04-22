import React from "react"
import { changeLocale, useIntl } from "gatsby-plugin-intl"
import { Form } from "react-bootstrap";

const LanguageSelector = () => {

    const intl = useIntl()
    
    const langSelected = (event) => {
        const locale = event.target.value;
        changeLocale(locale)
    }

    return(
        <Form.Control as="select" onChange={langSelected} value={intl.locale}>
            <option value="pt">Português</option>
            <option value="en">English</option>
        </Form.Control>
    )
}

export default LanguageSelector