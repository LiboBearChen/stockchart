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

