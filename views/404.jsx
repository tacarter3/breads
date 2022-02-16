const React = require('react')
const breads = require('../controllers/breads_controllers')
const Default = require('./layouts/Default')

function error404() {
    return(
        <Default>
            <main>
                <h1>404: Page Not Found</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Default>
    )
}

module.exports = error404