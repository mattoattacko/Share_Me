import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  // We want to run our useEffect on first load as well as anytime the category changes
  useEffect(() => {
    setLoading(true);
    // If we are searching for a specific category, do something. 
    // However, if we are on /feed, we want to show all categories
    if(categoryId) {
      const query = searchQuery(categoryId);

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
  }, [categoryId]);

  if(loading) return <Spinner message='Adding new content to your feed!'/>;

  // If there are no pins for a category //
  if(!pins?.length) return <h2>No pins found. Be the first to create one!</h2>;

  return (
    <div>
      {pins && <MasonryLayout pins={pins} />}
    </div>
  )
}

export default Feed
