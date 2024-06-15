const { DataTypes, Model } = require('sequelize');
// ^^installed files   --    vv local files //
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    
    {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        unique: true
    },
    content: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    author: {
        type: DataTypes.CHAR,
        allowNull: false,
    }
}, 
{
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment