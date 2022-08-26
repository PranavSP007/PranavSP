import { createContext, useState } from "react";
export const CardDataContext = createContext();
const CardContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedData, setselectedData] = useState([]);
  const [btnShowHide, setBtnShowHide] = useState(true);
  const [selected,setSelected]=useState([])
  const [toggle, settoggle] = useState(false);
  const [closePopup,setClosePopup]=useState(false);
  const values = {
    data, 
    selectedData,
    btnShowHide,
    selected,
    toggle,
    closePopup,
    setData,
    setselectedData,
    setBtnShowHide,
    setSelected,
    settoggle,
    setClosePopup
  };
  return (
    <CardDataContext.Provider value={values}>
      {children}
    </CardDataContext.Provider>
  );
};

export default CardContextProvider;
