import React, { useState } from "react";

import Header from "./components/Header";
import Displayboard from "./components/displayboard";
import UserDispBoard from "./components/userDashboard";
import PriorityDispBoard from "./components/PriorityDashboard";
import FetchData from "./components/fetchApi";
import SelectGrouping from "./components/selectgrouping"
import Select from "./components/choicedisplay";

function App() {
  const [criteria, setCriteria] = useState({grouping: "", ordering: ""});
  const [flag, setFlag] = useState(false); 
  const [cards, setCards] = useState({});
 
  function apicallback(apiobj){
    setCards(apiobj);
  }
  function selectioncallback(group, order, flg){
    //setCards(apiobj);
    setCriteria({grouping: group, ordering: order});
    setFlag(flg);
  }
 
    return (
    <div className="App"> 
        <Header />
        <FetchData fetchcall={apicallback} />
        <Select dispflag ={setFlag} />
        { flag && <SelectGrouping callbackfunc ={selectioncallback} />}
         
        {(criteria.grouping==="status") && <Displayboard  apidata ={cards} sortopt = {criteria.ordering} />}
        {(criteria.grouping==="user") && <UserDispBoard apidata ={cards} sortopt = {criteria.ordering} />}
        {(criteria.grouping==="priority") && <PriorityDispBoard apidata ={cards} sortopt = {criteria.ordering} />}
    </div>
  );
}


export default App;
