import React from "react";
import data_product from "../db/figuredb";
import Item from '../Item/Item'
import Filter from "../Filter.js";
import ButtonMenu from "../Assets/ButtonMenu.js";
import SearchIcon from "../Assets/SearchIcon.js";
  const Home = () => {
  const list = [1,2,3,4]
  const filterList = [
  {
  title: "fandom",
  list: ["anime","marvel","game","harry potter"] }]
  return (
    <>
      <div className="HP d-flex flex-row h-100">
        <div className="side-menu d-flex flex-column flex-shrink-0 p-3" style={{ width: "240px" }}>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item"><ButtonMenu name="Home" /></li>
            <li><ButtonMenu name="Showcase" /></li>
            <li><ButtonMenu name="Sell" /></li>
          </ul>
        <hr/>
          { filterList.map((f) => (<Filter title={f.title} list={f.list} />)) }
          
        </div>
        
        <div className="marketplace">
          <form className="d-flex my-3" role="search">
            <input className="form-control m-2" type="search" placeholder="find your favorite figure" aria-label="Search" />
            <button className="btn btn-primary m-2 " type="submit"><SearchIcon/></button>
          </form>
          <div className='banner flex-col text-center mx-auto'style={{width: '500px'}} >
            <div id="carouselExample" class="carousel slide"  >
              <div class="carousel-inner" >
                <div class="carousel-item active"  >
                  <img src="https://pailin.voicetv.co.th/assets/aW1hZ2UvMjAyMS0xMS83NDViYjFiOGVmN2E0Y2QxYTkzNDI3NWI2Y2U3MmY0OS5qcGc=" class="d-block w-100"/>
                </div>
                <div class="carousel-item"  >
                  <img src="https://thematter.co/wp-content/uploads/2023/02/%E0%B8%AD%E0%B8%B4%E0%B9%88%E0%B8%A1-6.jpg" class="d-block w-100"/>
                </div>
                <div class="carousel-item" >
                  <img src="https://themomentum.co/wp-content/uploads/2022/01/web-resizee5-4-1024x704.jpg" class="d-block w-100"/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          
          
          <p class="item w-100 bg-danger mx-auto text-left">New Items</p>
          <div>
            <div className='new-item d-flex flex-row h-100'>
                {list.map( () => {
                  return (<Item/>)
                })}
            </div>  
            <div>
          <h1>All Item</h1>
          <div className="item-container">
            {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} price={item.price} thumb={item.thumb}/>
            })}
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Home;
