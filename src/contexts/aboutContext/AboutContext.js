import React, { createContext, useState } from 'react'

import { themeData } from '../../data/themeData.js'
import { aboutData } from '../../data/aboutData.js'

export const AboutContext = createContext()

function AboutContextProvider(props) {
    // eslint-disable-next-line
    const [theme, _] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const value = { theme, drawerOpen, setHandleDrawer }
    return (
        <AboutContext.Provider value={value}>
            {props.children}
        </AboutContext.Provider>
    )
}


export default AboutContextProvider