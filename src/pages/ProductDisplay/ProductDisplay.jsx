import React from "react";
import { useEffect,useState } from "react";
import "./ProductDisplay.css";
import Nav from "../../components/Nav/Nav";


const ProductDisplay = (props) => {
    //fetch data
  const {product} = props;
  const [quantity, setQuantity] = useState(1);
  const handleAddQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleRemoveQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //if there are error occur
  console.log(product);
    if (!product) {
    return <div>Product not found</div>; // or some other fallback UI
    }
   
  return (
    <div id="wrapper">
            <header>
            <Nav topic="Product" 
                  back="https://cdn.discordapp.com/attachments/787359617280770051/1183513820220629092/3.png?ex=65889c23&is=65762723&hm=b608f4b0dafa79e069345c1fd46fb2256b13299db710a859f027b85295bcbe44&"
                  account="https://cdn.discordapp.com/attachments/787359617280770051/1183513819427913778/1.png?ex=65889c23&is=65762723&hm=285dc6cb6f325e96a63deb650d157bb45a6fddce1731e5766d15215239f0685b&"
                  cart="https://cdn.discordapp.com/attachments/787359617280770051/1183513819981549639/2.png?ex=65889c23&is=65762723&hm=db11b00f36b56189d04437dad86744125c2456a9d7e4b7e95cc617f33e2e8efb&"
                  >
                  
                  </Nav>
            </header>      
      <main id="main-product">

              <div className='row page-wrapper'>
                <div div id="content" className="large-12 col" role="main">
                  <div className="productdisplay col ">
                  {/* Left detail - image display */}
                    <div className="productdisplay-left">
                      <div className="productdisplay-img">
                        <img className="productdisplay-main-img" id="product-img" src={product.imgs[0]} alt=""/>
                        <div className="productdisplay-img-list">
                        {product.imgs.map((img, index) => (
                          <img key={index} src={img} alt={`Image ${index + 1}`} className="list-image"/>))}
                        </div>
                      </div>
                    </div> 
                  {/* Right detail */}
                    <aside className="detail">
                      <p className="name">{product.name}</p>
                      <div className="is-div"></div>
                      <bdi className="price">
                        <span className="price-symbol">฿</span>
                        {product.price}
                      </bdi>
                      <p className="des">description</p>
                      <p className="text1">{(product.description)}</p>
                      <div className="tag-cate">
                        <span>
                        <p className="text2">grading: <span>{product.preowned_grade.map((grade, index) => (
                        `item: ${grade.item}, box: ${grade.box}${index < product.preowned_grade.length - 1 ? ', ' : ''}`
                        ))}</span></p>
                        </span>
                        <span>
                          <a className="text2">category: <span>{product.category.join(', ')}</span></a>
                        </span>
                        <span>
                          <a className="text2">tags: <span>{product.tags.join(', ')}</span></a>
                        </span>
                      </div>
                      {/* Quantity controls */}
                    <div className="buy">
                      <p className="instock">In stock: {product.stock}</p>
                      <div className="select-quantity-container">
                        <button className="btn-rm" onClick={handleRemoveQuantity}>-</button>
                        <div className="quantity-container">
                          <p className="quantity">{quantity}</p>
                        </div>
                        <button className="btn-add" onClick={handleAddQuantity}>+
                        </button>
                      </div>
                      <div className="button-add-to-cart">
                        <button className="add-to-cart" type="submit">Add to cart</button>
                      </div>
                    </div>
                  </aside>
                  </div>
                  {/* other detail */}
                  <section className="col">
                    <div class="tabs__line">
                      <div class="tabs__indicator" id="selectedIndicator"></div>
                    </div>
                    <div className="tab" id="tab-container">
                      <div className="tabs-titles">
                        <button className="tablinks button-48" onClick={(event) => openTab(event, 'about')}><span>ABOUT THIS ITEM</span></button>
                        <button className="tablinks button-48" onClick={(event) => openTab(event, 'grading')}><span>GRADING SCALE</span></button>
                      </div> 
                    </div>
                    
                    <div className="tabcontent col" id="about">
                      <div className="table" >
                          <tbody>
                            <tr>
                              <td><strong>Series</strong></td>
                              <td>{product.series}</td>
                            </tr>
                            <tr>
                              <td><strong>Manufacturer</strong></td>
                              <td>{product.manufacturer}</td>
                            </tr>
                            <tr>
                              <td><strong>Specifications</strong></td>
                              <td>{product.specifications.map((specifications, index) => (<div key={index}>
                                Scale: {specifications.scale} <br />
                                Product size: {specifications.product_size} <br />
                                Weight: {specifications.weight} <br />
                                Material: {specifications.material} <br />
                              </div>))}</td>
                            </tr>
                            <tr>
                              <td><strong>Note</strong></td>
                              <td>{product.notes}</td>
                            </tr>
                            <tr>
                              <td><strong>Grading</strong></td>
                              <td>{product.preowned_grade.map((grade, index) => (<div key={index}>
                                Item: {grade.item}<br/>
                                Box: {grade.box}
                              </div>))}</td>
                            </tr>
                            <tr>
                              <td><strong>Barcode #</strong></td>
                              <td>{product.barcode}</td>
                            </tr>
                            <tr>
                              <td><strong>Release date</strong></td>
                              <td>{product.release_date}</td>
                            </tr>
                            <tr>
                              <td><strong>Release by</strong></td>
                              <td>{product.release_by}</td>
                            </tr>
                            <tr>
                              <td><strong>Brand</strong></td>
                              <td>{product.brand}</td>
                            </tr>
                            <tr>
                              <td><strong>Copyright</strong></td>
                              <td>{product.copyright.join(', ')}</td>
                            </tr>
                          </tbody>
                      </div>
                      </div>
                      {/* Grading scale */}
                        <div className="tabcontent" id="grading">
                          <h3>Item Grading</h3>
                          <div><strong>S:</strong> Like new. Figure may have been removed from box but shows no sign of wear.</div>
                          <div><strong>A:</strong> Shows minor signs of wear. May have light scratches/paint loss.</div>
                          <div><strong>B:</strong> Shows moderate wear. May have mild scratches/paint loss.</div>
                          <div><strong>C:</strong> Fairly worn. May have fairly severe scratches/paint loss.</div>
                          <div className="grade-div"></div>
                          <h3>Box Grading</h3>
                          <div><strong>S:</strong> Like new. Never opened and still manufacturer sealed.</div>
                          <div><strong>A:</strong> May have very minor wear.</div>
                          <div><strong>B:</strong> May have lightly worn corners, and/or dents.</div>
                          <div><strong>C:</strong> May have fairly worn corners, dents, and/or tears.</div>
                        </div>
                    </section> 
                    
                </div>
              </div>
              
    
      </main>
 
    </div>
    
    );
  
};


window.addEventListener('load', function () {
  const ProductImg = document.getElementById("product-img");
  const SmallImg = document.getElementsByClassName("list-image");
  for (let i = 0; i < SmallImg.length; i++) {
    SmallImg[i].onclick = function() {
      ProductImg.src = SmallImg[i].src;
    }
}});


//section tab
function openTab(evt, tabName) {
  var i, tabContent, tablinks;
  var table = document.getElementById('table')
  // Hide all tabs
  tabContent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  // Remove the "active" class from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  // Show the clicked tab
  document.getElementById(tabName).style.display = "block";
  // Add the "active" class to the clicked tab link
  evt.currentTarget.className += "active";
}
//make the first tab open by default
function DefaultTab() {
  var aboutTab = document.querySelector('.tab button:nth-child(1)'); // Select the first tab (index 0) for "ABOUT THIS ITEM"
  if (aboutTab) {
    aboutTab.click();
  }
}

window.onload = DefaultTab;
export default ProductDisplay;
