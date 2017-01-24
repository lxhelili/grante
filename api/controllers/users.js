var mongoose = require('mongoose');//load mongoose
var _ = require('lodash');//load lodash
var User = mongoose.model('User');//load user model
var Grant = mongoose.model('Grant');//load user model
var Application = mongoose.model('Application');//load user model
var multer  = require('multer');//load multer
var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './client/profile/img')
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
            }).single('userAvatar');
//methods

module.exports.getGrants = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "Unauthorized"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
         Grant.find({}).exec(function(err, grants) {
              if(err)
              {
                  res.send(err);
                  return;
              }

              res.status(200).json(grants);
          });
      });
  }

};
module.exports.getAplikantet = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "Unauthorized"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
         Application.find({}).populate('shpallja', 'drejtoria lloji').exec(function(err, aplikantet) {
              if(err)
              {
                  res.send(err);
                  return;
              }

              res.status(200).json(aplikantet);
          });
      });
  }

};
module.exports.getClientGrants = function(req, res) {

  Grant.find({}).exec(function(err, grants) {
      if(err)
      {
          res.send(err);
          return;
      }

      res.status(200).json(grants);
  });

};
module.exports.fshiGrante = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "Unauthorized"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {

        if(err)
        {
                res.send(err);
                return;
        }
        Grant.findByIdAndRemove(req.params.granteId, function(err){
                if(err)
                {
                    return res.status(403).json(err.errors);
                }

                return res.json({"message": "Account removed succesfully"});
            });
        
      });
  }

};
// module.exports.getClients = function(req, res) {

//   if (!req.payload._id) {
//     res.status(401).json({
//       "message" : "Unauthorized"
//     });
//   } else {
//     User
//       .findById(req.payload._id)
//       .populate('organization')//populate organization schema
//       .exec(function(err, user) {

//         if(user.role == "admin")//if logged user is admin
//         {
//             User.find({"role": "client", "organization": user.organization._id}, "-password").populate("organization").exec(function(err, userInternal) {
//                 if(err)
//                 {
//                     res.send(err);
//                     return;
//                 }

//                 res.status(200).json(userInternal);
//             });
//         }else{
//             res.send("You don't have permission to access this method");
//         }

//       });
//   }

// };

// //methods
// module.exports.getClient = function(req, res) {

//   if (!req.payload._id) {
//     res.status(401).json({
//       "message" : "Unauthorized"
//     });
//   } else {
//     User
//       .findById(req.payload._id)
//       .populate('organization')//populate organization schema
//       .exec(function(err, user) {

//         User.find({"_id": req.params.clientId, "organization": user.organization._id}, "-password").populate("organization").exec(function(err, userInternal) {
//                 if(!err && userInternal.length)
//                 {
//                     res.status(200).json(userInternal[0]);
//                 }else
//                 {
//                     res.status(404).json({"message":"Can't find Client"});
//                 }
//             });

//       });
//   }

// };

// module.exports.getTeamMembers = function(req, res) {

//   if (!req.payload._id) {
//     res.status(401).json({
//       "message" : "Unauthorized"
//     });
//   } else {
//     User
//       .findById(req.payload._id)
//       .populate('organization')//populate organization schema
//       .exec(function(err, user) {
//         if(user.role == "admin")//if logged user is admin
//         {
//             User.find({"role": { $nin: ["admin", "client"] }, "organization": user.organization._id},"-password").populate("organization").exec(function(err, userInternal) {
//                 if(err)
//                 {
//                     res.send(err);
//                     return;
//                 }

//                 res.status(200).json(userInternal);
//             });
//         }else{
//             res.send("You don't have permission to access this method");
//         }
//       });
//   }

// };

// module.exports.getTeamMember = function(req, res) {

//   if (!req.payload._id) {
//     res.status(401).json({
//       "message" : "Unauthorized"
//     });
//   } else {
//     User
//       .findById(req.payload._id)
//       .populate('organization')//populate organization schema
//       .exec(function(err, user) {

//         User.find({"_id": req.params.memberId, "organization": user.organization._id}, "-password").populate("organization").exec(function(err, userInternal) {
//                 if(!err && userInternal.length)
//                 {
//                     res.status(200).json(userInternal[0]);
//                 }else
//                 {
//                     res.status(404).json({"message":"Can't find Team Member"});
//                 }
//             });

//       });
//   }

// };

// module.exports.removeAccount = function(req, res) {

//   if (!req.payload._id) {
//     res.status(401).json({
//       "message" : "Unauthorized"
//     });
//   } else {
//     User
//       .findById(req.payload._id)
//       .populate('organization')//populate organization schema
//       .exec(function(err, user) {

//         if(err)
//         {
//                 res.send(err);
//                 return;
//         }
        
//         if(user.role == "admin" || req.params.userId == req.payload._id)
//         {
            
//             User.findByIdAndRemove(req.params.userId,function(err){
//                 if(err)
//                 {
//                     return res.status(403).json(err.errors);
//                 }

//                 return res.json({"message": "Account removed succesfully"});
//             });
            
