const { DataTypes, Model } = require('sequelize');
// const bcrypt = require('bcrypt');
// ^^installed files   --    vv local files //
const sequelize = require('../config/connection');

// class Blog extends Model {
//     constructor() {
//         return bcrypt.compareSync();
//     }
// }

class Blog extends Model {}

Blog.init({

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        unique: true


    },

    title: {
        type: DataTypes.CHAR,
        unique: true,
        allowNull: false
    },

    content: {
        type: DataTypes.CHAR,
        allowNull: false,
    }
},
    {
        // hooks: {
        //     beforeCreate: async (newUserData) => {
        //         newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //         return newUserData;
        //     },
        //     beforeUpdate: async (updatedUserData) => {
        //         updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        //         return updatedUserData;
        //     },
        // },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }

)

module.exports = Blog