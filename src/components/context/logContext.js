import React from 'react'

const loginContext = React.createContext()

const logProvider=loginContext.Provider
const logConsumer=loginContext.Consumer

export{logProvider,logConsumer}
export default loginContext