function StockService() {
    
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const STOCK_ROUTE = process.env.REACT_APP_STOCK_ROUTE;
    const serverURL = SERVER_URL + "/" + STOCK_ROUTE;

    const getItems = () => {
        return fetch(serverURL)
        .then(response => response.json())
        .catch(error => {
            alert("Failed to get data, please try again")
            console.log(error);
        })
    }

    const getHistoricalData = (name) => {
        return fetch(serverURL + "/" + name)
        .then(response => response.json())
        .catch(error => {
            alert("Failed to get data, please try again")
        })
    }

    return {
        getItems: getItems,
        getHistoricalData: getHistoricalData
    }
}

export default StockService;