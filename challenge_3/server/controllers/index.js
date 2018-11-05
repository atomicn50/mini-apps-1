const Info = require('../../database/models');

exports.saveInfo = (userInfo, callback) => {
  const newUserInfo = new Info(userInfo);
  newUserInfo.save((err, success) => {
    if (err) {
      callback(err);
    } else {
      callback(null, success);
    }
  })
}