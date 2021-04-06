
import React, { MouseEventHandler } from 'react';
import {IApp} from '../types/app';

interface App {
    el:IApp;
    clickMore(el:IApp):void
}
declare const window:any;
declare const cordova:any;

export const StoreItem:React.FC<App> = ({el,clickMore}) => {

    //https://dash.hentaigameshub.com/store/puzzles/01lucy/app.apk
    const imageUrl = el.posterurl;
    console.log(el)
    const mainClickHandler = () => {
        if (window.cordova) {
            
            window.ref = cordova.InAppBrowser.open("https://dash.hentaigameshub.com/?d=" + el.apkurl, '_system', 'location=no,zoom=no');
        } else {
            window.open(el.apkurl, '_blank');
        }
    }
    const moreClickHandler = () => {
        clickMore(el);
    }

    return (
        <div className="store-item">
            <div 
                className="store-item-poster"
                style={{backgroundImage:`url(${el.posterurl})`}} 
            ></div>
            <div className="store-item-title">
                {el.title}
            </div>
            <div className="store-ite-category">
                {el.category}
            </div>
            <div className="store-item-button">
                <button onClick={mainClickHandler}>Download</button>
                <button onClick={moreClickHandler}>more</button>
            </div>
        </div>
    )
}