import { Routes, Route } from "react-router-dom";

import{Home} from "../pages/client/Home"
import{Details} from "../pages/client/Details"
import{Purchases} from "../pages/client/Purchases"
import{Favorites} from "../pages/client/Favorites"
import{Profile} from "../pages/client/Profile"
import{Address} from "../pages/client/Address"
import{Payment} from "../pages/client/Payment"
import{Buy} from "../pages/client/Buy"
import{RequestDetails} from "../pages/client/RequestDetails"



export function AppRoutes(){

  return(
    
    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/details/:id" element ={<Details />}/>
      <Route path="/purchases" element ={<Purchases />}/>
      <Route path="/favorites" element ={<Favorites />}/>
      <Route path="/profile" element ={<Profile />}/>
      <Route path="/address" element ={<Address />}/>
      <Route path="/payment" element ={<Payment />}/>
      <Route path="/buy" element ={<Buy />}/>
      <Route path="/requestDetails/:id" element ={<RequestDetails />}/>
    </Routes>
  )
}