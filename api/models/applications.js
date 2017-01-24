var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var applicationSchema = new mongoose.Schema({
        shpallja: {type: mongoose.Schema.Types.ObjectId, ref: 'Grant'},
        emriMbiemri: {
            type: String
        },
        dataLindjes: {
            type: String
        },
        gjinia: {
            type: String
        },
        profesioni: {
            type: String
        },
         vendbanimi: {
            type: String
        },
        kodiPostar: {
            type: String
        },
        komuna: {
            type: String
        },
        shtetsia: {
            type: String
        },
        perkatsia: {
            type: String
        },
        nrIndentifikimit: {
            type: String
        },
        email: {
            type: String
        },
        telefoni: {
            type: String
        },
        niveliArsimimit: {
            type: String
        },
        aplikimiParaprak: {
            type: String
        },
        nrKontratesFundit: {
            type: String
        },
        emriProjektit: {
            type: String
        },
        zona: {
            type: String
        },
        sektori: {
            type: String
        },
        llojiProjektit: {
            type: String
        },
        veprimtarit:[{
            veprimtaria: String
        }],
        qellimi: {
            type: String
        },
        produktet: {
            type: String
        },
        aktivitet: {
            type: String
        },
        perfituesit: {
            type: String
        },
        periudhaRealizimit: {
            type: String
        },
        rrethProjektit: {
            type: String
        },
        rezultatet: {
            type: String
        },
        promovimi: {
            type: String
        },
        partneret: {
            type: String
        },
        buxhetiPergjithshem: {
            fileName: String,
            destination: String
        },
        emriBankes: {
            type: String
        },
        emriDeges: {
            type: String
        },
        numriLlogaris: {
            type: String
        },
        mbajtsiLlogaris: {
            type: String
        },
        buxhetiDetajuar: {
            fileName: String,
            destination: String
        },
        kopjaIndetifikimit: {
            fileName: String,
            destination: String
        },
        kopjaVertetimit: {
            fileName: String,
            destination: String
        },
        kopjaQertifikatesRegjistrimit: {
            fileName: String,
            destination: String
        },
        kopjaQertifikatesFiskale: {
            fileName: String,
            destination: String
        },
        deshmi: {
            fileName: String,
            destination: String
        },
        tjera: {
            fileName: String,
            destination: String
        }
});

mongoose.model('Application', applicationSchema);