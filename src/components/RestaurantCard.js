import React from 'react'
import '../App.css'
import { CDN_URL } from '../utils/constant'

const RestaurantCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, costForTwo, sla, avgRating} = resData?.info
    // console.log(props);
  return (
    <div className='res-card'>
    <img src={CDN_URL+cloudinaryImageId}
        alt='res-logo'
        className='res-logo'
    />
        <h4>{name}</h4>
        <p>{cuisines?.join(", ")}</p>
        <h4 style={{color:"orange"}}>{avgRating} stars</h4>
        <p>{costForTwo}</p>
        <p>{sla.deliveryTime} minutes</p>
    </div>
  )
}

export default RestaurantCard;