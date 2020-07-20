export const makeNormalChart = (dataArr, chartDays) => {

    let returnedArr = [];

    //m stands for index of stock symbols
    for (let m = 0; m < dataArr.length; m++) {
        let tempArr = [];
        for (let i = 0; i < chartDays; i++) {

            let yValues = dataArr[m][1];
            let dataObj = {};

            dataObj.x = i;
            dataObj.y = yValues[yValues.length - chartDays + i];

            tempArr.push(dataObj);
        }
        returnedArr.push(tempArr);
    }

    return returnedArr;
}

export const makeDiffChart = (dataArr, chartDays) => {

    let returnedArr = [];
    let normalArr = makeNormalChart(dataArr, chartDays);

    for (let m = 0; m < normalArr.length; m++) {
        let tempArr = [];
        let yValues = [];

        //make an array of y values
        for (let i = 0; i < chartDays; i++) {
            yValues.push(normalArr[m][i].y);
        }

        //use makeDiffArr to make an array of difference
        yValues = makeDiffArr(yValues);

        for (let i = 0; i < chartDays; i++) {
            let dataObj = {};
            dataObj.x = i;
            dataObj.y = yValues[i];
            tempArr.push(dataObj);
        }
        returnedArr.push(tempArr);
    }

    return returnedArr;

}

export const makePercenChart = (dataArr, chartDays) => {

    let returnedArr = [];
    let diffArr = makeDiffChart(dataArr, chartDays);
    let normalArr = makeNormalChart(dataArr, chartDays);

    for (let m = 0; m < diffArr.length; m++) {
        let tempArr = [];
        let diffValues = [];
        let normalValues = [];

        //make parameter arrays for the makePercenArr function
        for (let i = 0; i < chartDays; i++) {
            diffValues.push(diffArr[m][i].y);
            normalValues.push(normalArr[m][i].y);
        }

        for (let i = 0; i < chartDays; i++) {

            //use makePercenArr function
            let yValues = makePercenArr(diffValues,normalValues);
            let dataObj = {};

            dataObj.x = i;
            dataObj.y = yValues[i];

            tempArr.push(dataObj);
        }
        returnedArr.push(tempArr);
    }

    return returnedArr;
}

//
export const makeDiffPercenChart = (dataArr, chartDays) => {

    let returnedArr = [];
    let percenArr = makePercenChart(dataArr, chartDays);

    for (let m = 0; m < percenArr.length - 1; m++) {

        for (let n = 1; m + n < percenArr.length; n++) {
            let tempArr = [];
            let yValues1 = percenArr[m];
            let yValues2 = percenArr[m + n];
            for (let i = 0; i < chartDays; i++) {
                let dataObj = {};
                dataObj.x = i;
                let num = yValues1[i].y - yValues2[i].y;
                if (num < 0) {
                    dataObj.y = -num;
                }
                else {
                    dataObj.y = num;
                }
                dataObj.symbol1 = m;
                dataObj.symbol2 = m + n;
                tempArr.push(dataObj);
            }
            returnedArr.push(tempArr);
        }
    }

    return returnedArr;
}

export const makeAverDiffPercenArr = (dataArr, chartDays) => {

    let returnedArr = [];
    let diffPercenArr = makeDiffPercenChart(dataArr, chartDays);
    for (let m = 0; m < diffPercenArr.length; m++) {
        let dataObj = {};
        let num = 0;
        for (let i = 0; i < chartDays; i++) {
            num += diffPercenArr[m][i].y;
        }
        dataObj.averDiffPercen = num / (chartDays - 1);
        dataObj.symbol1 = diffPercenArr[m][0].symbol1;
        dataObj.symbol2 = diffPercenArr[m][0].symbol2;
        returnedArr.push(dataObj);
    }
    return returnedArr;
}

//order the makeAverDiffPercenArr
export const makeRelevanceArr = (dataArr, chartDays) => {
    let returnedArr = [];
    let tempArr = makeAverDiffPercenArr(dataArr, chartDays);
    let numArr = [];
    //order the makeAverDiffPercenArr by attribute averDiffPercen
    for (let i = 0; i < tempArr.length; i++) {
        numArr.push(tempArr[i].averDiffPercen);
    }
    numArr.sort(function (a, b) { return a - b });
    for (let i = 0; i < numArr.length; i++) {
        for (let m = 0; m < tempArr.length; m++) {
            if (numArr[i] === tempArr[m].averDiffPercen) {
                returnedArr.push(tempArr[m]);
                tempArr.splice(m, 1);
                break;
            }
        }
    }
    return returnedArr;
}

//make an array of differences
const makeDiffArr = (arr) => {
    let returnedArr = [];

    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            let diff = 0;
            //no difference for the first number
            if (i === 0) {
                diff = 0;
            }
            else {
                diff = arr[i] - arr[i - 1];
            }

            returnedArr.push(diff);
        }
    }

    return returnedArr;
}

//make an array of percentage
const makePercenArr = (diffValues, normalValues) => {
    let returnedArr = [];

    if (diffValues.length > 1) {

    }
    for (let i = 0; i < diffValues.length; i++) {
        if(i===0){
            returnedArr.push(0);
        }
        else{
            if (normalValues[i-1] !== 0) {
                let percentage = diffValues[i] / normalValues[i-1];
                returnedArr.push(percentage);
            }
            else {
                returnedArr.push(0);
            }
        }
        
    }

    return returnedArr;
}

