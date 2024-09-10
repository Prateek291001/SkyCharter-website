import React from 'react'
import Carousel from '../components/Home/Carousel/Carousel'
import Form from '../components/Home/Form/Form'
import Auth from '../components/Home/Authorize/Auth';
import Blog from '../components/Home/Blogs/Blog'
import Services from '../components/Home/JetServices/Services';
import Card from '../components/Home/LastPart/card'
const slides = [
  {
    URL: 'https://charterjetone.com/wp-content/uploads/2018/02/CJ1_Header1-1.jpg', text: 'Private Jets and Charter Flights',
    body: 'Skip the hassles and headaches of commercial airline travel with a Private Jet charter flight ',
    buttonText: 'Request A Private Jet Charter Quote '
  },
  {
    URL: 'https://charterjetone.com/wp-content/uploads/2018/02/slide2.jpg', text: 'CHARTER JET RENTAL MADE EASY '
    , body: 'Elevate your travel experience and rent a private jet to take you anywhere in the world. Private jet rentals has never been easier.',
    buttonText: 'Book A Charter Jet '
  },
  {
    URL: 'https://th.bing.com/th/id/OIP.A02U87CcU6LMdV5MhePWAgHaEo?w=294&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7', text: 'RENT A HELICOPTER'
    , body: 'Enjoy a helicopter ride and watch the scenic views throughout the United States, Canada, Europe and the Caribbean or anywhere in the world.',
    buttonText: 'View Empty Leg Flights '
  },
  {
    URL: 'https://charterjetone.com/wp-content/uploads/2018/02/slide4-1.jpg', text: 'FIND A JET CHARTER '
    , body: 'A little shopping in Dubai? A romantic night in Paris? Private jet charter New York to Europe and Charter Jet One will whisk you away in style.', buttonText: 'Book A Jet Charter '
  },
];


const Home = () => {
  return (
    <>
      <Carousel slides={slides} />
      <Form />
      <Auth />
      <Blog />
    <Services />
      <Card />
    </>
  )
}

export default Home