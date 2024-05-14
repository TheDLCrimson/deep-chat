import { createContext, useState } from "react"

export const CurrentTabContext = createContext({
  currentTabInfo: { title: "", url: "" }
})

export const CurrentTabProvider = ({ children }) => {
  const [currentTabInfo, setCurrentTabInfo] = useState({
    title: "Untitled Chat",
    url: ""
  })

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return
    const { title, url } = tabs[0]
    setCurrentTabInfo({ title, url })
  })

  return (
    <CurrentTabContext.Provider value={{ currentTabInfo }}>
      {children}
    </CurrentTabContext.Provider>
  )
}
