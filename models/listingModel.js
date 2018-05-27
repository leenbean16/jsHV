module.exports = function(sequelize){

	const listingModel = sequelize.define("listingModel" , {
		id: {
			type: STRING,
			allowNull: false,
		},
		// listingModel location details
		listingModelName: {
			type: STRING,
			allowNull: false,
		},
		address: {
			type: STRING,
			allowNull: false,
		},
		address2: {
			type: STRING,
			allowNull: false,
		},
		city: {
			type: STRING,
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
			type: STRING,
			allowNull: false
		},
		// amenities offered by listing owner
		bar: {
			type: BOOLEAN,
			allowNull: false
		},
		bathroom: {
			type: BOOLEAN,
			allowNull: false
		},
		catering: {
			type: BOOLEAN,
			allowNull: false
		},
		changingroom: {
			type: BOOLEAN,
			allowNull: false
		},
		dancefloor: {
			type: BOOLEAN,
			allowNull: false
		},
		decor: {
			type: BOOLEAN,
			allowNull: false
		},
		entertainment: {
			type: BOOLEAN,
			allowNull: false
		},
		firepit: {
			type: BOOLEAN,
			allowNull: false
		},
		florist: {
			type: BOOLEAN,
			allowNull: false
		},
		hospitality: {
			type: BOOLEAN,
			allowNull: false
		},
		kitchen: {
			type: BOOLEAN,
			allowNull: false
		},
		masterofceremony: {
			type: BOOLEAN,
			allowNull: false
		},
		dj: {
			type: BOOLEAN,
			allowNull: false
		},
		liveband: {
			type: BOOLEAN,
			allowNull: false
		},
		parking: {
			type: BOOLEAN,
			allowNull: false
		},
		photobooth: {
			type: BOOLEAN,
			allowNull: false
		},
		photographer: {
			type: BOOLEAN,
			allowNull: false
		},
		pool: {
			type: BOOLEAN,
			allowNull: false
		},
		tablesandchairs: {
			type: BOOLEAN,
			allowNull: false
		}
	},
);
	return listingModel;
};
