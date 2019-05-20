(function() {

    var data = [10, 20, 30, 40];

    var returnedData = data.map(function(dat) {
        return dat + 2;
    })

    var newData = []; 
    for(var i=0; i< data.length; i++) {
        newData.push(data[i] + 2);
    }

    console.dir(returnedData)

    console.dir(data)

    console.log(newData)

    console.dir(data)

})()