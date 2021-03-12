import React from "react";
import * as AccordS from "./accordS";
import * as FiIcon from "react-icons/fi";
import { room } from "../roomData";
import SingleRoom from "./SingleRoom";

// FiMinusSquare
// FiPlusSquare
// FiChevronsRight

const Accord = () => {
  const [data, setData] = React.useState(room);

  return (
    <AccordS.Wrapper>
      <h2>Rooms</h2>
      {data.map((item) => {
     return <SingleRoom  key={item.id} {...item}/>
      })}
    </AccordS.Wrapper>
  );
};

export default Accord;
