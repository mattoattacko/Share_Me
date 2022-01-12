import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwoToneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

import { urlFor, client } from '../client';

const Pin = ({ pin: { postedBy, image, _id, destination }}) => {
  return (
    <div>
      <img className="rounded-lg w-full" alt='user-post' src={urlFor(image).width(250).url()} />
    </div>
  )
}

export default Pin
