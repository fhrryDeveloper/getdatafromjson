module.exports = (sequelize, Sequelize) => {
	const Article = sequelize.define('article', {			// article model
	  	art_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
		},
		name: {
			type: Sequelize.STRING
		},
		stock: {
			type: Sequelize.INTEGER
		}
	});
	
	return Article;
}
