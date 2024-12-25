import { useState } from 'react';
import {data} from './data'
import Product from './Product';
export default function Products() {
  const [category, setCategory] = useState('');
  const filter = (category) => {
    if (!category) {
      return data

    }
    return data.filter(el => el.category === category)

  }
  const displayProduct = filter(category).map((el,index)=> <Product element={el} key={index} />)
  console.log(data);

  return (
    <>
    <ul>
      {displayProduct}
    </ul>
    <select name="" id="" onChange={(e)=>setCategory(e.target.value)}>
      <option value='' selected>ALL</option>
      <option value={"Furniture"}>Furniture</option>
      <option value={"Electronic"} >Electronic</option>
    </select>
    </>
  )
};
