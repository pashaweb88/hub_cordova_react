import React from 'react';
import { BackIcon } from '../../../icons/BackIcon';
import { IApp } from '../types/app';
declare const window:any;
declare const cordova:any;
interface StoreDetailProps {
    el:IApp | null;
    backHandler():void
}

export const StoreDetail:React.FC<StoreDetailProps> = ({el,backHandler}) => {

    

    if (!el) {
        return <p>asd</p>
    }
    
    const clickHandler = () => {
        if (window.cordova) {
            window.ref = cordova.InAppBrowser.open(el.apkurl, '_system', 'location=no,zoom=no');
        }
    }

    

    


    return (
        <div className="store-detail">
            <div className="sd-top" onClick={backHandler}>
                <div className="sd-top-icon">
                    <BackIcon />
                </div>
                <div className="sd-top-text">
                    All games 
                </div>
            </div>

            <div 
                className="sd-poster" 
                style={{backgroundImage:`url(${el.posterurl})`}}
            >
                <div className="sd-poster-overlay"></div>

                
            </div>
            <div className="sd-info">
                <div className="sd-info-title">
                    {el.title}
                </div>
                <div className="sd-info-button">
                    <button onClick={clickHandler}>install</button>
                </div>
            </div>
        </div>
    )
}