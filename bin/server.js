const debug = require('debug')('yourstory:server');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const connectDB = require('./db');
const app = require('../app');

// Connects to the database
connectDB();

// Normalize a port into a number (Socket), string (Pipe), or false.
const normalizePort = (val) => {
	const port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
};

// Event listener for HTTP server "listening" event.
const onListening = () => {
	const addr = server.address();
	const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	debug(`Listening on ${addr.address}` + bind);
};

// Event listener for HTTP server "error" event.
const onError = (error) => {
	if (error.syscall !== 'listen') {
		throw error;
	}
	const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		case 'EBADF':
			console.error(`The argument sockfd is not a valid file descriptor`);
			process.exit(1);
			break;
		case 'ENOTSOCK':
			console.error(`The file descriptor sockfd does not refer to a socket`);
			process.exit(1);
			break;
		case 'EOPNOTSUPP':
			console.error(`The file descriptor sockfd does not refer to a socket`);
			process.exit(1);
			break;
		default:
			throw error;
	}
};

// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '3000');

// Create HTTP server and Listen on provided port, on all network interfaces.
const server = app.listen(port, onListening);

// Server error handler
server.on('error', onError);
