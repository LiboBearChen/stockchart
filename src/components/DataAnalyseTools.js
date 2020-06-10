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

    for (let m = 0; m < dataArr.length - 1; m++) {
        
        for (let n = 1; m+n < dataArr.length; n++) {
            let tempArr = [];
            let yValues1 = makePercenArr(dataArr[m][1]);
            let yValues2 = makePercenArr(dataArr[m + n][1]);
            
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

const makeAverDiffPercenArr = (dataArr, chartDays) => {

    let returnedArr = [100];
    let tempArr=makeDiffPercenChart(dataArr, chartDays);
    
    for (let m = 0; m < tempArr.length; m++) {
        let dataObj = {};
        let num=0;
        for (let i = 0; i < chartDays-1; i++) {
            num+=tempArr[m][i].y;
        }
        dataObj.index=num/(chartDays-1);
        dataObj.symbol1=tempArr[m][0].symbol1;
        dataObj.symbol2=tempArr[m][0].symbol2;
        let a=returnedArr.push(dataObj);
        console.log(a);
    }
    
    return returnedArr;
}

//order the makeAverDiffPercenArr
export const makerelevanceArr = (dataArr, chartDays) => {
    let returnedArr = [];
    let tempArr1 = makeAverDiffPercenArr(dataArr, chartDays);
    console.log(tempArr1);
    let tempArr2 = [];
    let numArr = [];
    //order the makeAverDiffPercenArr by attribute index
    for (let i = 0; i < tempArr1.length; i++) {
        numArr.push(tempArr1[i].index);
    }
    numArr.sort(function (a, b) { return a - b });
    for (let i = 0; i < numArr.length; i++) {
        for (let m = 0; m < tempArr1.length; m++) {
            if (numArr[i] === tempArr1[m].index) {
                tempArr2.push(tempArr1[m]);
                tempArr1.splice(m, 1);
                break;
            }
        }
    }
    //make new array to hold ordered data
    for (let i = 0; i < tempArr2.length; i++) {
        let dataObj = {};
        dataObj.id = i + 1;
        dataObj.symbol1 = tempArr2.symbol1;
        dataObj.symbol2 = tempArr2.symbol2;
        dataObj.index = tempArr2.index;
        returnedArr.push(dataObj);
    }

    return returnedArr;
}

//make an array of differences
const makeDiffArr = (arr) => {
    let returnedArr = [];

    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i + 1] - arr[i];
            returnedArr.push(num);
        }
    }

    return returnedArr;
}

//make an array of percentage
const makePercenArr = (arr) => {
    let returnedArr = [];
    let diffArr = makeDiffArr(arr);
    if (arr.length > 1) {
        for (let i = 0; i < diffArr.length; i++) {
            if (arr[i] !== 0) {
                let num = diffArr[i] / arr[i];
                returnedArr.push(num);
            }
            else {
                returnedArr.push(diffArr[i]);
            }

        }
    }

    return returnedArr;
}

