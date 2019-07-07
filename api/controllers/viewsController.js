
exports.index = function(req,res){
    res.sendFile('index.html', {root: './../public'});
}

exports.signUp = function(req,res){
    res.sendFile('signUp.html', {root: './../public'});
}