import React, { useReducer } from "react";
import StockService from '../../services/stockService';
import { useState, useEffect } from "react";
import styles from '../stock-list/stockList.css';
import HistoricalData from "../historical-data/historicalData";
import Select from 'react-select';

function StockList(){

    const [stocks, setStocks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const stockService = StockService();
    const [selected, setSelected] = useState();
    const [isClick, setIsClick] = useState(false);
    
    useEffect(()=>{
        setIsLoading(true);
        stockService.getItems()
        .then(data =>{
            setIsLoading(false)
            setStocks(data)
        })
    }, []);

    const handleChange = (value) => {
        if (isClick){
            setSelected(value);
            setIsClick(false)
        }
        else {
            setSelected(value);
            setIsClick(true);
        }
    };

    return (
        <div>
            <header className="text-center">
            <h1 className="text-uppercase">Stocks:</h1>
            <p><strong>Here you can see all the available stocks right now:</strong></p>
            </header>
            <section className="text-center">
            {isLoading && <p>Loading...</p>}
            <h2>Choose a stock to show history:</h2>
            <Select placeholder="Choose a Stock - AAPL:" id="stock-select"
            onChange={e => handleChange(e.value)}
            options = {Array.from(stocks).map((stock) => {
                return {
                    value: stock,
                    label: stock
                };}
            )}>
            </Select>
            {isClick && <HistoricalData stock={selected}></HistoricalData>}
            {!isClick && <HistoricalData stock={selected}></HistoricalData>}
            </section>
        </div>
    );
}

export default StockList;

