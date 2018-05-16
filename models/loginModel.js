module.exports = function(sequelize) {

    const loginModel = sequelize.define("loginModel", {
        username: {
            type: STRING,
            allowNull: false,
        },
        password: {
            type: STRING,
            allowNull: false,
        },
    );
    
    return loginModel;
};