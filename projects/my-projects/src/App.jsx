
import './App.css'
import TeamSection from './components/week8/wednesday/TeamMemberCard/TeamMemberCard'
import NavSection from './components/week8/thursday/watch-store/landingpage/Narvbar/NavCard'
// import products from './components/week8/thursday/watch-store/landingpage/WatchProductsCard/Products'
import ProductCard from './components/week8/thursday/watch-store/landingpage/WatchProductsCard/ProductCard'
import Footer from './components/week8/thursday/watch-store/landingpage/Footer/footer'
import Timer from './components/week8/Friday/timer'
import Registration from './components/week9/Monday-forms/Registration'
import ProductGrid from './components/week9/wednesday-filter/ProductLIst-search/Product'
import SignPrevious from './components/week9/Thursday -controlled inputs/Form'
import ProductList from './components/REVISION/PRODUCTLIST-SEARCH/Product-page/ProductList'

//USEEFFECT PROJECTS
import RandomUserCard from './components/WEEK8-USEEFFECT-PROJECTS/Random-User-Card/RandomCard'




function App() {
  return(
    <div>
     
{/*         
          <Timer/> */}

            <h1>PRODUCTLIST-SEARCH PROJECT WEEK 7</h1>
          <ProductList/>




          <h1>REGISTRATION FORM PROJECT,MARCH 9TH 2026</h1>
          <Registration/>


          <h1>SEARCH AND FILTER PROJECT PRODUCT GRID WEDNESDAY 11TH MARCH 2026</h1> 
          <ProductGrid/>

          <h1>CONTROLED INPUTS STYLING A FORM THURSDAY 12TH MARCH 2026 ASSINGMENT PROJECT</h1>
          <SignPrevious/>

          <br />
          <br />
          <h1>WEEK 8-DAY2 USEFFECT PROJECTS</h1>
          <h2>RANDOM CARD USER</h2>
          <RandomUserCard/>



      
    </div>
  )

  }
  
export default App