//         }else{
//             return res.status(403).json({"message":"You can't remove this account"});
//         }
//       });
//   }

// };


// module.exports.getAll = function(req, res) {

//   if (!req.payload._id) {
//     res.status(401).json({
//       "message" : "Unauthorized"
//     });
//   } else {
//     User
//       .findById(req.payload._id)
//       .populate('organization')//populate organization schema
//       .exec(function(err, user) {
//         if(user.role == "admin")//if logged user is admin
//         {
//             User.find({"role": { $nin: ["admin"] }, "organization": user.organization._id},"-password").populate("organization").exec(function(err, userInternal) {
//                 if(err)
//                 {
//                     res.send(err);
//                     return;
//                 }

//                 res.status(200).json(userInternal);
//             });
//         }else{
//             res.send("You don't have permission to access this method");
//         }
//       });
//   }

// };


// module.exports.getProfile = function(req, res) {

//   if (!req.payload._id) {
//     res.status(401).json({
//       "message" : "Unauthorized"
//     });
//   } else {
//     User
//       .findById(req.payload._id)
//       .populate('organization')//populate organization schema
//       .exec(function(err, user) {
//         if(err)
//         {
//             res.status(403).send(err);
//             return;
//         }

//         res.status(200).json(user);
//       });
//   }

// };


// module.exports.editProfile = function(req, res) {

//   if (!req.payload._id) {
//     res.status(401).json({
//       "message" : "Unauthorized"
//     });
//   } else {
//     User
//       .findById(req.payload._id)
//       .populate('organization')//populate organization schema
//       .exec(function(err, user) {

//             if(user.role == "admin")
//             {
//                 var organization = user.organization;

//                 if(req.body.organization && req.body.organization.name) organization.name = req.body.organization.name;
//                 if(req.body.organization && req.body.organization.description) organization.description = req.body.organization.description;
//                 if(req.body.title) user.title = req.body.title;
//                 if(req.body.firstName) user.firstName = req.body.firstName;
//                 if(req.body.lastName) user.lastName = req.body.lastName;
//                 if(req.body.email) user.email = req.body.email;
//                 user.birthday = req.body.birthday;
//                 user.alternativeEmail = req.body.alternativeEmail;
//                 user.phoneNumbers = req.body.phoneNumbers;
//                 user.shortBio = req.body.shortBio;
//                 user.organizationRole = req.body.organizationRole;
//                 if(req.body.address && req.body.address.address) user.address.address = req.body.address.address;
//                 if(req.body.address && req.body.address.city) user.address.city   = req.body.address.city;
//                 if(req.body.address && req.body.address.country) user.address.country  =  req.body.address.country;
//                 if(req.body.address && req.body.address.zipCode) user.address.zipCode  =   req.body.address.zipCode;
//                 user.group = req.body.group;
//                 if(req.body.status) user.status = req.body.status;
//                 user.subline  =  req.body.subline;
//                 user.description = req.body.description;
//                 user.linkName =  req.body.linkName;
//                 user.businessName =  req.body.businessName;
//                 if(req.body.linkProfileUrl) user.linkProfileUrl = req.body.linkProfileUrl;
//                 if(req.body.socialLinks && req.body.socialLinks.facebook) user.socialLinks.facebook = req.body.socialLinks.facebook;
//                 if(req.body.socialLinks && req.body.socialLinks.twitter) user.socialLinks.twitter = req.body.socialLinks.twitter;
//                 if(req.body.socialLinks && req.body.socialLinks.linkedIn) user.socialLinks.linkedIn = req.body.socialLinks.linkedIn;
//                 if(req.body.socialLinks && req.body.socialLinks.googlePlus) user.socialLinks.googlePlus = req.body.socialLinks.googlePlus;
//                 user.notes = req.body.notes;

//                 if(req.body.password)
//                 {
//                     user.password = req.body.password;
//                 }

//                 organization.save(function(err){
//                     if (err)
//                     {
//                          res.status(500).send(err);
//                          return;
//                     }

//                     user.save(function(err) {
//                         if (err) {
//                              res.status(403).send(err);

//                         return;
//                         }else{

//                          return res.json(user);
//                         }
//                         });
//                 });
//             }else{

