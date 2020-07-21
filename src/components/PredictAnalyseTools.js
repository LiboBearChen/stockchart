

export const arrayCutter = (longData, cutDays) => {
    let returnedArr = [];
    let cutNum=longData[0].length/cutDays;
    let shortDataArr = [];
    let dateArray = [];
    let longDateArr=longData[0];
    let longPriceArr=longData[1];

    //at least 2 shortDatas
    if(cutNum>1){
        //i counts for shortData
        for (let i = 1; i <= cutNum; i++){
            let shortData = [];
            let dateObj = {};
            let cutArr=[];

            //cut date array 
            cutArr=longDateArr.slice(-cutDays);
            longDateArr=longDateArr.slice(0,-cutDays);
            shortData.push(cutArr);
            dateObj.startDate=cutArr[0];
            dateObj.endDate=cutArr[cutDays-1];

            //cut price array
            cutArr=longPriceArr.slice(-cutDays);
            longPriceArr=longPriceArr.slice(0,-cutDays);
            shortData.push(cutArr);

            shortDataArr.push(shortData);
            dateArray.push(dateObj);
        }
    }
    else{
        console.log("Data is not enough for analysis!");
    }
    
    //returnedArr[0] is shortDataArr, returnedArr[1] is dateArray
    returnedArr.push(shortDataArr);
    returnedArr.push(dateArray);
    
    return returnedArr;
}

export const makePredictDataSourceArr = (longData, lastDateArr) => {
    let returnedArr=[];
    let dateArr=longData[0];
    let priceArr=longData[1];
    returnedArr=lastDateArr.map(date=>{
        for(let i=0;i<dateArr.length;i++){
            if(dateArr[i]==date){
                //include the last date
                let newDateArr = dateArr.slice(-dateArr.length+i);
                let newPriceArr = priceArr.slice(-dateArr.length+i);
                let obj=[];
                obj.push(newDateArr);
                obj.push(newPriceArr);
                return obj;
            }
        }
    });
    return returnedArr;
}

export const findMinDays = predictDataSourceArr => {
    let daysArr=[];
    let minDays;

    daysArr=predictDataSourceArr.map(obj=>{
        return obj[0].length;
    });
    daysArr.sort(function(a, b){return a - b});
    minDays=daysArr[0];

    return minDays;
}

export const makeLastDateArr = (recentArrNew, expandArr) => {
    let returnedArr=[];

    let numArr=recentArrNew.map(obj=>{return obj.symbol2});
    
    returnedArr=numArr.map(num=>{
        return expandArr[num][0][expandArr[num][0].length-1];
    });
    return returnedArr;
}

export const makeRecentArr = (relevanceArr) => {
    let returnedArr=[];
    
    relevanceArr.forEach(element => {
        if(element.symbol1===0){
            returnedArr.push(element);
          }
    });

    return returnedArr;
}

export const makeExpandArr = (recentArr, cutArr, ranking) => {
    let returnedArr=[];
    
    //push the first arr
    let firstArr=[];
    firstArr.push(cutArr[0][1][0].concat(cutArr[0][0][0]));
    firstArr.push(cutArr[0][1][1].concat(cutArr[0][0][1]));
    returnedArr.push(firstArr);

    //push other arr listed in the ranking
    for(let i=0; i<ranking-1; i++){
        let arrNum=recentArr[i].symbol2;

        if(arrNum+1<cutArr[0].length){
            let newDayArr=cutArr[0][arrNum+1][0].concat(cutArr[0][arrNum][0]);
            let newPriceArr=cutArr[0][arrNum+1][1].concat(cutArr[0][arrNum][1]);
            let newArr=[];
            newArr.push(newDayArr);
            newArr.push(newPriceArr);
            returnedArr.push(newArr);
        }
    }

    return returnedArr;
}



export const makePredictPercentArr = (predictDataSourceArr, minDays) => {

    let returnedArr = [];

    for (let m = 0; m < predictDataSourceArr.length; m++) {
        let yValues = predictDataSourceArr[m][1];
        let tempArr = [];
        for (let i = 1; i < minDays; i++) {

            
            let per=(yValues[i]-yValues[i-1])/yValues[i-1];

            tempArr.push(per);
        }
        returnedArr.push(tempArr);
    }

    return returnedArr;
}

export const makePredictChart = (perArr, nowPrice, chartDays) => {

    let returnedArr = [];
    console.log("before");
    for (let m = 0; m < perArr.length; m++) {
        let tempArr = [];
        //set nowPrice as the first base data
        let prePrice=nowPrice;
        for (let i = 0; i < chartDays; i++) {
            
            let dataObj = {};

            dataObj.x = i;
            dataObj.y = prePrice*(1+perArr[m][i]);
            prePrice=dataObj.y; 
            tempArr.push(dataObj);
        }
        returnedArr.push(tempArr);
        console.log("in");
    }
    console.log(returnedArr);
    return returnedArr;
}