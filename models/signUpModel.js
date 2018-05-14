module.exports = function(sequelize) {

    const loginModel = sequelize.define("loginModel", {
        email: {
            type: STRING,
            allowNull: false,
        },
        username: {
            type: STRING,
            allowNull: false,
        },
        password: {
            type: STRING,
            allowNull: false,
        },
        passwordTwo: {
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
