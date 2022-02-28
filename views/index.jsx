const React = require('react')
const breads = require('../controllers/breads_controllers')
const Default = require('./layouts/Default')

function Index ({breads, bakers, title}) {
    return (
      <Default title={title}>
        <h2>Index Page!</h2>
        <h3>Bakers</h3>
        <ul>
            {
                bakers.map((baker) => {
                    return (
                    <li key={baker.id}>
                        <a href={`/bakers/${baker.id}`}>{baker.name}</a>
                    </li>
                    
                    )
                })  
            }
        </ul>
        <h3>Breads</h3>
        <div className="newButton">
            <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
      </Default>
    )
}

module.exports = Index