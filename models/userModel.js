module.exports = function(sequelize) {

    const userModel = sequelize.define("userModel", {
        username: {
            type: STRING,
            allowNull: false,
        },
        firstName: {
            type: STRING,
            allowNull: false,
        },
        lastName: {
            type: STRING,
            allowNull: false,
        },
        birthday: {
            type: NUMBER,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        state: {
            type: STRING,
            allowNull: false
        },
        zip: {
            type: NUMBER,
            allowNull: false
        },
    );
    
    return userModel;
};
