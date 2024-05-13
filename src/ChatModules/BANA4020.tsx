import { DeepChat } from "deep-chat-react"
import { useContext, useState } from "react"

import { TabContext } from "~Context/TabContext"

const BANA4020 = () => {
  const { currentTabInfo, initialTabInfo } = useContext(TabContext)

  const [initialMessages, setInitialMessages] = useState([
    {
      role: "ai",
      text: "Welcome to BANA4020 Computational Machine Learning for Business Analytics"
    },
    { role: "ai", text: "You can ask me any question related to the course <3" }
  ])

  const [savedChats, setSavedChats] = useState([])

  const handleSaveChat = () => {
    const chatElementRef = document.getElementById("chat-element")
    setSavedChats([...savedChats, chatElementRef.getMessages()])
    setInitialMessages([])
  }

  const handleLoadChat = (index) => {
    if (index < savedChats.length) {
      setInitialMessages(savedChats[index])
    }
  }

  return (
    <div className="App">
      <h1>Deep Chat</h1>
      <button onClick={handleSaveChat}>Save Chat</button>
      {savedChats.map((_, index) => (
        <button key={index} onClick={() => handleLoadChat(index)}>
          {initialTabInfo.title} #{index + 1}
        </button>
      ))}
      <DeepChat
        id="chat-element"
        demo={true}
        style={{ borderRadius: "10px" }}
        textInput={{ placeholder: { text: "Welcome to the demo!" } }}
        initialMessages={initialMessages}
      />
    </div>
  )
}

export default BANA4020


