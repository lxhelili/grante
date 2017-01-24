var mongoose = require('mongoose');//load mongoose
var multer = require('multer');//load mongoose
var User = mongoose.model('User');//load user model
var Grant = mongoose.model('Grant');//load project model

var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './uploads/kriteret/files')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        },
        onFileUploadStart: function(file){
            console.log('starting');
        }
    });
   
var upload = multer({ //multer settings
                storage: storage
            }).single('file');

module.exports.addGrant = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "Unauthorized"
    });
  } else {
    //get logged user
    User.findById(req.payload._id).exec(function(err, user) {
        
      upload(req,res, function(err){
            if(err){
                 res.status(403).json(err);
                 return;
            }

            if(typeof req.file === "undefined")
            {
                 res.status(403).json({"meesage":"file is required"});
                 return;
            }

        var grant = new Grant();
        
        grant.drejtoria = req.body.drejtoria;
        grant.lloji = req.body.lloji;
        grant.prej = req.body.prej;
        grant.deri = req.body.deri;
        grant.file.fileName = req.file.filename;
        grant.file.destination = "/kriteret/files";

        grant.save(function(err){
            if(err)
                res.send(err.errors);
            

              
            grant.file.size = req.file.size;
            return res.send(grant.file);
            
            res.status(200).json({"message": "Grant saved successfully"});


        });

        });
    });
  }
};