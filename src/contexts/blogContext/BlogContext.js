import React, { createContext, useState } from 'react'

import { themeData } from '../../data/themeData.js'

export const BlogContext = createContext()

function BlogContextProvider(props) {
    // eslint-disable-next-line
    const [theme, _] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const value = { theme, drawerOpen, setHandleDrawer }
    return (
        <BlogContext.Provider value={value}>
            {props.children}
        </BlogContext.Provider>
    )

    // #TODO: fetch from BE
}


export default BlogContextProvider