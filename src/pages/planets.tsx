
import FullTable from "../components/table/fulltable";

import { planetsColumns } from "../types/columns/planets";


const Planets = () => {

  return (
    <FullTable endpointPath="planets" columns={planetsColumns} />
  )

};

export default Planets;