This ReactJS project fetches real-time data from a data vender's API and provides financial analysis information about the stock market.

By choosing one of five stock symbols, the first chart will show the price, fluctuation or both in a given chart days for this chosen stock.

The data for this stock will be analysed further. It will be sampled, ranked and predicted by a lot of complex javascript array operations (see the source code for this logic [**here**](https://github.com/LiboBearChen/stockchart/blob/master/src/components/PredictAnalyseTools.js)). The final result will be calculated and shown as four stock forecast lines in the second chart.

Select each unique stock pair from five stocks, there are totally ten pairs. These pair are ranked by their correlations in a table. A correlation stands for the degree of correlation between each two stock prices (see the source code for this logic [**here**](https://github.com/LiboBearChen/stockchart/blob/master/src/components/DataAnalyseTools.js)). For example, stock A rises 1% after one trading day while stock B rises 2%. Their correlation is the difference 1%. If stock B falls 2%, their correlation is the difference 3%. So the first case is more relevant. The final correlations for each pair are listed as "Index" in the table. By choosing each pair, the correlation history will be shown in the last chart.
