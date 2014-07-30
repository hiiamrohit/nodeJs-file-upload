
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.fileUpload = function(req, res){
  res.render('fileUpload');
};

exports.filelist = function(req, res){
  res.render('filelist');
};
