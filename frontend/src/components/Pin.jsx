import React, { useState } from 'react';
import { urlFor } from '../client';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'

import { MdDownloadForOffline } from 'react-icons/md'
import { AiTwotoneDelete } from 'react-icons/ai'
import { BsFillArrowUpRightCircleFill } from 'ract-icons-bs'

import { urlFor, client } from '../client'

const Pin = ({ pin: { postedBy, image, _id, destionation }}) => {
    const [postHovered, setPostHovered] = useState(false);
    
    return (
        <div className="m-2">
            <div
                onMouseEnter={() => setPostHovered(true)}
                onMouseLeave={() => setPostHovered(false)}
                onClick={() => Navigate(`/pin-detail/${_id}`)}
            >

            </div>

            <img 
            className="rounded-lg w-full"
            alt="user-post"
            src={urlFor(image).width(250).url()}
        />
        </div>
    );
};

export default Pin;
