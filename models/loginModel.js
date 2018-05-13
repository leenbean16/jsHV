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
        terms: {
            type: NUMBER,
            allowNull: false
        },
    );
    
    return loginModel;
};
