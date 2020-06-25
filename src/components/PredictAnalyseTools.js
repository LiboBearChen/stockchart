export const makeDiffPercenChart = (dataArr, chartDays) => {

    let returnedArr = [];

    for (let m = 0; m < dataArr.length - 1; m++) {
        
        for (let n = 1; m+n < dataArr.length; n++) {
            let tempArr = [];
            let yValues1 = makePercenArr(dataArr[m][1]);
            let yValues2 = makePercenArr(dataArr[m + n][1]);
            console.log(yValues1);
            for (let i = 1; i < chartDays; i++) {
                let dataObj = {};
                dataObj.x = i;
                let num = yValues1[yValues1.length - 1 - i] - yValues2[yValues2.length - 1 - i];
                if (num < 0) {
                    dataObj.y = -num;
                }
                else {
                    dataObj.y = num;
                }
                dataObj.symbol1=m;
                dataObj.symbol2=m+n;
                tempArr.push(dataObj);
            }
            returnedArr.push(tempArr);
        }
    }
    
    return returnedArr;
}