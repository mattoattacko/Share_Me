import React, { useState, useEffect } from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { client, urlFor } from '../client';
import MasonryLayout from './MasonryLayout';
import { pinDetailMorePinQuery, pinDetailQuery } from '../utils/data';
import Spinner from './Spinner';



const PinDetail = ({ user }) => {
  const [pins, setPins] = useState(null);
  const [pinDetail, setPinDetail] = useState(null);
  const [comment, setComment] = useState('');
  const [addingComment, setAddingComment] = useState(false);
  const { pinId } = useParams();



  // Fetching Pin Details //
  const fetchPinDetails = () => {
    let query = pinDetailQuery(pinId);

    if(query) {
      client.fetch(query)
        .then((data) => {
          setPinDetail(data[0]); // first we get an individual pin and set it to pinDetail

          if(data[0]) {
            query = pinDetailMorePinQuery(data[0]); // then we get the pins that are related to the pin we just got

            client.fetch(query)
              .then((res) => setPins(res)); // get all related pins to that pin
          }
      });
    }
  }

  useEffect(() => { 
    fetchPinDetails();
  }, [pinId]);

  // Loading //
  // remember to call conditional statements after useEffect. Just above return statement.
  if(!pinDetail) return <Spinner message="Loading..." />;


  return (
    <div>
      PinDetail
    </div>
  )
}

export default PinDetail
