import { useContext, useEffect, useState } from "react"

import COMP4010 from "~ChatModules/COMP4010"
import COMP4050 from "~ChatModules/COMP4050"
import { CurrentTabContext } from "~Context/CurrentTabContext"

import BANA4020 from "../ChatModules/BANA4020"
import DefaultChat from "../ChatModules/default-chat"

const DeepChatComponent = () => {
  const { currentTabInfo } = useContext(CurrentTabContext)
  const [activeIndex, setActiveIndex] = useState(-1)
  const chatModel = [<BANA4020 />, <COMP4050 />, <COMP4010 />, <DefaultChat />]

  useEffect(() => {
    const urls = [
      "https://vinuni.instructure.com/courses/1938",
      "https://vinuni.instructure.com/courses/1980",
      "https://vinuni.instructure.com/courses/1977"
    ]
    const index = urls.indexOf(currentTabInfo.url)
    setActiveIndex(index >= 0 ? index : 3)
  }, [currentTabInfo.url])

  return (
    <div style={{ position: "relative" }}>
      {chatModel.map((ChatComponent, index) => (
        <div
          key={index}
          style={{
            display: activeIndex === index ? "block" : "none",
            position: activeIndex === index ? "relative" : "absolute",
            width: "100%",
            height: "100%"
          }}>
          {ChatComponent}
        </div>
      ))}
    </div>
  )
}

export default DeepChatComponent
