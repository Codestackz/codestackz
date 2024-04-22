import Carousel from './../components/carousel/carousel'
import Services from './../components/services/services'
import Chooseus from "../components/chooseus/chooseus";
import ContactusForm from './../components/form/contactus'
import TabTitle from './generalFunctions'
import Faqs from '../components/faqs/faqs'

const Home = () => {

  TabTitle("Home | codestackz.in")

  return (
    <>
      <Carousel />
      <Services />
      <Chooseus/>
      <ContactusForm />
      <Faqs />
    </>
  )
}

export default Home;