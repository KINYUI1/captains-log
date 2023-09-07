const React = require('react')

const DefaultLayout = ({children})=>{
    return(
        <html>
            <head></head>
            <body>{children}</body>
        </html>
    )
}

module.exports = DefaultLayout;