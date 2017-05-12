console.log(process.argv.slice(2,process.argv.length).map(function(item){return parseInt(item,10)}).reduce((a,b) => a + b,0))

/*
Slice - used for getting new array which starts from actual input parameters

map- The map() method creates a new array with the results of calling a function for every array element.Here i am returning int value.

reduce- to reduce array into one.
*/