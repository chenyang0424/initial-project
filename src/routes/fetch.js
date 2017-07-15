export function request({ url, method = 'POST', body = null, credentials = 'omit' } = {}, callback){
	fetch(url, {
		method,
		headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
		credentials,
		body
	}).then(res => res.json())
	.then(res => {
		if(res.success === true)
			callback(res.data);
		else
			console.log("request failed !");
	}).catch(err => console.log('request dataBase failed: ', err));
}

export const Fetch = {
	queryDataBase(object = {}, callback){
		return 'url' in object ?  request(object, callback) : console.error("The url doesn't exist , queryDataBase failed.");
	},
	PromiseQueue(func, ...params) {
		return new Promise((resolve, reject) => {
			func(...params, (e) => {
				resolve(e);
			});
		});
	},
}
