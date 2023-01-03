import React, { useState } from 'react'

const Context = React.createContext({
    name:'123',
    suscrito: true,
    scale:".7",
    scaleClick:".5"
})

export default Context