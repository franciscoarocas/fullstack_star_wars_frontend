
import FullTable from '../components/table/fulltable';

import { peopleColumns } from '../types/columns/people';


const People = () => {

  return (
    <FullTable endpointPath="people" columns={peopleColumns} />
  )

};

export default People;