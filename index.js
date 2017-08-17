function getIssues() {

	fetch(`https://api.github.com/repos/wk645/javascript-fetch-lab/issues`, {
		headers: {Authorization: `token ${getToken()}`}
	}).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
	var issues = '<ul>' + json.map(issue => `<li>${issue.title}: ${issue.body}</li>`).join("") + '</ul>'
	document.getElementById('issues').innerHTML = issues

}

function createIssue() {
	let title = document.getElementById('title')
	let body = document.getElementById('body')
	const postData = {
		title: title.value,
		body: body.value
	}

	fetch(`https://api.github.com/repos/wk645/javascript-fetch-lab/issues`, {
		method: 'POST',
		body: JSON.stringify(postData),
		headers: {Authorization: `token ${getToken()}`}
	}).then(res => getIssues())

}

function showResults(json) {
	var url = `<a href="${json.html_url}">${json.name}</a>`
	document.getElementById('results').innerHTML = url

}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!

  fetch(`https://api.github.com/repos/${repo}/forks`, 
  {
  	method: 'POST',
  	headers: {Authorization: `token ${getToken()}`}
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}





// const token = '24f59c7753d77d0e6049a4c3a6b70bb21ab69232'
 
// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => res.json()).then(json => console.log(json));