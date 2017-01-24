var mongoose = require('mongoose');//load mongoose
var multer = require('multer');//load mongoose
var User = mongoose.model('User');//load user model
var Application = mongoose.model('Application');//load project model
var Grant = mongoose.model('Grant');//load project model

var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './uploads/dokumentet/files')
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
            }).fields([{ name: 'buxhetiPergjithshem'}, { name: 'buxhetiDetajuar'}]);

module.exports.addApplication = function(req, res) {

    upload(req,res, function(err){
            if(err){
                 res.status(403).json(err);
                 return;
            }

            console.log(req.files);

        var application = new Application();
        
        application.shpallja = req.params.aplicationId;
        application.emriMbiemri = req.body.emriMbiemri;
        application.dataLindjes = req.body.dataLindjes;
        application.gjinia = req.body.gjinia;
        application.profesioni = req.body.profesioni;
        application.vendbanimi = req.body.vendbanimi;
        application.kodiPostar = req.body.kodiPostar;
        application.komuna = req.body.komuna;
        application.shtetsia = req.body.shtetsia;
        application.perkatsia = req.body.perkatsia;
        application.nrIndentifikimit = req.body.nrIndentifikimit;
        application.email = req.body.email;
        application.telefoni = req.body.telefoni;
        application.niveliArsimimit = req.body.niveliArsimimit;
        application.aplikimiParaprak = req.body.aplikimiParaprak;
        application.nrKontratesFundit = req.body.nrKontratesFundit;
        application.emriProjektit = req.body.emriProjektit;
        application.zona = req.body.zona;
        application.sektori = req.body.sektori;
        application.llojiProjektit = req.body.llojiProjektit;
        application.veprimtarit = req.body.veprimtarit;
        application.qellimi = req.body.qellimi;
        application.produktet = req.body.produktet;
        application.aktivitet = req.body.aktivitet;
        application.perfituesit = req.body.perfituesit;
        application.periudhaRealizimit = req.body.periudhaRealizimit;
        application.rrethProjektit = req.body.rrethProjektit;
        application.rezultatet = req.body.rezultatet;
        application.promovimi = req.body.promovimi;
        application.partneret = req.body.partneret;


        application.emriBankes = req.body.emriBankes;
        application.emriDeges = req.body.emriDeges;
        application.numriLlogaris = req.body.numriLlogaris;
        application.mbajtsiLlogaris = req.body.mbajtsiLlogaris;

        application.buxhetiPergjithshem.fileName = req.files['buxhetiPergjithshem'][0];
        application.buxhetiPergjithshem.destination = "/dokumentet/files";

   
   

        application.save(function(err){
            if(err)
                res.send(err.errors);
            

              
            // application.file.size = req.file.size;
            // return res.send(application.file);
            
            res.status(200).json({"message": "Grant saved successfully"});


        });

        });

    
};
module.exports.getApplication = function(req, res) {

  Grant.findById(req.params.aplicationId).exec(function(err, grants) {
          if(err)
          {
              res.send(err);
              return;
          }

          res.status(200).json(grants);
      });

};