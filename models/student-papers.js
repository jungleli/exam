module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StudentPapers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false
    },
  StudentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  PaperId:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  AnsweredPaperId:{
    type: DataTypes.INTEGER,
    allowNull: false,
  }
  });
};
