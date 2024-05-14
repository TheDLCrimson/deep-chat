import { createContext, useState } from "react"

export const ChatContext = createContext({
  messages: [],
  savedChats: [],
  handleSaveChat: () => {},
  handleLoadChat: (index) => {}
})

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    { role: "user", text: "Hey, how are you today?" },
    { role: "ai", text: "I am doing very well!" }
  ])

  const [savedChats, setSavedChats] = useState([])

  const handleSaveChat = () => {
    const chatElementRef = document.getElementById("chat-element")
    if (chatElementRef) {
      setSavedChats([...savedChats, chatElementRef.getMessages()])
      setMessages([])
    }
  }

  const handleLoadChat = (index) => {
    if (index < savedChats.length) {
      setMessages(savedChats[index])
    }
  }

  return (
    <ChatContext.Provider
      value={{ messages, savedChats, handleSaveChat, handleLoadChat }}>
      {children}
    </ChatContext.Provider>
  )
}
