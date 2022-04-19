import React, { useCallback, useEffect, useState } from 'react' 
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import {FaRegCopy, FaList,FaEllipsisV, FaShareAlt} from 'react-icons/fa/index'
import {RiSendPlaneFill, RiDeleteBin6Line} from 'react-icons/ri/index'

function Home() {
    const [popUpMenu, setPopUpMenu] = React.useState(false);
  return (
    <div className="App">
      <button onClick={() => setPopUpMenu(!popUpMenu)}>
        Menu with Dropdown
      </button>
      {popUpMenu && PopUpMenu()}
    </div>
  );
}

function PopUpMenu() {
  return (
    <ul className="drop-down">
      <li>Menu-item-1</li>
      <li>Menu-item-2</li>
      <li>Menu-item-3</li>
    </ul>
  );
}

export default Home;