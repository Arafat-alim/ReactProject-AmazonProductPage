
import classes from './App.module.css';
import React, { Component } from 'react';
// import ProductData from './ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview'
import TopBar from './Topbar/Topbar';
import ProductData from './Utils/ProductData';

class App extends Component {
  state = {
    productData : ProductData,
    // currentPreviewImage : 'https://imgur.com/xSIK4M8.png',
    currentPreviewImagePosition : 0, 
    showHeartBeatSection: false,
  }

 //making a functionality to onclickcoloroption change = watch changing feature
 onColorOptionClick = (pos) => {
   const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl;
   console.log(updatedPreviewImage)
   this.setState({currentPreviewImagePosition: pos});
 }

 //onfeatureItemClick
 onFeatureItemClick = (pos) => {
  // console.log(pos);
  let updatedState = false;
  if(pos === 1){
    updatedState = true;
  }
  this.setState({showHeartBeatSection: updatedState});
 }
   

 render() {
  return (
    <div className="App">
      <TopBar/>
  
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <ProductPreview currentPreviewImage = {this.state.productData.colorOptions[this.state.currentPreviewImagePosition].imageUrl} showHeartBeatSection={this.state.showHeartBeatSection} />
        </div>


        <div className={classes.ProductData}>
          <ProductDetails data={this.state.productData} currentPreviewImagePosition={this.state.currentPreviewImagePosition} onColorOptionClick={this.onColorOptionClick} onFeatureItemClick={this.onFeatureItemClick} showHeartBeatSection={this.state.showHeartBeatSection} />
        </div>
      </div>
    </div>
  );
 }
  
}

export default App;
