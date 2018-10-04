const {from} = require('rxjs');
const dns = require('dns');

const domain = "www.mum.edu"; 

dns.resolve4(domain,(err, addresses) => {
	if(err)
	{
		console.log("From resolve4: " + err.message);
	}else
	{
		console.log("From resolve4: " +  addresses);
	}
});

const getIpFromPromise = (url) => new Promise((resolve, reject) => {
	dns.resolve4(url,(err, addresses) => {
		if(err)
		{
			reject(err.message);
		}else
		{
			resolve(addresses);
		}
	});
});

async function getIPAsyncAwait(address){
	try
	{
		const ip = await getIpFromPromise(address);
		console.log("From Async/Wait: " + ip);
	}catch(err)
	{
		console.log("From Async/Wait: " +  err);
	}
}

getIpFromPromise(domain)
	.then((data) => console.log("From Promise: " + data))
	.catch((err) => console.log("From Promise: " + err));

getIPAsyncAwait(domain);

from(getIpFromPromise(domain))
	.subscribe(data => console.log("From Observable: " + data));