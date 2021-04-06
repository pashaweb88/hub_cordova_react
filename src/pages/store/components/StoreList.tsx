import React, { useEffect } from 'react';
import { useStoreAction } from '../../../hooks/useAction';
import { useTypeSelector } from '../../../hooks/useTypeSelector';
import { IApp } from '../types/app';
import { StoreItem } from './StoreItem';

interface StoreListProps {
    detailHandler(el:IApp):void
}
export const StoreList:React.FC<StoreListProps> = ({detailHandler}) => {

    const {apps, error, loading} = useTypeSelector(state => state.apps);
    const {fetchApps} = useStoreAction();
    
    useEffect(() => {
        fetchApps();
    }, []);

    if (loading) return <p>loading</p>

    if (error) return <p>error</p>
    return (
        <div className="store-wrapper">
            {apps.map((el:IApp,i) => {
                return (
                    <StoreItem key={i} el={el} clickMore={detailHandler}  />
                )
            })}
        </div>
    )
}