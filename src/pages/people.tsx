
import FullTable from '../components/table/fulltable';

import { peopleColumns } from '../types/columns/people';

import Header from '../components/header/header';


const People = () => {

  return (
    <div>
      <Header pageTitle="People Table"/>
      <FullTable endpointPath="people" columns={peopleColumns} />
    </div>
  )

};

export default People;