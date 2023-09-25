import chalk from "chalk";
import mongoose from "mongoose";
import { systemLogs } from "../utils/Logger.js";

const connectionToDB = async () => {
	try {
		const connectionParams = {
			dbName: process.env.DB_NAME,
		};
		const connect = await mongoose.connect(
		"mongodb+srv://chandan:Chandu88611@cluster0.7uth0pi.mongodb.net/?retryWrites=true&w=majority"
		
		);
		console.log(
			`${chalk.bgWhite.green.bold(
				`MongoDB Connected: ${connect.connection.host}`
			)}`
		);
		systemLogs.info(`MongoDB Connected: ${connect.connection.host}`);
	} catch (error) {
		console.error(`${chalk.red.bold(`Error: ${error.message}`)}`);
		process.exit(1);
	}
};

export default connectionToDB;
