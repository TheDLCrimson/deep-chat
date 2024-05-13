import { createContext, useRef, useState } from "react"

export const TabContext = createContext({
  currentTabInfo: { title: "", url: "" },
  initialTabInfo: { title: "", url: "" }
})

export const TabProvider = ({ children }) => {
  const [currentTabInfo, setCurrentTabInfo] = useState({ title: "", url: "" })
  const initialTabInfoRef = useRef({ title: "Untitled Chat", url: "" })

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return
    const { title, url } = tabs[0]
    setCurrentTabInfo({ title, url })
    if (!initialTabInfoRef.current.title || !initialTabInfoRef.current.url) {
      initialTabInfoRef.current = { title, url }
    }
  })

  return (
    <TabContext.Provider
      value={{ currentTabInfo, initialTabInfo: initialTabInfoRef.current }}>
      {children}
    </TabContext.Provider>
  )
}
