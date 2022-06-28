import React, { Component }  from 'react';
import Home from './routes/home/home.component'
import Categories from './components/categories/category'
import {Routes, Route} from 'react-router-dom'

import Navigation from './components/navigation/navigation';
import Chair from './routes/collections/chair/chair'
import Table from './routes/collections/tables/table'
import Bed from './routes/collections/bed/bed'
import Contacts from './components/contacts/contacts'
import {Cart} from './components/cart/cart'
import Submission from './components/submission/submission';


const App = () => {
return (
  <Routes>

   <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='categories' element={<Categories/>} />
      <Route path='cart' element={<Cart />} />
      <Route path='submission' element={<Submission/>} />
      <Route path='chairs' element={<Chair/>} />
      <Route path='tables' element={<Table/>} />
      <Route path='beds' element={<Bed/>} />
      <Route path='shelves' element={<Categories/>} />
      <Route path='kitchen' element={<Categories/>} />

    
  </Route>

  </Routes>
  
)
};

export default App;

