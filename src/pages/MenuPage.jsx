import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import '../styles/MenuPage.css'
// import bergerImage from '../assets/burger.jpeg'
// import cokeImage from '../assets/coke.jpeg'
// import pepsiImage from '../assets/pepsi.jpeg'
// import friesImage from '../assets/fries.jpeg'
import Navbar from './Navbar';
import BasicModal from '../components/Modle';

const MenuPage = () => {
    const [data,setData] = useState();
    const [count, setCount] = useState(0);

    const context = createContext();

    useEffect(()=>{
    (async()=>{
       try{
        const response = await axios.get("http://localhost:3000/data");
        console.log(response.data);
        setData(response.data)
       }catch(err){
        console.log("error",err);
       }
    })()
    },[])

    const handlePlusClick = (name,price)=>{
        localStorage.setItem("name",JSON.stringify(name));
        localStorage.setItem("price",JSON.stringify(price));
        setCount(count+1)
        localStorage.setItem("count",count);
    }

    const handleClickCheckItems = ()=>{
        console.log("helo");
        <BasicModal/>
    }
    
  return (
    <div>
    <div className='main-box'>
    {data && data.map((item)=>{
        const imageURL = item.image;
            return (
                <div className='card'>
                <img src={require(`../assets/${item.image}`)} alt="Image" height={200} />
                 <div className="content">
                 <p>{item.name}</p>
                 <p>price: {item.price}</p>

                  <div className="buttons">
                  <button className='plus-btn' onClick={()=>handlePlusClick(item.name,item.price)}>+</button>
                  <button className='minus-btn'>-</button>
                  </div>
                 </div>
          </div>
            )
          })}
    </div>
    <BasicModal/>
    </div>
   
  )
}

export default MenuPage