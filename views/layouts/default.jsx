const React = require('react')

function Default(html) {
    return(
        <html>
            <head>
                <title></title>
            </head>
            <body>
                <h1>HTML render</h1>
                <div className="container">
                    {html.children}
                </div>
            </body>
        </html>

    )
}

module.exports = Default

