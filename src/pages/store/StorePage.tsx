import React, { useState } from 'react';
import { StoreDetail } from './components/StoreDetail';
import { StoreList } from './components/StoreList';
import { IApp } from './types/app';
import './storePage.scss';

export const StorePage = () => {
    
    const [detailEl, setDetailEl] = useState<IApp | null>(null);
    const [detailShow, setDetailShow] = useState(false);

    const detailHandler = (el:IApp) => {
        setDetailEl(el);
        setDetailShow(true);
    }
    const backHandler = () => {
        setDetailShow(false);
    }
    return (
        <div className="page store-page">
            <StoreList detailHandler={detailHandler}/>
            {detailShow && <StoreDetail el={detailEl} backHandler={backHandler} />}
        </div>
    )
}