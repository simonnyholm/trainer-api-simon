var Event = require("../models/event.model");
var Asset = require("../models/asset.model");

async function reset(req, res, next) {
	try {
		await Event.destroy({
			where: {},
			truncate: true
		});
		await Asset.destroy({
			where: {},
			truncate: true
		});
	
		await Asset.create({
			name: "Photo of DJ Socks",
			url: "//localhost:4000/file-bucket/123.png",
			filename: "123.png",
			contentType: "image/png",
			size: 387940,
			details: {
				height: 311,
				width: 311
			}
		});
	
		await Event.create({
			eventName: "DJ Socks Spins The Vinyls",
			eventDescription: "lorem ipsum dolor sit amet",
			eventDate: new Date(),
		});
	
		res.send("reset done");
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

module.exports = {
	reset
};
