export const makeNormalChart = (dataArr, chartDays) => {

    let returnedArr = [];

    //use all data in the array
    for (let m = 0; m < dataArr.length; m++) {
        let tempArr = [];
        for (let i = 0; i < chartDays; i++) {

            let yValues = dataArr[m][1];
            let dataObj = {};

            dataObj.x = i;
            dataObj.y = yValues[yValues.length - 1 - i];

            tempArr.push(dataObj);
        }
        returnedArr.push(tempArr);
    }

    return returnedArr;
}

export const makeDiffChart = (dataArr, chartDays) => {

    let returnedArr = [];

    //use all data in the array
    for (let m = 0; m < dataArr.length; m++) {
        let tempArr = [];
        for (let i = 1; i < chartDays; i++) {

            //use makeDiffArr function
            let yValues = makeDiffArr(dataArr[m][1]);
            let dataObj = {};

            dataObj.x = i;
            dataObj.y = yValues[yValues.length - 1 - i];

            tempArr.push(dataObj);
        }
        returnedArr.push(tempArr);
    }

    return returnedArr;
}

export const makePercenChart = (dataArr, chartDays) => {

    let returnedArr = [];

    //use all data in the array
    for (let m = 0; m < dataArr.length; m++) {
        let tempArr = [];
        for (let i = 1; i < chartDays; i++) {

            //use makeDiffArr function
            let yValues = makePercenArr(dataArr[m][1]);
            let dataObj = {};

            dataObj.x = i;
            dataObj.y = yValues[yValues.length - 1 - i];

            tempArr.push(dataObj);
        }
        returnedArr.push(tempArr);
    }

    return returnedArr;
}

//
export const makeDiffPercenChart = (dataArr, chartDays) => {

    let returnedArr = [];

    for (let m = 0; m < dataArr.length-1; m++) {
        let tempArr = [];
        for (let i = 1; i < chartDays; i++) {

            //use makeDiffArr function
            let yValues1 = makePercenArr(dataArr[m][1]);
            let yValues2 = makePercenArr(dataArr[m+1][1]);
            let dataObj = {};

            dataObj.x = i;
            let num = yValues1[yValues1.length - 1 - i]-yValues2[yValues2.length - 1 - i];
            if(num<0){
                dataObj.y=-num; 
            }
            else{
                dataObj.y=num;
            }

            tempArr.push(dataObj);
        }
        returnedArr.push(tempArr);
    }

    return returnedArr;
}

const makeAverDiffPercenArr = (dataArr, chartDays) => {

    let returnedArr = [];

    for (let m = 0; m < dataArr.length-1; m++) {
        let tempArr = [];
        for(let n = m+1; n < dataArr.length; n++){
            for (let i = 1; i < chartDays; i++) {

                //use makeDiffArr function
                let yValues1 = makePercenArr(dataArr[m][1]);
    
                
                let yValues2 = makePercenArr(dataArr[n][1]);
                let dataObj = {};
    
                dataObj.symbol1 = m;
                dataObj.symbol2 = m+1;
                let num = yValues1[yValues1.length - 1 - i]-yValues2[yValues2.length - 1 - i];
                if(num<0){
                    dataObj.index=-num/(chartDays-1); 
                }
                else{
                    dataObj.index=num/(chartDays-1);
                }
    
                tempArr.push(dataObj);
            }
        }
        
        returnedArr.push(tempArr);
    }

    return returnedArr;
}

//order the makeAverDiffPercenArr
const makerelevanceArr = (dataArr, chartDays) => {
    let returnedArr = [];
    let tempArr = makeAverDiffPercenArr(dataArr, chartDays);

    //order the makeAverDiffPercenArr by attribute index
    for (let i = 0; i < tempArr.length; i++){
        
    }
    //make new array to hold ordered data
    for (let i = 0; i < tempArr.length; i++) {
        let dataObj = {};
        dataObj.id=i+1;
        dataObj.symbol1=tempArr.symbol1;
        dataObj.symbol2=tempArr.symbol2;
        dataObj.index=tempArr.index;
        returnedArr.push(dataObj);
    }

    return returnedArr;
}

//make an array of differences
const makeDiffArr = (arr) => {
    let returnedArr = [];

    if(arr.length>1){
        for (let i = 0; i < arr.length; i++) {
            let num=arr[i+1]-arr[i];
            returnedArr.push(num);
        }
    }

    return returnedArr;
  }

//make an array of percentage
const makePercenArr = (arr) => {
    let returnedArr = [];
    let diffArr=makeDiffArr(arr);
    if(arr.length>1){
        for (let i = 0; i < diffArr.length; i++) {
            if(arr[i]!==0){
                let num= diffArr[i]/ arr[i];
                returnedArr.push(num);
            }
            else{
                returnedArr.push(diffArr[i]);
            }
            
        }
    }

    return returnedArr;
  }

