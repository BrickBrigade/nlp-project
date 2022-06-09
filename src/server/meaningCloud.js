const FormData = require('form-data');
const fetch = require('cross-fetch');

async function apiReq(url){
	const formdata = new FormData();
	formdata.append("key", "ac78e6ba954772a605a805f1aca9d6b8");
	formdata.append("url", url);
	formdata.append("lang", "en");

	const requestOptions = {
		method: 'POST',
		body: formdata,
		redirect: 'follow'
	};

	const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
		const json = {
			status: response.status,
			body: await response.json()
		}
		return json
}

module.exports = apiReq