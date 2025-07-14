
import FullTable from "../components/table/fulltable";

import Header from "../components/header/header";

import { planetsColumns } from "../types/columns/planets";


const Planets = () => {
  /*
    The Planets component renders a table of planets data.
    It uses the FullTable component to display the data fetched from the "planets" endpoint.
  */

  return (
    <div>
      <Header pageTitle="Planets Table"/>
      <FullTable endpointPath="planets" columns={planetsColumns} />
    </div>
  )

};

export default Planets;