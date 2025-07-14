
import FullTable from '../components/table/fulltable';

import { peopleColumns } from '../types/columns/people';

import Header from '../components/header/header';


const People = () => {
  /*
    The People component renders a table of people data.
    It uses the FullTable component to display the data fetched from the "people" endpoint.
  */

  return (
    <div>
      <Header pageTitle="People Table"/>
      <FullTable endpointPath="people" columns={peopleColumns} />
    </div>
  )

};

export default People;