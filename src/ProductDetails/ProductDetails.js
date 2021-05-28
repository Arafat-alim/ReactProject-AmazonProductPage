import React from 'react';

import classes from './ProductDetails.module.css';

// import ProductData from './ProductData';

const ProductDetails = (props) => {
    console.log(props.data);
    const colorOption = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.ProductImage]
        if (pos === props.currentPreviewImagePosition){
            classArr.push(classes.SelectedProductImage);
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} 
            onClick={() => props.onColorOptionClick(pos)}/>
        );
    })

    const FeatureList = props.data.featureList.map((item, pos) => {
        const classArr = [classes.FeaturedItem];
        if(pos === 1 && props.showHeartBeatSection){
            classArr.push(classes.SelectedFeaturedItem);
        } else if(pos === 0 && !props.showHeartBeatSection){
            classArr.push(classes.SelectedFeaturedItem);
        }
        return(
            <button key={pos} onClick={() => props.onFeatureItemClick(pos)}  className={classArr.join(' ')}>{item}</button>
        );
    })


    return(
        <div>
            <h2 className={classes.ProductTitle}>{props.data.title}</h2>
          <p className={classes.ProductDescription}>{props.data.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            {/* <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Red Colored Strip"/>
            <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Colored Strip"/>
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Colored Strip"/>
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Colored Strip"/> */}
            {colorOption}
          </div>
          <h3 className={classes.SectionHeading}>Feature</h3>
          <div>
            {/* <button className={[classes.FeaturedItem, classes.SelectedFeaturedItem].join(' ')}>Time</button>
            <button className={classes.FeaturedItem}>Heart Beat</button> */}
            {FeatureList}
          </div>

          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>
    );
}
export default ProductDetails;