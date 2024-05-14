import { createContext, useEffect, useState } from "react"

export const InitTabContext = createContext({
  initialTabInfo: { title: "", url: "" }
})

export const InitTabProvider = ({ children }) => {
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
    <InitTabContext.Provider value={{ initialTabInfo }}>
      {children}
    </InitTabContext.Provider>
  )
}
