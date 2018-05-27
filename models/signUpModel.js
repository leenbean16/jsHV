module.exports = function(sequelize) {

    const signUpModel = sequelize.define("signUpModel", {
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
    
    return signUpModel;
};
