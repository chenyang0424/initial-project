import { url as locations } from '../constant/const'
export function request({ url, method = 'POST', body = 'shuai', credentials = 'include' } = {}){
	body = JSON.stringify(body);
	return new Promise((resolve, reject) => {
		fetch(url, {
			method,
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
				'Cache-Control': 'no-cache',
				//'Content-Type': 'application/json'
			},
			cache: 'default',
			mode: 'no-cors',
			credentials,
			//body: 'value=' + body
		})
		.then(res => {
			console.log(res);
			if(res.ok === true)
				resolve(res.data);
			else
				console.log("request failed !");
		}).catch(err => console.log('request ' + url + 'failed: ', err));
	});
}

export const Fetch = {
	queryDataBase(){
		let { queryDataBase_url : url } = locations;
		return request({ url, method : 'GET' });
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
