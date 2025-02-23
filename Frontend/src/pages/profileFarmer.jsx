import React, { useContext, useEffect } from 'react';
import { FarmerContext } from '../context/farmerContext'; // import the context
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { farmer, logoutFarmer } = useContext(FarmerContext); // access farmer data from context
  const navigate = useNavigate();

  if(!farmer){
    return <>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe, rem eos minima nemo, pariatur, aut earum sequi perferendis reiciendis id fugiat qui exercitationem tempore et soluta beatae quisquam vel.
    Praesentium illo veritatis vitae cupiditate optio nobis facere maxime unde impedit velit non expedita qui possimus, ipsa adipisci placeat? Totam nam architecto nulla qui cum omnis suscipit, magni dolore quis.
    Quibusdam sapiente at optio dolor aspernatur? Facere aliquam consequuntur perspiciatis quas porro fuga placeat quia sit atque in molestias quos aut officia earum, fugiat eligendi sunt commodi officiis a rerum.
    Sed minima praesentium alias, laboriosam atque deserunt accusamus aut assumenda ipsam exercitationem illo molestias incidunt quam. Doloribus ea, mollitia repellat ut, a amet labore illum vel, rem atque fugiat illo.
    Aut non adipisci culpa corrupti! Ad ut repudiandae voluptatum iusto veritatis laudantium tempora porro voluptatibus? Veniam aliquid nesciunt laborum illum nostrum, corrupti facere ad, saepe deleniti excepturi perspiciatis dolorum maiores!
    Natus suscipit doloribus nostrum, commodi temporibus fugit possimus totam! Necessitatibus quaerat fuga corporis quae maxime, ipsum a unde expedita dignissimos. Delectus harum unde repudiandae. Aspernatur numquam nihil a provident debitis!
    Pariatur nobis eligendi quae natus. Quaerat reiciendis expedita minima ut harum. Soluta quis dolorem, eaque fugiat ipsa rerum in unde numquam minus. Ipsam deleniti delectus cupiditate praesentium? Amet, vitae libero.
    Voluptas blanditiis soluta alias voluptatibus eos sed, ullam nisi totam magni sunt dolores necessitatibus dicta debitis pariatur sapiente laudantium dolorum, modi ut hic commodi. Dolorum laborum quam accusantium officia similique?
    Aspernatur sit rem, beatae ad ea expedita cupiditate perspiciatis sed, quia id asperiores cum ut quisquam eum quo voluptas amet consectetur iusto mollitia et laborum eius. Pariatur magni facilis accusamus!
    Sed perspiciatis quaerat dolor voluptates quisquam, cum vero eligendi sapiente ducimus natus, consequuntur nemo error tenetur dolorem exercitationem deleniti, impedit optio deserunt suscipit nobis. Inventore deserunt aut fugit. Sunt, consectetur.
     <h2>Please login to access the dashboard</h2>; 
     </>
  }

  const handleLogout = () => {
    logoutFarmer(); // Call the logout function
    // Optionally, navigate to the login or home page
    navigate('/');  // Use react-router's navigate to move to the home page
  };

  return (
    <div>
      {/* Check if the farmer exists */}
      {farmer ? (
        <>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi veritatis voluptatibus aliquid possimus repellendus corporis autem facilis distinctio illum iusto esse fugit sint animi dicta, neque error fuga ipsum. Doloremque.
        Iste laboriosam, tempore recusandae voluptates non est quos commodi itaque id. Possimus cupiditate officiis amet voluptates? Nobis quis eos mollitia nam qui in praesentium voluptates? Earum excepturi maiores eveniet laudantium.
        Nesciunt quaerat debitis rerum! Reprehenderit, non facere, omnis incidunt blanditiis libero a, reiciendis delectus numquam quos suscipit ipsum fugiat unde pariatur dolores officia dolorem velit laudantium deserunt necessitatibus dolore animi.
        Autem dolore iure quisquam, ea sequi beatae nisi mollitia sapiente cumque ullam quo sed ipsa, a laborum hic voluptatem exercitationem optio est recusandae vero, debitis perspiciatis error pariatur! Quia, sit.
        Possimus eos quis dolore harum quidem dolorem repellendus maxime veritatis, cumque error corrupti consequuntur maiores dolores reiciendis ratione deserunt ducimus voluptas inventore adipisci dicta ipsam consectetur eligendi modi. Quos, facilis.
        Excepturi dolorem atque sequi sint. Quod vitae reprehenderit officiis fuga voluptatibus delectus asperiores debitis veritatis nisi totam omnis dolores, enim quidem ipsum possimus error nulla veniam distinctio amet ex mollitia.
        Nobis illo quisquam impedit voluptatibus, deleniti labore reprehenderit velit recusandae nulla? Fugit beatae, reprehenderit, porro distinctio ipsa tempore consequatur aspernatur id culpa placeat at debitis rerum maxime repudiandae itaque eligendi.
        Autem similique, obcaecati perferendis reiciendis quis ea numquam dolor vel possimus nam? Neque tenetur, voluptas impedit quae soluta odit accusantium animi! Eligendi illo ad natus dolores non esse explicabo quo.
        Libero dignissimos dolores expedita qui, asperiores fugit ad facilis accusamus eum aspernatur nisi consequatur rerum reprehenderit perferendis odio inventore excepturi quos consequuntur quia itaque. Ad dolorum sunt vero amet rerum.
        Voluptate esse, corporis iste unde doloremque molestiae earum est ullam quidem distinctio nihil. Recusandae odit earum ex officia necessitatibus alias repudiandae repellat nisi nesciunt nihil magni, culpa laudantium mollitia dolorem!
        Esse praesentium sapiente dicta dolor at? Ipsa officiis, ea illum quam voluptatum hic? Eaque corrupti quas eos, saepe architecto assumenda voluptates, iusto dolore aspernatur quia eum eius commodi modi amet!
        Dignissimos voluptatem commodi totam non! Perspiciatis in est repellendus suscipit officia, tenetur maiores! Labore, sit ut accusantium numquam voluptates a reiciendis nihil corporis consequuntur sequi nulla laudantium dolore dicta quaerat.
        Blanditiis, maxime consectetur, eos ut, ad commodi cum magni nam incidunt beatae eaque in saepe. Voluptatibus eveniet repellendus dolore voluptas adipisci molestiae pariatur ratione distinctio eligendi est. Nam, perspiciatis adipisci?
        Aut qui est laudantium dolor dolorum itaque dolore ipsa nemo? Odit, sapiente expedita, ratione doloribus vitae consequuntur dolore quae quia ipsam laborum vero soluta cumque enim. Recusandae laudantium consequatur dicta?
        Error eligendi aliquam magnam soluta voluptates quas excepturi similique! Inventore recusandae dignissimos odit soluta consequatur veritatis cupiditate porro sequi reprehenderit sapiente, laudantium distinctio, consectetur quos voluptatum ad alias voluptas non.
        Dolorum consequuntur quam consequatur cupiditate facere dolores rerum consectetur? Laborum quo laudantium commodi illum eaque, sint sit modi vero ullam nisi vitae doloremque corrupti explicabo. Doloremque corporis perspiciatis id modi!
        Dolore optio nihil nisi at quia a, nostrum fugiat porro vitae dignissimos quibusdam necessitatibus molestias dolorum sit praesentium ipsa dolor sed aspernatur. Quo modi deserunt nihil sequi tempora sit praesentium!
        Impedit consequatur deserunt voluptatem reiciendis voluptas ipsum. Doloribus id beatae corporis illo illum, impedit, praesentium ipsa itaque fugit porro laudantium inventore voluptates ea possimus, in pariatur? Delectus accusamus veniam beatae?
        Accusamus maiores aliquam, quia sapiente harum consequuntur esse illo exercitationem minus atque, tempore nihil corrupti enim ducimus veritatis temporibus debitis officiis error id, laudantium rem possimus totam quidem provident. Reprehenderit.
       
    electus est consectetur cumque natus ratione quis ab, omnis, hic molestiae sequi amet ex minima itaque culpa possimus eius ipsa optio. Quam, accusantium illum.
          <h1>Welcome, {farmer.newFarmer.Name}</h1>
          <p>Phone: {farmer.newFarmer.mobNumber}</p>
          {/* <p>Livestock: {farmer.livestock.join(', ')}</p>
          <p>Crops: {farmer.cropsDetails.join(', ')}</p> */}
        </>
      ) : (
        <h2>Loading...</h2> // Optional loading message while farmer is being fetched
      )}

      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
