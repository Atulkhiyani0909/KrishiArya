import React, { useState, useContext, useEffect, useRef } from 'react';
import { FarmerContext } from '../contexts/farmerContext';

function FarmerProfile() {

     const { farmer, logoutFarmer } = useContext(FarmerContext);
     console.log("Farmer profile ", farmer);
    return (
        <>
        {!farmer && (
             <>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde porro aperiam accusamus, voluptatum modi illo tempora mollitia error aut explicabo magnam labore consectetur facere, placeat maxime enim, ex itaque!
             Officia quaerat modi ullam hic. Saepe modi alias dolores similique veniam harum. Esse excepturi, quo sed dolores corporis sunt. Fugit nihil consequatur optio eligendi dolore enim recusandae dolores quas cumque!
             Quibusdam est assumenda eos, perspiciatis ea expedita cupiditate tempore voluptates porro quas dolor saepe asperiores, ipsa hic soluta quae laudantium dolores, sint quod velit voluptate culpa ducimus reiciendis. Eveniet, praesentium!
             Facilis neque aspernatur impedit nemo cum inventore numquam ducimus dolorem officiis! Harum omnis doloribus, in ratione qui fugit nobis dolore error voluptate quisquam? Laboriosam architecto exercitationem ratione dolores culpa sed.
             Debitis ducimus enim dolor eum iure ipsa ipsum, asperiores voluptas neque soluta qui, corrupti non atque, quia praesentium expedita sed harum. Autem amet nesciunt voluptatibus dolorem unde recusandae necessitatibus accusamus!
            <h2>Please login to access your profile</h2>
            </>
        )}
        {farmer && (
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis autem est dolores quidem rem molestiae, vitae pariatur ratione laborum quam sint asperiores magni cumque repellat eius iste explicabo voluptas expedita.
                <h1 className='mt-5'>This is the Profile Page of the User </h1>
                <h2>Welcome {farmer.farmer.Name}!</h2>
                <h2>Welcome {farmer.farmer.cropsDetails}!</h2>
                <h2>Welcome {farmer.farmer.livestock}!</h2>
                <h2>Welcome {farmer.farmer.mobNumber}!</h2>
                <button className='bg-red-700' onClick={logoutFarmer}>Logout</button>
                
            </div>
        )}
        </>
    )
}

export default FarmerProfile
