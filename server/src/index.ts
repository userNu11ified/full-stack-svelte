import express from "express";
import ViteExpress from "vite-express";

const mode = process.argv[2] ?? "development";
if (mode !== "development" && mode !== "production")
	throw new Error("Invalid environment mode set!");

const PORT_NUMBER = 3000;
const app = express();

ViteExpress.config({ viteConfigFile: "./client/vite.config.ts", mode: mode });
ViteExpress.listen(app, PORT_NUMBER, () => {
	console.log(`Server started on: http://localhost:${PORT_NUMBER}`);
});
