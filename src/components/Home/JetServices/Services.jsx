import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

// Import images for each tab
import Img from '../JetServices/JetImg/img.jpg';
import Img1 from '../JetServices/JetImg/leg.jpg';
import Img2 from '../JetServices/JetImg/helicopter.jpg';
import Img3 from '../JetServices/JetImg/concierge.jpg';
import Img4 from '../JetServices/JetImg/trans.jpg';
import Img5 from '../JetServices/JetImg/card.jpg';


function CharterJetTabs() {
    const [activeTab, setActiveTab] = useState('private-jet');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const getImage = () => {
        switch (activeTab) {
            case 'empty-leg':
                return Img1;
            case 'helicopter':
                return Img2;
            case 'concierge':
                return Img3;
            case 'air-cargo':
                return Img4;
            case 'jet-cards':
                return Img5;
            default:
                return Img;
        }
    };

    return (
        <div className="my-8 lg:px-12 w-full h-auto">
            <div>
                <h1 className="text-5xl font-semibold text-center text-[#0b2545]">
                    Our Rental Services
                </h1>

                {/* Nav tabs */}
                <div className="/lg:mx-4 md:px-12 mt-8  flex flex-wrap justify-center md:justify-start space-y-2 md:space-y-2">
                    <button
                        className={`w-full md:w-[15%] h-16 ${activeTab === 'private-jet' ? 'bg-[#FF6D2E] text-white' : 'bg-gray-300 text-black'} md:mt-2 mx-2 lg:mx-1`}
                        onClick={() => handleTabClick('private-jet')}
                    >
                        Private Jet Rental
                    </button>
                    <button
                        className={`w-full md:w-[15%] h-16 ${activeTab === 'empty-leg' ? 'bg-[#FF6D2E] text-white' : 'bg-gray-300 text-black'} md:mt-2 mx-2 lg:mx-1`}
                        onClick={() => handleTabClick('empty-leg')}
                    >
                        Empty Leg Flights
                    </button>
                    <button
                        className={`w-full md:w-[15%] h-16 ${activeTab === 'helicopter' ? 'bg-[#FF6D2E] text-white' : 'bg-gray-300 text-black'} md:mt-2 mx-2 lg:mx-1`}
                        onClick={() => handleTabClick('helicopter')}
                    >
                        Helicopter Rental
                    </button>
                    <button
                        className={`w-full md:w-[15%] h-16 ${activeTab === 'concierge' ? 'bg-[#FF6D2E] text-white' : 'bg-gray-300 text-black'} md:mt-2 mx-2 lg:mx-1`}
                        onClick={() => handleTabClick('concierge')}
                    >
                        Concierge Services
                    </button>
                    <button
                        className={`w-full md:w-[15%] h-16 ${activeTab === 'air-cargo' ? 'bg-[#FF6D2E] text-white' : 'bg-gray-300 text-black'} md:mt-2 mx-2 lg:mx-1`}
                        onClick={() => handleTabClick('air-cargo')}
                    >
                        Air Cargo Transports
                    </button>
                    <button
                        className={`w-full md:w-[15%] h-16 ${activeTab === 'jet-cards' ? 'bg-[#FF6D2E] text-white' : 'bg-gray-300 text-black'} md:mt-2 mx-2 lg:mx-1`}
                        onClick={() => handleTabClick('jet-cards')}
                    >
                        Private Jet Cards
                    </button>
                </div>

                {/* Tab content */}
                <div className="tab-content mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-4 md:px-12">
                        <div>
                            <h1 className="text-4xl font-semibold text-[#0b2545]">
                                {activeTab === 'private-jet' && 'Private Jet Rental'}
                                {activeTab === 'empty-leg' && 'Empty Leg Flights'}
                                {activeTab === 'helicopter' && 'Helicopter Rental'}
                                {activeTab === 'concierge' && 'Concierge Services'}
                                {activeTab === 'air-cargo' && 'Air Cargo Transports'}
                                {activeTab === 'jet-cards' && 'Private Jet Cards'}
                            </h1>
                            <p className="text-base text-gray-800 pt-8 pe-6">
                                {activeTab === 'private-jet' && (
                                    <>
                                        <b>SkyCharter</b> offers the best private jet charter experience anywhere worldwide. On a private jet rental with Charter Jet One – the sky is the limit. When it comes to travel, whether for personal or business, a charter jet rental is the way to go. Private jet charter New York to Europe to elevate your travel experience with our exclusive services. Our charter planes will provide you and your passengers with utmost privacy, safety, luxury, style, and comfort that simply cannot be matched. With the evolution of luxury private jets, private jet rentals no longer only belong to just the rich and famous! At Charter Jet One, we cater to a large range of clientele, giving you a luxurious private jet experience with our large fleet of charter planes time after time. Our exclusive jet selection includes the best business jets in the world and a variety of aircraft sizes, such as turboprops, midsize and jumbo jets. Charter a private jet today!
                                    </>
                                )}
                                {activeTab === 'empty-leg' && (
                                    <>
                                        Looking for an affordable method to charter a private jet? Save on cheap private flights with empty leg charters from Charter Jet One. Empty leg flights cost much less than traditional private jet charters. Empty leg flights have become increasingly popular in the world of private jet rentals for the flexible and savvy traveler looking to rent a jet. Empty legs are the return portion of booked one-way private charter flights. The charter plane needs to fly empty to pick up its next client or to return to its home base. Although private jet charter operators try to avoid flying empty, a total of 30% of all private planes still do, creating substantial inventory of empty leg flights. They are a great way to get cheap private jet flights at much lower costs than a standard private jet rental. Our empty leg charter prices are for the entire jet so you can bring as many passengers as the jet can seat! Save on a jet rental with our empty leg flights!
                                    </>
                                )}
                                {activeTab === 'helicopter' && (
                                    <>
                                       <b>SkyCharter</b> offers private helicopter rentals from some of the best helicopter operators, so you can rest assured knowing that you’re in safe hands! A private helicopter charter is convenient for traveling short distances and for an intimate experience including helicopter site-seeing tours. With our intelligently designed fleet, you will feel confident that you will reach your final destination with comfort and ease with a rental helicopter. Learn about how to choose the best private helicopter for your trip. Our helicopter rentals offer a wide variety of advantages from making a great first impression by traveling in style to getting to your destination faster and the versatility of being able to land in remote locations. Let our team help you charter a private jet or helicopter today!
                                    </>
                                )}
                                {activeTab === 'concierge' && (
                                    <>
                                        If you are going to indulge in a private jet rental, you deserve the best transportation, food, and service to go along with your flight. Travel luxuriously in the private jet rental of your choice while sipping on your favorite wine and eating from your favorite restaurant. We offer full service planning for your entire travel experience – from transportation to your charter plane and security to catering and onboard entertainment. Our wide variety of knowledge and expertise expands beyond just procuring your private jet rental. Our Corporate Concierge Service has unparalleled excellence with a dedication to service that has redefined private jet rental. We are redefining the flight industry by offering our valued clients our signature amenities with private catering so you can dine in elegance, conduct business, or simply relax if you choose. Use our concierge services to charter a private jet today!
                                    </>
                                )}
                                {activeTab === 'air-cargo' && (
                                    <>
                                        <b>SkyCharter</b> understands the logistics of handling all types of air cargo and freight jet charter delivery. From critical mechanical parts, to hazardous materials, we transport high-value items with secure ground-air-ground transport requirements. Our air cargo transport services protect you, your business and your shipments to ensure smooth and efficient delivery.
                                    </>
                                )}
                                {activeTab === 'jet-cards' && (
                                    <>
                                        We offer special high-class services when you rent a private jet with our Jet Card. The Charter Jet One Jet Card empowers our clientele to travel in a more exclusive manner, all while earning rewards. And who doesn’t like rewards? You’ll get rewarded every time you fly on one of our private jets with the exclusive privileges we offer for our loyal clientele. Our Jet Card funds never expire and the balance is fully refundable. When you charter a private jet with your Jet Card, you can travel worldwide on our private planes with guaranteed availability and no blackout date. Becoming a member today with the Charter Jet One card and gain access to our unbeatable service offerings and rewards.
                                    </>
                                )}
                            </p>
                            <button className="bg-[#001DB0] w-full text-lg sm:text-xl md:text-2xl lg:text-lg md:w-3/5 md:font-semibold rounded-sm h-12 mt-12 font-semibold text-white hover:bg-blue-600">
                                Learn More
                            </button>
                        </div>
                        <div>
                            <img src={getImage()} alt="Charter Jet" className="lg:w-[87%] w-full h-[87%] sm:flex-col object-cover " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharterJetTabs;
