import { url as locations } from '../constant/const'
export function request({ url, method = 'POST', body = 'shuai', credentials = 'include' } = {}){
	return new Promise((resolve, reject) => {
		fetch(url, {
			method,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
				'Cache-Control': 'no-cache',
			},
			cache: 'default',
			mode: 'no-cors',
			credentials,
			body,
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
	login({ userName, passWord } = {}){
		let { login_url : url } = locations;
		let body = 'user=' + userName + '&password=' + passWord;
		return request({ url, body });
	},
	queryDataBase(){
		let { queryDataBase_url : url } = locations;
		return request({ url, method : 'GET' });
	},
	addClientMsg(body){
		let { addClientMsg_url : url } = locations;
		body = 'client=' + JSON.stringify(body);
		return request({ url, body });
	}
}
