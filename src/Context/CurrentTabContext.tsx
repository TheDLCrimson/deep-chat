import { createContext, useEffect, useState } from "react"

export const CurrentTabContext = createContext({
  currentTabInfo: { title: "", url: "" }
})

export const CurrentTabProvider = ({ children }) => {
  const [currentTabInfo, setCurrentTabInfo] = useState({
    title: "Untitled Chat",
    url: ""
  })

  useEffect(() => {
    const updateTabInfo = () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) return
        const { title, url } = tabs[0]
        setCurrentTabInfo({ title, url })
      })
    }

    updateTabInfo()

    chrome.tabs.onActivated.addListener(updateTabInfo)
    chrome.tabs.onUpdated.addListener(updateTabInfo)

    return () => {
      chrome.tabs.onActivated.removeListener(updateTabInfo)
      chrome.tabs.onUpdated.removeListener(updateTabInfo)
    }
  }, [])

  return (
    <CurrentTabContext.Provider value={{ currentTabInfo }}>
      {children}
    </CurrentTabContext.Provider>
  )
}
