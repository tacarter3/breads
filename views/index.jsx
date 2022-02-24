const React = require('react')
const breads = require('../controllers/breads_controllers')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    return (
      <Default title={title}>
        <h2>Index Page!</h2>
        {/* <p> I have {breads[0].name} bread!</p> */}
        <ol>
            {
                breads.map((bread,index) => {
                    return (<li key={index}>
                        <a href={`/breads/${bread.id}`}>
                        {bread.name}
                        </a>
                        <ul>
                            <ol>{bread.getBakedBy()}</ol>
                        </ul>
                    </li>)
                })
                
            }
        </ol>
        <div className="newButton">
            <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
      </Default>
    )
}

module.exports = Index