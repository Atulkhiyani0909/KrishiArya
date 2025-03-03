import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import logo from '../pages/logo.png';

function CropPrices() {
    const [cropprices,setcropprices] =useState([]);
    const [loader, setLoader] = useState(false);
    const [state,setState] = useState('');
    const [district,setDistrict] = useState('');
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        
          let response =await axios.get(`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${import.meta.env.VITE_CROP_PRICES_API_KEY}&format=json&limit=70&filters%5Bstate.keyword%5D=${state}&filters%5Bdistrict%5D=${district}`);
 
          if(response.status===200){
            setLoader(false);
            console.log(response);
            console.log(response.data.records);
            setcropprices(response.data.records);
            setDistrict('');
            setState('');
            }else{
            console.log('Error:', response.status);
          }
    }
    const stateDistricts = {
        
        'Andhra Pradesh': ['Anantapur', 'Chittor', 'Cuddapah', 'Guntur', 'Kurnool', 'Nellore',
          'Visakhapatnam', 'West Godavari', 'East Godavari', 'Krishna'],
        'Chandigarh': ['Chandigarh'],
        'Gujarat': ['Ahmedabad'
        , 'Amreli', 'Anand', 'Banaskanth', 'Bharuch',
          'Bhavnagar', 'Dahod', 'Gandhinagar', 'Gir Somnath', 'Jamnagar',
          'Junagarh', 'Kachchh', 'Kheda', 'Mehsana', 'Morbi', 'Navsari',
          'Panchmahals', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha',
          'Surat', 'Surendranagar', 'Vadodara(Baroda)', 'Valsad', 'Dang',
          'Botad'],
        'Haryana': ['Ambala', 'Fatehabad', 'Gurgaon', 'Hissar', 'Jhajar', 'Jind',
          'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh-Narnaul',
          'Mewat', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak',
          'Sirsa', 'Sonipat', 'Yamuna Nagar'],
        'Himachal Pradesh': ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kullu', 'Mandi',
          'Shimla', 'Sirmore', 'Solan', 'Una'],
        'Jammu and Kashmir': ['Jammu', 'Rajouri', 'Udhampur', 'Anantnag'],
        'Karnataka': ['Bagalkot', 'Bangalore', 'Bellary', 'Bidar', 'Chamrajnagar',
          'Chikmagalur', 'Dharwad', 'Gadag', 'Kalburgi',
          'Karwar(Uttar Kannad)', 'Kolar', 'Mysore', 'Raichur', 'Shimoga',
          'Belga'],
          'Madhya Pradesh':['Alirajpur', 'Ashoknagar', 'Badwani', 'Balaghat', 'Betul', 'Bhind',
            'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh',
            'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda',
            'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa',
            'Khargone', 'Mandla', 'Mandsaur', 'Morena', 'Narsinghpur',
            'Neemuch', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar',
            'Satna', 'Sehore', 'Seoni', 'Shajapur', 'Shehdol', 'Sheopur',
            'Shivpuri', 'Tikamgarh', 'Ujjain', 'Umariya', 'Vidisha', 'Anupur'],
            'Maharashtra':['Ahmednagar', 'Akola', 'Amarawati', 'Beed', 'Bhandara', 'Buldhana',
                'Chandrapur', 'Chattrapati Sambhajinagar', 'Dharashiv(Usmanabad)',
                'Dhule', 'Gadchiroli', 'Hingoli', 'Jalana', 'Jalgaon', 'Kolhapur',
                'Latur', 'Mumbai', 'Nagpur', 'Nanded', 'Nashik', 'Pune', 'Raigad',
                'Sangli', 'Satara', 'Sholapur', 'Thane', 'Vashim', 'Yavatmal',
                'Gondiya', 'Parbhani', 'Wardha']
      };
   
    return (
        <>
        {loader && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
                  <div className="relative flex items-center justify-center">
                    {/* Rotating Circle */}
                    <div className="absolute w-20 h-20 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    
                    {/* Logo (Slightly Bigger & Static) */}
                    <img src={logo} alt="Loading" className="w-14 h-14" />
                  </div>
                </div>
              )}

<div className="max-w-4xl mx-auto mt-16 bg-white p-6 shadow-lg rounded-2xl">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Search Crop Prices</h3>
      <form 
        className="flex flex-col md:flex-row gap-4 items-center" 
        onSubmit={handleSubmit}
        
      >
        {/* State Dropdown */}
        <select
        required
          id="state"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            // Reset district when state changes
          }}
          className="w-full md:w-auto p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select State</option>
          {Object.keys(stateDistricts).map((stateName, index) => (
            <option key={index} value={stateName}>{stateName}</option>
          ))}
        </select>

        {/* District Dropdown */}
        <select
        required
  id="district"
  value={district}
  onChange={(e) => setDistrict(e.target.value)}
  className="w-full md:w-auto p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  disabled={!state} // Disable until a state is selected
>
  <option value="">Select District</option>
  {(stateDistricts[state] || []).map((districtName, index) => (
    <option key={index} value={districtName}>{districtName}</option>
  ))}
</select>

        <button 
          type="submit" 
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
          <div className="max-w-5xl mx-auto mt-16 p-6 bg-white shadow-lg rounded-2xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Crop Prices</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
              <th className="p-3 text-left border">Crop</th>
              <th className="p-3 text-left border">Variety</th>
              <th className="p-3 text-left border">State</th>
              <th className="p-3 text-left border">District</th>
              <th className="p-3 text-left border">Market Place</th>
              <th className="p-3 text-left border">Min Price</th>
              <th className="p-3 text-left border">Modal Price</th>
              <th className="p-3 text-left border">Max Price</th>
            </tr>
          </thead>
          <tbody>
            {cropprices.map((crop, index) => (
              <tr
                key={crop.id}
                className={`border text-gray-800 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                <td className="p-3 border">{crop.commodity}</td>
                <td className="p-3 border">{crop.variety}</td>
                <td className="p-3 border">{crop.state}</td>
                <td className="p-3 border">{crop.district}</td>
                <td className="p-3 border">{crop.market}</td>
                <td className="p-3 border text-green-600 font-semibold">
                  ₹{crop.min_price}
                </td>
                <td className="p-3 border text-yellow-600 font-semibold">
                  ₹{crop.modal_price}
                </td>
                <td className="p-3 border text-red-600 font-semibold">
                  ₹{crop.max_price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </>
    )
}

export default CropPrices
