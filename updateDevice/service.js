const UpdateDevice = {
    
    update(req, res) {
        var bodyStr = '';
        req.on("data",function(chunk){
            bodyStr += chunk.toString();
        });
        req.on("end",function(){
            var arrayOfData = bodyStr.split('\n')
            arrayOfData = arrayOfData.filter(row => row.match(/^:/))
            res.send(arrayOfData);

    UpdateDevice.__proceedUpdate(bodyStr);

        });   
    },
    __proceedUpdate(file) {
        var arrayOfData = file.split('\n')
        arrayOfData = arrayOfData.filter(row => row.match(/^:/))
        
    }
}

module.exports =  UpdateDevice;