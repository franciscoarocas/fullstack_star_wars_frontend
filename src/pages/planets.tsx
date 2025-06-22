
import FullTable from "../components/table/fulltable";

import Header from "../components/header/header";

import { planetsColumns } from "../types/columns/planets";


const Planets = () => {

  return (
    <div>
      <Header pageTitle="Planets Table"/>
      <FullTable endpointPath="planets" columns={planetsColumns} />
    </div>
  )

};

export default Planets;