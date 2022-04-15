import { createContext, useState, useEffect } from "react";

const Context = createContext()

function Provider({children}){
    const localProduct = JSON.parse(window.localStorage.getItem('product'))
    const localSearch = JSON.parse(window.localStorage.getItem('products'))
    const localChannel = JSON.parse(window.localStorage.getItem('addChannel'))
    const localUserToken = JSON.parse(window.localStorage.getItem('themeColor'))
    const localLanguage = JSON.parse(window.localStorage.getItem('language'))
    const localUserAccount = JSON.parse(window.localStorage.getItem('userToken'))
    const localUserAccountEmail = JSON.parse(window.localStorage.getItem('emailFilter'))

    const [userAbboutAccount, setUserAbboutAccount] = useState(localUserAccount || [])
    const [emailFilter, setEmailFilter] = useState(localUserAccountEmail || [])
    let [themeColor, setThemeColor] = useState(localUserToken || "light")
    let [languages, setLanguages] = useState(localLanguage || "uz")
    let [humbergerBtn, setHumbergerBtn] = useState(true)
    let [searchPage, setSearchPage] = useState(true)
    let [search, setSearch] = useState(localSearch || [])
    let [addChannel, setAddChannel] = useState(localChannel || [])
    let [history, setHistory] = useState(localProduct || [])


    window.localStorage.setItem('product', JSON.stringify(history))
    window.localStorage.setItem('addChannel', JSON.stringify(addChannel))

    useEffect(() => {
        window.localStorage.setItem('userToken', JSON.stringify(userAbboutAccount))
    }, [userAbboutAccount]);
    useEffect(() => {
        window.localStorage.setItem('emailFilter', JSON.stringify(emailFilter))
    }, [emailFilter]);

    useEffect(() => {
        window.localStorage.setItem('themeColor', JSON.stringify(themeColor))
    }, [themeColor]);

    useEffect(() => {
        window.localStorage.setItem('language', JSON.stringify(languages))
    }, [languages]);

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
        <Context.Provider value={{humbergerBtn, setHumbergerBtn, search, setSearch, history, setHistory, searchPage, setSearchPage, themeColor, setThemeColor, addChannel, setAddChannel, themeColor, setThemeColor, languages, setLanguages, userAbboutAccount, setUserAbboutAccount, emailFilter, setEmailFilter}}>
            {children}
        </Context.Provider>
    )
}


export { Context, Provider }