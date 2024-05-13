import React, { useContext, useState } from "react"

import { TabContext } from "~Context/TabContext"

const TabInfoDisplay = () => {
  const { currentTabInfo, initialTabInfo } = useContext(TabContext)

  return (
    <div className="plasmo-flex plasmo-flex-row plasmo-items-center">
      <p>
        Current Tab Title: <b>{currentTabInfo.title}</b>
      </p>
      <p>
        Current Tab URL: <b>{currentTabInfo.url}</b>
      </p>
      <p>
        Initial Tab Title: <b>{initialTabInfo.title}</b>
      </p>
      <p>
        Initial Tab URL: <b>{initialTabInfo.url}</b>
      </p>
    </div>
  )
}

export default TabInfoDisplay
