import React from "react";
import * as TourS from "./tourS";
import { tourList } from "../tourData";
import SingleTour from "./SingleTour";

const Tours = () => {
  const [data, setData] = React.useState(tourList);

  return (
    <TourS.Wrapper>
      <TourS.Container>
        <h2>Attractions</h2>
        <TourS.TourWrap>
          {data.map((items) => {
            return <SingleTour key={items.id} {...items} />;
          })}
        </TourS.TourWrap>
      </TourS.Container>
    </TourS.Wrapper>
  );
};

export default Tours;
