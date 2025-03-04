import React from 'react';
import { Leaf, BookOpen, Award, Users, Sprout, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';

const EducationHub = () => {
  const [openConsumerFaqs, setOpenConsumerFaqs] = React.useState({});
  const [openFarmerFaqs, setOpenFarmerFaqs] = React.useState({});

  const toggleConsumerFaq = (id) => {
    setOpenConsumerFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleFarmerFaq = (id) => {
    setOpenFarmerFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const consumerFaqs = [
    {
      id: 'c1',
      question: 'How can I verify if a product is truly organic?',
      answer: 'Look for official certification labels like USDA Organic, EU Organic, or other regional certifications. These labels ensure the product meets strict organic standards. You can also check the PLU code on produce (organic items start with 9) and research the producer\'s farming practices.'
    },
    {
      id: 'c2',
      question: 'Are organic products worth the higher price?',
      answer: 'Organic products often cost more due to more labor-intensive farming practices, crop rotation requirements, and certification costs. Many consumers find the benefits—reduced pesticide exposure, environmental sustainability, and potentially higher nutrient content—justify the premium price.'
    },
    {
      id: 'c3',
      question: 'What\'s the difference between "natural" and "organic" labels?',
      answer: '"Natural" is not a regulated term and doesn\'t guarantee any specific standards. "Organic" is strictly regulated and certified, ensuring products are grown without synthetic pesticides, GMOs, or artificial fertilizers, and follow specific sustainable farming practices.'
    },
    {
      id: 'c4',
      question: 'Do organic products have a shorter shelf life?',
      answer: 'Some organic products may have a shorter shelf life because they don\'t contain artificial preservatives. However, many organic items—especially those that are fresh and locally sourced—can be just as durable as conventional products when stored properly.'
    }
  ];

  const farmerFaqs = [
    {
      id: 'f1',
      question: 'How long does organic certification take?',
      answer: 'The certification process typically takes 3 years for land that was previously farmed conventionally. During this transition period, you must follow organic practices but cannot yet sell your products as certified organic. The actual application and inspection process usually takes 3-6 months.'
    },
    {
      id: 'f2',
      question: 'What are the costs associated with organic certification?',
      answer: 'Costs vary by farm size, type, and certifying agency but typically include application fees ($250-$750), annual inspection fees ($400-$2,000), and annual certification fees (0.5%-1% of gross sales). Many regions offer cost-share programs to help offset these expenses.'
    },
    {
      id: 'f3',
      question: 'How do I manage pests without synthetic pesticides?',
      answer: 'Organic pest management relies on integrated approaches: crop rotation, beneficial insects, physical barriers, trap crops, companion planting, and organic-approved substances like neem oil or diatomaceous earth. Prevention through biodiversity and soil health is key.'
    },
    {
      id: 'f4',
      question: 'Is organic farming more labor-intensive?',
      answer: 'Yes, organic farming typically requires more labor for practices like mechanical weed control, monitoring for pests, and implementing natural solutions. However, this can be offset by reduced costs for synthetic inputs and potentially higher market prices for certified organic products.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-600 text-white">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')",
            backgroundBlendMode: "overlay"
          }}
        ></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Organic Farming Education Hub</h1>
            <p className="text-xl mb-8">Empowering farmers and consumers with knowledge about organic practices and products</p>
            <div className="flex flex-wrap gap-4">
              <a href="#consumer" className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition duration-300">
                For Consumers
              </a>
              <a href="#farmer" className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-lg font-medium transition duration-300">
                For Farmers
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Organic Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Organic?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Organic farming and products offer numerous benefits for your health, the environment, and local communities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-8 rounded-xl">
            <div className="bg-green-600 text-white p-3 rounded-full inline-flex mb-4">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Environmental Benefits</h3>
            <p className="text-gray-600">Organic farming practices promote biodiversity, improve soil health, and reduce pollution from synthetic chemicals.</p>
          </div>

          <div className="bg-green-50 p-8 rounded-xl">
            <div className="bg-green-600 text-white p-3 rounded-full inline-flex mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Health Benefits</h3>
            <p className="text-gray-600">Organic products are grown without synthetic pesticides and contain higher levels of certain nutrients.</p>
          </div>

          <div className="bg-green-50 p-8 rounded-xl">
            <div className="bg-green-600 text-white p-3 rounded-full inline-flex mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Community Support</h3>
            <p className="text-gray-600">Buying organic supports local farmers and promotes sustainable agricultural practices in your community.</p>
          </div>
        </div>
      </div>

      {/* For Consumers Section */}
      <div id="consumer" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">For Consumers</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Learn how to identify genuine organic products and make informed choices.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-green-600">How to Identify Organic Products</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <BookOpen size={16} />
                  </span>
                  <div>
                    <p className="font-medium">Look for certification labels</p>
                    <p className="text-gray-600">Authentic organic products carry official certification labels from recognized organizations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <BookOpen size={16} />
                  </span>
                  <div>
                    <p className="font-medium">Check the PLU code</p>
                    <p className="text-gray-600">Organic produce typically has a 5-digit PLU code starting with 9.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <BookOpen size={16} />
                  </span>
                  <div>
                    <p className="font-medium">Research the producer</p>
                    <p className="text-gray-600">Learn about the farming practices of the producers you buy from.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Benefits of Organic Consumption</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <BookOpen size={16} />
                  </span>
                  <div>
                    <p className="font-medium">Reduced exposure to pesticides</p>
                    <p className="text-gray-600">Organic farming prohibits the use of synthetic pesticides, reducing your exposure to these chemicals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <BookOpen size={16} />
                  </span>
                  <div>
                    <p className="font-medium">Higher nutritional value</p>
                    <p className="text-gray-600">Some studies suggest organic foods may contain higher levels of antioxidants and certain nutrients.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                    <BookOpen size={16} />
                  </span>
                  <div>
                    <p className="font-medium">Better taste</p>
                    <p className="text-gray-600">Many people report that organic fruits and vegetables have better flavor and taste.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Consumer FAQs */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-green-600 text-center">Consumer FAQs</h3>
            <div className="space-y-4">
              {consumerFaqs.map((faq) => (
                <div key={faq.id} className="border border-green-100 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left bg-white hover:bg-green-50 flex justify-between items-center transition duration-200"
                    onClick={() => toggleConsumerFaq(faq.id)}
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    {openConsumerFaqs[faq.id] ? (
                      <ChevronUp className="h-5 w-5 text-green-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-green-600" />
                    )}
                  </button>
                  {openConsumerFaqs[faq.id] && (
                    <div className="px-6 py-4 bg-green-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* For Farmers Section */}
      <div id="farmer" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">For Farmers</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Resources and information to help you transition to and succeed with organic farming.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="bg-green-50 p-8 rounded-xl mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white p-2 rounded-full mr-4">
                    <Sprout size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Getting Started with Organic Farming</h3>
                </div>
                <p className="text-gray-600 mb-4">Transitioning to organic farming requires planning and patience. Here are some key steps:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Understand organic certification requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Develop a transition plan (typically 3 years)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Learn about natural pest management techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Implement soil building practices</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white p-2 rounded-full mr-4">
                    <DollarSign size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Economic Benefits</h3>
                </div>
                <p className="text-gray-600 mb-4">Organic farming can be financially rewarding:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Premium prices for certified organic products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Reduced input costs over time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Access to growing market segments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Potential for government subsidies and support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-green-600">Organic Farming Techniques</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2">Soil Management</h4>
                <p className="text-gray-600 mb-3">Healthy soil is the foundation of organic farming:</p>
                <ul className="space-y-2 text-gray-600 ml-5">
                  <li className="list-disc">Use of cover crops to prevent erosion and add nutrients</li>
                  <li className="list-disc">Crop rotation to maintain soil fertility</li>
                  <li className="list-disc">Composting to recycle organic matter</li>
                  <li className="list-disc">Minimal tillage to preserve soil structure</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-lg mb-2">Natural Pest Management</h4>
                <p className="text-gray-600 mb-3">Control pests without synthetic chemicals:</p>
                <ul className="space-y-2 text-gray-600 ml-5">
                  <li className="list-disc">Beneficial insects and biological controls</li>
                  <li className="list-disc">Trap crops and companion planting</li>
                  <li className="list-disc">Physical barriers and traps</li>
                  <li className="list-disc">Natural repellents and organic-approved substances</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">Water Conservation</h4>
                <p className="text-gray-600 mb-3">Efficient water use is crucial:</p>
                <ul className="space-y-2 text-gray-600 ml-5">
                  <li className="list-disc">Drip irrigation systems</li>
                  <li className="list-disc">Mulching to retain moisture</li>
                  <li className="list-disc">Rainwater harvesting</li>
                  <li className="list-disc">Drought-resistant crop varieties</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Farmer FAQs */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-green-600 text-center">Farmer FAQs</h3>
            <div className="space-y-4">
              {farmerFaqs.map((faq) => (
                <div key={faq.id} className="border border-green-100 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left bg-white hover:bg-green-50 flex justify-between items-center transition duration-200"
                    onClick={() => toggleFarmerFaq(faq.id)}
                  >
                    <span className="font-medium text-lg">{faq.question}</span>
                    {openFarmerFaqs[faq.id] ? (
                      <ChevronUp className="h-5 w-5 text-green-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-green-600" />
                    )}
                  </button>
                  {openFarmerFaqs[faq.id] && (
                    <div className="px-6 py-4 bg-green-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Resources</h2>
            <p className="max-w-3xl mx-auto opacity-90">Expand your knowledge with these valuable resources on organic farming and products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Online Courses</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2">→</span>
                  <span>Introduction to Organic Farming</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span>
                  <span>Organic Certification Process</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span>
                  <span>Natural Pest Management</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span>
                  <span>Soil Health and Management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Recommended Books</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2">→</span>
                  <span>The Organic Farmer's Handbook</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span>
                  <span>Soil Biology and Organic Farming</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span>
                  <span>Organic Pest Control Made Easy</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span>
                  <span>The Consumer's Guide to Organic Food</span>
                </li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Webinars & Workshops</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2">→</span>
                  <span>Monthly Organic Farming Webinars</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span>
                  <span>Seasonal Growing Workshops</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span>
                  <span>Organic Market Trends Analysis</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">→</span>
                  <span>Consumer Awareness Sessions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-block bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-medium transition duration-300">
              Browse All Resources
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Find answers to common questions about organic farming and products.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">What makes a product truly organic?</h3>
              <p className="text-gray-600">Organic products are grown and processed without synthetic fertilizers, pesticides, hormones, or GMOs. They must meet strict certification standards that verify these practices.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">How long does it take to transition to organic farming?</h3>
              <p className="text-gray-600">The transition period typically takes 3 years, during which time farmers must follow organic practices but cannot yet sell their products as certified organic.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Are organic products more nutritious?</h3>
              <p className="text-gray-600">Some studies suggest organic products may contain higher levels of certain nutrients and antioxidants, though research is ongoing. They do typically contain fewer pesticide residues.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Is organic farming more expensive?</h3>
              <p className="text-gray-600">Initial costs can be higher during transition, but many organic farmers report lower input costs over time and premium prices for their products, potentially leading to better profitability.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest organic farming tips, research, and market trends.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationHub;