import { createContext, useState, useEffect } from "react";

const Context = createContext()

function Provider({children}){
    const localProduct = JSON.parse(window.localStorage.getItem('product'))
    const localSearch = JSON.parse(window.localStorage.getItem('products'))
    const localChannel = JSON.parse(window.localStorage.getItem('addChannel'))

    let [humbergerBtn, setHumbergerBtn] = useState(true)
    let [searchPage, setSearchPage] = useState(true)
    let [search, setSearch] = useState(localSearch || [])
    let [addChannel, setAddChannel] = useState(localChannel || [])
    window.localStorage.setItem('addChannel', JSON.stringify(addChannel))
    let [history, setHistory] = useState(localProduct || [])
    window.localStorage.setItem('product', JSON.stringify(history))
    useEffect(() => {
        window.localStorage.setItem('product', JSON.stringify(history))
    }, [history]);


    useEffect(() => {
        window.localStorage.setItem('products', JSON.stringify(search))
    }, [search])

    useEffect(() => {
        window.localStorage.setItem('addChannel', JSON.stringify(addChannel))
    }, [addChannel])

    return(
        <Context.Provider value={{humbergerBtn, setHumbergerBtn, search, setSearch, history, setHistory, searchPage, setSearchPage, addChannel, setAddChannel}}>
            {children}
        </Context.Provider>
    )
}


export { Context, Provider }