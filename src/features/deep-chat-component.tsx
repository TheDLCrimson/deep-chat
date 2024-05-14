import { useContext } from "react"

import COMP4010 from "~ChatModules/COMP4010"
import COMP4050 from "~ChatModules/COMP4050"
import { InitTabContext } from "~Context/InitTabContext"

import BANA4020 from "../ChatModules/BANA4020"
import DefaultChat from "../ChatModules/default-chat"

const DeepChatComponent = () => {
  const { initialTabInfo } = useContext(InitTabContext)

  var content

  switch (initialTabInfo.url) {
    case "https://vinuni.instructure.com/courses/1938":
      content = <BANA4020 />
      break
    case "https://vinuni.instructure.com/courses/1980":
      content = <COMP4050 />
      break
    case "https://vinuni.instructure.com/courses/1977":
      content = <COMP4010 />
      break
    default:
      content = <DefaultChat />
  }

  return <>{content}</>
}

export default DeepChatComponent
