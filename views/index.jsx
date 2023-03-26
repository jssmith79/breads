const React = require('react')
const Default = require('./layouts/Default')

function Index({breads, bakers, title}) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
          
            {/* <p>My favorite bread is {breads[3].name}</p> */}
            <ul>
                {
                    breads.map((bread) => {
                        return(
                        <li key={bread.id}>
                            <a href={`/bread/${bread.id}`}>
                                {bread.name}
                            </a>
                        </li>
                        )
                    })
                }
            </ul>
            <h3>Baker</h3>
            <ul>
                {
                    bakers.map((baker) => {
                        return(
                        <li key={baker.id}>
                            <a href={`/baker/${baker.id}`}>
                                {baker.name}
                            </a>
                        </li>
                        )
                    })
                }
            </ul>


            <div className="newButton">
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>


        </Default>
    )
}

module.exports = Index