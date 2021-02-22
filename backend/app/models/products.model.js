module.exports = (sequelize, Sequelize) => {
	const Product = sequelize.define('product', {			// product model	
	  id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
   		},
		name: {
				type: Sequelize.STRING
		},
		contain_articles: {
			type: Sequelize.STRING
		}
	});
	
	return Product;
}
