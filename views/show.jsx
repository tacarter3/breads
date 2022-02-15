const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread}) {
  console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
            and it 
            {
                bread.hasGluten
                ? <span> does </span>
                : <span> does Not </span>
            }
        </p>
        <img src={bread.image} alt={bread.name}/>
      </Default>
    )
}

module.exports = Show