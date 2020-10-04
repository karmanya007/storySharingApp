const mongoose = require('mongoose');

const DB = process.env.MONGO_URI.replace(
	'<PASSWORD>',
	process.env.MONGO_PASSWORD
);

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(DB, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});
		console.log(`Database connected: ${conn.connection.host}`);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

module.exports = connectDB;
