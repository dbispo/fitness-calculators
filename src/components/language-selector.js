import React from "react"
import { changeLocale, useIntl } from "gatsby-plugin-intl"
import { Form } from "react-bootstrap";
import { IoIosGlobe } from  "react-icons/io";

const LanguageSelector = () => {

    const intl = useIntl()
    
    const langSelected = (event) => {
        const locale = event.target.value;
        changeLocale(locale)
    }

    return(
        <div style={{display : 'flex'}}>
        <IoIosGlobe size="2em" />
        <Form.Control as="select" onChange={langSelected} value={intl.locale} plaintext>
            <option value="pt">Português</option>
            <option value="en">English</option>
        </Form.Control>
        </div>
    )
}

export default LanguageSelector