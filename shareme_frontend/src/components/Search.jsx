import React, { useState, useEffect } from 'react';

import MasonryLayout from './MasonryLayout';
import { client } from '../client'; // Sanity client we use to connect to Sanity backend
import { feedQuery, searchQuery } from '../utils/data';
import Spinner from './Spinner';

const Search = ({ searchTerm }) => {

  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(true);

  // Gets Pins for Specific Search Term //
  // First check if there is a search term.
  // If we do, we pass the search term as lowercase. 
  // Else if we dont have a search term, we want to get all pins.
  useEffect(() => {
    if(searchTerm) {
      setLoading(true);

      const query = searchQuery(searchTerm.toLowerCase());

      client.fetch(query)
      .then((data) => {
        setPins(data);
        setLoading(false);
      })
      
    } else {
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
      }
  }, [searchTerm]);


  return (
    <div>
      {loading && <Spinner message='Searching for pins...' />}
      {pins?.length !== 0 && <MasonryLayout pins={pins} />}

      {/* Searching for pins, but there are no pins found */}
      {pins?.length === 0 && searchTerm !== '' && !loading && (
        <div className="mt-10 text-center text-xl ">No Pins Found!</div>
      )}
    </div>
  )
}

export default Search
