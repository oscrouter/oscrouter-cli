import { Routes } from 'oscrouter'
import eachOfSeries from 'async/eachOfSeries';
const fs = require('fs')
const allRoutes = JSON.parse(fs.readFileSync(__dirname+'/persistent.json'));

loadRoutes(allRoutes)

function loadRoutes(routes) {
	eachOfSeries(
		routes,
		(val, key, next) => {
			Routes.addRoute(key, val)
			next();
		}
	)
}


Routes.on('outgoingpacket',(uuid) => {
	console.log('Packet out')
})

Routes.on('incomingpacket',(uuid) => {
	console.log('Packet in')
})