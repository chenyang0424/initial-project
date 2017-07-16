import { url as locations } from '../constant/const'
export function request({ method = 'POST', body = null, credentials = 'omit' } = {}){
	body = JSON.stringify(body);
	return new Promise((resolve, reject) => {
		fetch(url, {
			method,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
			credentials,
			body
		}).then(res => res.json())
		.then(res => {
			if(res.success === true)
				resolve(res.data);
			else
				console.log("request failed !");
		}).catch(err => console.log('request' + url + 'failed: ', err));
	});
}

export const Fetch = {
	queryDataBase(){
		let { queryDataBase_url : url } = locations;
		return request({ url });
	},
	PromiseQueue(func, ...params) {
		return new Promise((resolve, reject) => {
			func(...params, (e) => {
				resolve(e);
			});
		});
	},
	addClientMsg(body){
		let { addClientMsg_url : url } = locations;
		return request({ url, body });
	}
}
