import { createContext, useEffect, useRef, useState } from "react"

export const TabContext = createContext({
  initialTabInfo: { title: "", url: "" }
})

export const TabProvider = ({ children }) => {
  const [initialTabInfo, setInitialTabInfo] = useState({
    title: "Untitled Chat",
    url: ""
  })

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) return
      const { title, url } = tabs[0]
      setInitialTabInfo({ title, url })
    })
  }, [])
  return (
    <TabContext.Provider value={{ initialTabInfo }}>
      {children}
    </TabContext.Provider>
  )
}
