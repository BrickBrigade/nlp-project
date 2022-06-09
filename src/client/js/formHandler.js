function handleSubmit(event) {
	event.preventDefault()

	// check what text was put into the form field
	let formText = document.getElementById('name').value


	let params = new URLSearchParams({url: formText})

	console.log("::: Form Submitted :::")
	fetch('http://localhost:8080/api?'+params.toString())
	.then(res => res.json())
	.then(function(res) {
		let subjectivity = ""
		let polarity = ""
		// console.log(res.subjectivity)
		if(res.subjectivity === "SUBJECTIVE"){
			subjectivity = "subjective"
		} else {
			subjectivity = "objective"
		}

		console.log(res.score_tag)
		if(res.score_tag === "P+"){
			polarity = "very positive"
		} else if(res.score_tag === "P"){
			polarity = "positive"
		} else if(res.score_tag === "NEU"){
			polarity = "neutral"
		} else if(res.score_tag === "N"){
			polarity = "negative"
		} else if(res.score_tag === "N+"){
			polarity = "very negative"
		} else if(res.score_tag === "NONE"){
			polarity = "no polarity"
		}

		let snipStringFrags = []
		for (const s in res.sentence_list) {
			if (s < 5) {
				console.log(res.sentence_list[s].text)
				snipStringFrags.push(res.sentence_list[s].text)
			}
		}
		console.log(snipStringFrags)
		let snipString = snipStringFrags.join().replaceAll(".,", ". ")
		console.log(snipString)
		// document.getElementById('results').innerHTML = JSON.stringify(res)
		document.getElementById('results').innerHTML = 
		`
		<strong>Subjectivity:</strong> ${subjectivity}<br>
		<strong>Polarity:</strong> ${polarity}<br><br>
		<strong>Snippet:</strong><br>${snipString}
		`
	})
}

export { handleSubmit }