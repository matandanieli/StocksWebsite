import { useEffect, useState } from "react";
import StockService from "../../services/stockService";
import ReactPaginate from "react-paginate";
import styles from '../historical-data/historicalData.css'

function HistoricalData(props) {

    const [data, setData] = useState([]);
    const stockService = StockService();
    const [page, setPage] = useState(0);
    const stocksPerPage = 15;
    const numberOfRecordsVisited = page*stocksPerPage;
    const totalPages = Math.ceil(data.length / stocksPerPage);

    useEffect(()=>{
        if (props.stock === undefined){
            stockService.getHistoricalData("AAPL")
            .then(data => {
                setData(data)
            })
        }
        else {
        stockService.getHistoricalData(props.stock)
        .then(data =>{
            setData(data)
        })}
    }, [])

    const changePage = ({selected}) => {
        setPage(selected);
    };
    
    const displayStocks = Array.from(data)
    .slice(
        numberOfRecordsVisited,
        numberOfRecordsVisited + stocksPerPage
    )

    function getHeadings() {
        return displayStocks[0];
    }

    return (
        <div>
            <table className="table-bordered">
                    <thead>
                        {Array.from(getHeadings).map((heading, key) => {
                            return (<tr key={key}>
                                        <th className="heading">{heading}</th>
                                    </tr>)
                        })}
                    </thead>
                    <tbody>
                    {displayStocks.map((row, key) => {
                        return (<tr key={key}>
                                        {
                                            Array.from(row).map((val, key) => {
                                                return <td key={key}>{val}</td>
                                            })
                                        }
                                </tr>)
                    })}
                    </tbody>
            </table>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={totalPages}
                onPageChange={changePage}
                containerClassName={"navigationButtons"}
                previousLinkClassName={"previousButton"}
                nextLinkClassName={"nextButton"}
                disabledClassName={"navigationDisabled"}
                activeClassName={"navigationActive"}
            />
        </div>
    );
}

export default HistoricalData;