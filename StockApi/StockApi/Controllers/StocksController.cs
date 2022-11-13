using Microsoft.VisualBasic.FileIO;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Results;

namespace StockApi.Controllers
{
    public class StocksController : ApiController
    {
        // GET api/Stocks
        public JsonResult<string[]> Get()
        {
            string[] stocks = new string[] { "AAPL", "AMZN", "BA", "BAC", "F", "GOOG", "KO", "LMT", "MCD", "MSFT", "SPY" };
            return Json(stocks);
        }

        // GET api/Stocks/{name}
        public List<string[]> GetHistoricalData(string name)
        {
            string filePath = $"C:\\Users\\user\\OneDrive\\שולחן העבודה\\HomeProject\\StockApi\\stocks\\{name}.csv";
            List<string[]> table = new List<string[]>();

            using (TextFieldParser group_parser = new TextFieldParser(filePath))
            {
                group_parser.TextFieldType = FieldType.Delimited;
                group_parser.SetDelimiters(",");

                while (!group_parser.EndOfData)
                {
                    table.Add(group_parser.ReadFields());
                }
            }
            return table;
        }
    }
}