//                 user.title = req.body.title;
//                 if(req.body.firstName) user.firstName = req.body.firstName;
//                 if(req.body.lastName) user.lastName = req.body.lastName;
//                 if(req.body.email) user.email = req.body.email;
//                 user.birthday = req.body.birthday;
//                 user.alternativeEmail = req.body.alternativeEmail;
//                 user.phoneNumbers = req.body.phoneNumbers;
//                 user.shortBio = req.body.shortBio;
//                 user.organizationRole = req.body.organizationRole;
//                 if(req.body.address && req.body.address.address) user.address.address = req.body.address.address;
//                 if(req.body.address && req.body.address.city) user.address.city   = req.body.address.city;
//                 if(req.body.address && req.body.address.country) user.address.country  =  req.body.address.country;
//                 if(req.body.address && req.body.address.zipCode) user.address.zipCode  =   req.body.address.zipCode;
//                 user.group = req.body.group;
//                 if(req.body.status) user.status = req.body.status;
//                 user.subline  =  req.body.subline;
//                 user.description = req.body.description;
//                 user.linkName =  req.body.linkName;
//                 user.businessName =  req.body.businessName;
//                 user.linkProfileUrl = req.body.linkProfileUrl;
//                 if(req.body.socialLinks && req.body.socialLinks.facebook) user.socialLinks.facebook = req.body.socialLinks.facebook;
//                 if(req.body.socialLinks && req.body.socialLinks.twitter) user.socialLinks.twitter = req.body.socialLinks.twitter;
//                 if(req.body.socialLinks && req.body.socialLinks.linkedIn) user.socialLinks.linkedIn = req.body.socialLinks.linkedIn;
//                 if(req.body.socialLinks && req.body.socialLinks.googlePlus) user.socialLinks.googlePlus = req.body.socialLinks.googlePlus;
//                 user.notes = req.body.notes;

//                 if(req.body.password)
//                 {
//                     user.password = req.body.password;
//                 }


//                 user.save(function(err) {
//                     if (err) {

//                       res.status(403).send(err);

//                         return;

//                     }
//                         res.json(user);
//                     });
//             }
//       });
//   }
// };


// module.exports.editPeople = function(req, res) {

//   if (!req.payload._id) {
//     res.status(401).json({
//       "message" : "Unauthorized"
//     });
//   } else {
//     User
//       .findById(req.payload._id)
//       .populate('organization')//populate organization schema
//       .exec(function(err, user) {

//             if(user.role == "admin")
//             {
//                 User.findById(req.params.userId).exec(function(err, userInternal) {
//                 userInternal.title = req.body.title;
//                 if(req.body.firstName) userInternal.firstName = req.body.firstName;
//                 if(req.body.lastName) userInternal.lastName = req.body.lastName;
//                 if(req.body.email) userInternal.email = req.body.email;
//                 userInternal.birthday = req.body.birthday;
//                 userInternal.alternativeEmail = req.body.alternativeEmail;
//                 userInternal.phoneNumbers = req.body.phoneNumbers;
//                 userInternal.shortBio = req.body.shortBio;
//                 userInternal.organizationRole = req.body.organizationRole;
//                 if(req.body.address && req.body.address.address) userInternal.address.address = req.body.address.address;
//                 if(req.body.address && req.body.address.city) userInternal.address.city   = req.body.address.city;
//                 if(req.body.address && req.body.address.country) userInternal.address.country  =  req.body.address.country;
//                 if(req.body.address && req.body.address.zipCode) userInternal.address.zipCode  =   req.body.address.zipCode;
//                 userInternal.group = req.body.group;
//                 if(req.body.status) userInternal.status = req.body.status;
//                 userInternal.subline  =  req.body.subline;
//                 userInternal.description = req.body.description;
//                 userInternal.linkName =  req.body.linkName;
//                 if(req.body.linkProfileUrl) userInternal.linkProfileUrl = req.body.linkProfileUrl;
//                 if(req.body.socialLinks && req.body.socialLinks.facebook) userInternal.socialLinks.facebook = req.body.socialLinks.facebook;
//                 if(req.body.socialLinks && req.body.socialLinks.twitter) userInternal.socialLinks.twitter = req.body.socialLinks.twitter;
//                 if(req.body.socialLinks && req.body.socialLinks.linkedIn) userInternal.socialLinks.linkedIn = req.body.socialLinks.linkedIn;
//                 if(req.body.socialLinks && req.body.socialLinks.googlePlus) userInternal.socialLinks.googlePlus = req.body.socialLinks.googlePlus;
//                 userInternal.notes = req.body.notes;

//                 if(req.body.password)
//                 {
//                     userInternal.password = req.body.password;
//                 }


//                 userInternal.save(function(err) {
//                     if (err) {
//                       res.status(403).send(err);
//                       return;
//                     }
//                         res.json(userInternal);
//                     });
//                 });
//             }else{

//                  res.status(403).send("You don't have permission to access this method");
//                  return;
//             }
//       });
//   }
// };

// module.exports.uploadAvatar = function(req, res) {

//   if (!req.payload._id) {
//     res.status(401).json({
//       "message" : "Unauthorized"
//     });
//   } else {
//     User
//       .findById(req.payload._id)
//       .populate('organization')//populate organization schema
//       .exec(function(err, user) {
//             upload(req,res,function(err){
//             if(err){
//                  res.json({error_code:1,err_desc:err});
//                  return;
//             }

//             if(typeof req.file === "undefined")
//             {
//                  res.status(403).json({"meesage":"File is required"});
//                  return;
//             }

//             user.image.fileName = req.file.filename;
//             user.image.destination = "/profile/img";

//             user.save(function(err){
//                if(err)
//                {
//                    res.status(403).json({"message":"Can't save image"});
//                    return;
//                }

//                user.image.size = req.file.size;
//                return res.send(user.image);

//             });

//             });
//       });
//   }
// };
