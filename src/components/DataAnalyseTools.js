export const makeNormalChart = (dataArr, chartDays) => {

    let returnedArr = [];

    //use all data in the array
    for(let m=0; m<dataArr.length; m++){
        let tempArr=[];
        for (let i = 0; i < chartDays; i++) {

            let yValue=dataArr[m][1];
            let dataObj = {};
            
            dataObj.x = i;
            dataObj.y = yValue[yValue.length-1-i];
    
            tempArr.push(dataObj);       
        }
        returnedArr.push(tempArr);
    }

    return returnedArr;
}