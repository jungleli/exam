var models = require('../models');
var status = require('../public/js/status.js');

exports.register = function(req, res) {
  var classes = [];
  models.Class.findAll().then(function(data) {
    for (var i = 0; i < data.length; i++) {
      classes.push(data[i].dataValues);
    }
    res.render('student-register', {
      title: 'Student Register',
      classes: classes
    });
  });

};

exports.verify = function(req, res) {
  var info = req.body.info;
  console.log(status.INS_ERROR);

  var student = models.Student;
  student.findAll({
    where: {
      studentId: info.studentId
    }
  }).then(function(data) {
    if (data.length === 0) {
      student.create({
        studentId: info.studentId,
        name: info.name,
        gender: info.gender,
        class: info.class,
        password: (info.password)
      }).then(function(data) {
        if(data.length === 0) {
          res.send({
            status:status.INS_ERROR
          });
        }else {
          res.send({
            status: status.DATA_SUCCESS,
            message: {"msg":"DATA_SUCCESS"}
          });
        }
      });

    } else {
      res.send({
        status: status.PARAM_ERROR ,
        message: {"msg":"PARAM_ERROR"},
        data: {}
      });
    }
  });
};
