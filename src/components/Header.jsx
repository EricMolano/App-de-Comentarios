import React from 'react'

const Header = ({autor, titulo,  }) => {
    const headerStyles = {
        backgroundColor : "#DAF7A6",
    }
    const autorStyles = {
        color: "blue"
    }

  return (
    <header style={headerStyles}>
    <div className='container' style={headerStyles}> 
        { titulo }
        <p style={autorStyles}>Autor : {autor} </p>
        </div>
    </header>
  )
}

export default Header

