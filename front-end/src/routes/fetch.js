import { url as locations } from '../constant/const'
export function request({ url, method = 'POST', body = 'user=1', credentials = 'include' } = {}){
//	return new Promise((resolve, reject) => {
//		fetch(url, {
//			method,
//			headers: {
//				'Content-Type': 'application/x-www-form-urlencoded',
//				'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//				'Cache-Control': 'no-cache'
//			},
//			mode: 'no-cors',
//			//body,
//		})
//		.then(res => {
//			console.log(res);
//			if(res.ok === true)
//				resolve(res.data);
//			else
//				console.log("request failed !");
//		}).catch(err => console.log('request ' + url + 'failed: ', err));
//	});
	return new Promise((resolve, reject) => {
		fetch(url,{
		    method,//or 'GET'
		    //credentials: "same-origin",//or "include","same-origin":只在请求同域中资源时成功，其他请求将被拒绝。
		　　headers:{
		　　　　"Content-type":"application:/x-www-form-urlencoded:charset=UTF-8"
		　　},mode: 'no-cors',
//		　　body:"name=lulingniu&age=40"
		})
		.then((data) => {
		    console.log("请求成功，JSON解析后的响应数据为:",data);resolve(data);
		})
		.catch(function(err){
		    console.log("Fetch错误:"+err);
		});
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
		return request({ url, method: 'GET' });
	},
	addClientMsg(body){
		let { addClientMsg_url : url } = locations;
		body = 'client=' + JSON.stringify(body);
		return request({ url, body });
	},
	getOneMainInstitution(id){
		let { institution_url : url } = locations;
		let body = 'institutionId=' + id;
		return request({ url, body });
	}
}
export const Util = {
	asyncResult: async function (finish, ...fetch){
		var results = [];
		for(let value of fetch){
			results.push((await value).json());
		}
		try{
			let result = await Promise.all(results);
			finish(result);
		}catch(e){
			console.error('async requests failed. ', e);
		}
	},




}