exports.success = function (req, res, data= " ", status= 200) {
    
    res.status(status).send({
        error: false,
        status: status,
        data: data
    });
}

exports.error = function (req, res, data= " ", status= 500) {
    res.status(status).send({
        error: true,
        status: status,
        data: data
    });
}