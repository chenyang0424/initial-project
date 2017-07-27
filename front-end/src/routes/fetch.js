import { url as locations } from '../constant/const'

function createAjax(){
	var xmlHttp = null;
    try{// Firefox, Opera 8.0+, Safari
    	xmlHttp = new XMLHttpRequest();
    }catch (e){
	    try{// Internet Explorer
	        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
	    }catch (e){
	        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	    }
    }
    return xmlHttp;
}
function ajax({ url, method, body, resolve }){
	let xmlhttp = createAjax();
	xmlhttp.onreadystatechange = () => {
	    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
	    	let data = 'JSON' in window ? JSON.parse(xmlhttp.responseText) : eval(xmlhttp.responseText);
	    	resolve(data);
	    }
  	}
	if (method.toLowerCase() === 'get')
		url += body === '' ? '' : ('?' + body);
	xmlhttp.open(method, url, true);
	if (method.toLowerCase() === 'post')
		xmlhttp.send(body);
	else
		xmlhttp.send();
}
function request({ url, method = 'POST', body = '', credentials = 'include' } = {}){
	return new Promise((resolve, reject) => ajax({ url, method, body, resolve }));
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