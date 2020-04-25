import React from "react"

const CalcLayout = ({children}) => (
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 600,
          padding: `0 1.0875rem 1.45rem`,
          paddingTop: '1em'
        }}
      >
        {children}          
      </div>
 )

export default CalcLayout;