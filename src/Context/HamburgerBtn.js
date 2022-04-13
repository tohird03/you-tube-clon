import { createContext, useState, useEffect } from "react";

const Context = createContext()

function Provider({children}){
    const localProduct = JSON.parse(window.localStorage.getItem('product'))
    const localSearch = JSON.parse(window.localStorage.getItem('products'))

    let [humbergerBtn, setHumbergerBtn] = useState(true)
    let [searchPage, setSearchPage] = useState(true)
    let [search, setSearch] = useState(localSearch || [])

    let [history, setHistory] = useState(localProduct || [])
    window.localStorage.setItem('product', JSON.stringify(history))
    useEffect(() => {
        window.localStorage.setItem('product', JSON.stringify(history))
    }, [history]);


    useEffect(() => {
        window.localStorage.setItem('products', JSON.stringify(search))
    }, [search])

    return(
        <Context.Provider value={{humbergerBtn, setHumbergerBtn, search, setSearch, history, setHistory, searchPage, setSearchPage}}>
            {children}
        </Context.Provider>
    )
}


export { Context, Provider }