import React from "react";
import data_product from "../db/figuredb";
import Item from '../Item/Item'
import Filter from "../Filter.js";
import ButtonMenu from "../Assets/ButtonMenu.js";
import SearchIcon from "../Assets/SearchIcon.js";
  const Home = () => {
  const list = [1,2,3,4]
  const filterList = [
import React, { useContext } from "react";
import { useState, useEffect } from 'react';
import Item from '../components/Item.js'
import Filter from "../components/Filter.js";
import ButtonMenu from "../components/icon/ButtonMenu.js";
import SearchIcon from "../components/icon/SearchIcon.js";
import { ShopContext } from "../components/ShopContext.js"
const filterList = [
  {
  title: "fandom",
  list: ["anime","marvel","game","harry potter"] }]
    title: "Series",
    list: ["Elden Ring","Resident Evil","SPY X FAMILY","My Hero Academia", "Harry Potter", "Loki"] 
  },
  {
    title: "Figure Type",
    list: ["Chibi Figures", "Nendoriod", "Statues", "Prize Figures", "Scale Figures", "Action Figures"] 
  },
  {
    title: "Manufacturer",
    list: ["Bandai","PureArts","Kotobukiya","Good Smile Company", "Banpresto", "MegaHouse", "FuRyu"] 
  },
  {
    title: "Fandom",
    list: ["Anime","Marvel","Game","Harry Potter"] 
  }
]



export default function () {
  const [ filteredFigure, setFilteredFigure ] = useState([])
  const [ filteredTags, setFilteredTags ] = useState([])
  const [ filteredSeries, setFilteredSeries ] = useState([])
  const [ filteredType, setFilteredType ] = useState([])
  const [ filteredManu, setFilteredManu ] = useState([])
  const { data_product } = useContext(ShopContext)
  const [ searchItem, setSearchItem ] = useState([])
    const allFigure = data_product

  function filterHandler (isChecked,tag, title) {
    //switch case
    switch (title) {
      case 'Fandom':
        if (isChecked) {
          setFilteredTags(tags => [...tags , tag])
        } else {
          setFilteredTags(tags => tags.filter(e => e !== tag))
        }
        break;
      case 'Figure Type':
        if (isChecked) {
          setFilteredType(tags => [...tags , tag])
        } else {
          setFilteredType(tags => tags.filter(e => e !== tag))
        }
        break;
      case 'Manufacturer':
        if (isChecked) {
          setFilteredManu(tags => [...tags , tag])
        } else {
          setFilteredManu(tags => tags.filter(e => e !== tag))
        }
        break;
      case 'Series':
        if (isChecked) {
          setFilteredSeries(tags => [...tags , tag])
        } else {
          setFilteredSeries(tags => tags.filter(e => e !== tag))
        }
        break;  
    }
  }

  useEffect( () => {
    setFilteredFigure( () => {
      return allFigure.filter(figure => {
        let isTags = true
        let isType = true
        let isSeries = true
        let isManu = true
        let isSearch = true
        if (filteredTags.length > 0) {
          isTags = filteredTags.every(tag => figure.tags.includes(tag))
        }
        if (filteredSeries.length > 0) {
          isSeries = filteredSeries.every(tag => figure.series === tag)
        }
        if (filteredType.length > 0) {
          isType = filteredType.every(tag => figure.tags.includes(tag))
        }
        if (filteredManu.length > 0) {
          isManu = filteredManu.every(tag => figure.manufacturer === tag)
        }
        if (searchItem != '') {
          isSearch = figure.name.toLowerCase().includes(searchItem.toLowerCase())
        }
        return isManu && isSeries && isTags && isType && isSearch
      })
    })
  },[filteredTags,filteredSeries,filteredType,filteredManu,searchItem])

  function textHandler(e) {
    setSearchItem(()=> e.target.value)
  }

  return (
    <>
      <div className="HP d-flex flex-row h-100">
        <div className="side-menu d-flex flex-column flex-shrink-0 p-3" style={{ width: "240px" }}>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item"><ButtonMenu name="Home" /></li>
            <li><ButtonMenu name="Showcase" /></li>
            <li><ButtonMenu name="Sell" /></li>
            <li key="home"><ButtonMenu name="Home" /></li>
            <li key="showcase"><ButtonMenu name="Showcase" /></li>
            <li key="sell"><ButtonMenu name="Sell" /></li>
          </ul>
        <hr/>
          { filterList.map((f) => (<Filter title={f.title} list={f.list} />)) }
          { filterList.map((f) => (<Filter key={ f.title } title={f.title} list={f.list} filterHandler={filterHandler}/>)) }

        </div>

        <div className="marketplace">
          <form className="d-flex my-3" role="search">
            <input className="form-control m-2" type="search" placeholder="find your favorite figure" aria-label="Search" />
            <button className="btn btn-primary m-2 " type="submit"><SearchIcon/></button>
            <input className="form-control my-2 mx-4" value={searchItem} type="text" placeholder="find your favorite figure" aria-label="Search" onChange={textHandler}/>
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

            <div className="p-4 pt-0">
              <p className="item w-100 mt-3 fw-semibold fs-4  text-left">All Item</p>
              <hr />
              <div className="item-container d-flex flex-row overflow-auto flex-wrap w-100" style={{width: "95%"}}>
                    {
                      // filteredTags.length === 0 ? allFigure.map( e => (<Item name={ e.name } id={ e.id } price={ e.price } thumb={ e.imgs[0] }/>))
                      filteredFigure.map(e => (<Item name={ e.name } id={ e.id } price={ e.price } thumb={ e.imgs[0] }/>))
                    }
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
}
