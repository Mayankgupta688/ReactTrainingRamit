(function() {

    var data = [10, 25, 31, 40];

    var returnedData = data.filter(function(dat) {
        return dat % 2 == 0;
    })

    console.dir(returnedData)

    console.dir(data)

})()