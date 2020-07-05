

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

export const makePredictLine = (index1,index2) => {
    let line;

    return line;
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