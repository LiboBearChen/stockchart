

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

export const makeExpandArr = (recentArr, cutArr, ranking) => {
    let returnedArr=[];
    
    //push the first arr
    let firstArr=[];
    firstArr.push(cutArr[0][1][0].concat(cutArr[0][0][0]));
    firstArr.push(cutArr[0][1][1].concat(cutArr[0][0][1]));
    returnedArr.push(firstArr);

    //push other arr listed in the ranking
    for(let i=0; i<ranking; i++){
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