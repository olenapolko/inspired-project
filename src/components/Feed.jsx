import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner'
import { searchQuary, feedQuery } from '../utils/data';
import emptyBox from '../assets/empty-box.png'

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  const [pins, setPins] = useState(null);

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      const query = searchQuary(categoryId);
      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false)
      })
    } else {
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setLoading(false);
      })
    }
  }, [categoryId])

  if (loading) return <Spinner message="We are adding new ideas to your feed!" />
  
  if (!pins?.length) return (
    <div className='max-w-200 flex flex-col items-center mx-auto mt-20'>
      <h2 className='text-red-500 mb-5'>No pins available so far :(</h2>
      <img src={emptyBox} alt="Empty Box" />
    </div>

  )

  return (
    <div>
      {pins && <MasonryLayout pins={pins}/>}
    </div>
  )
}

export default Feed
