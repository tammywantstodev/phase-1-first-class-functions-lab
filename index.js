// Code your solution in this file!
// Code your solution in this file!
const returnFirstTwoDrivers=function(arr){
    return arr.slice(0,2)
  }
  
  const returnLastTwoDrivers=function(arr){
    return arr.slice(arr.length-2)
  }
  let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
  
  function createFareMultiplier(integer){
    return function(fare){
      return integer * fare;
    }
  }
  const fareDoubler= createFareMultiplier(2);
  
  const fareTripler= createFareMultiplier(3);
  
  function selectDifferentDrivers(arr, callback){
    return callback(arr);
  }
  
  
  