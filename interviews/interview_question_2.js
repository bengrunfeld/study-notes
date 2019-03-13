let myPromise = new Promise( (resolve, reject) => {
  setTimeout(() => {resolve()},2000)
})

const url = 'https://googlesamples.github.io/web-fundamentals/fundamentals/getting-started/primers/story.json'

const makeRequest = (url, n=0) => {

  let myPromise = new Promise( (resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function(e) {
      if (this.status !== 200) {
        console.log(this.statusText)
        reject('error: something not ok' + this.statusText)
      } else {
        let result = this.response
        resolve(result)
      }
    }
    
    setTimeout(() => {xhr.send()}, n)
    
  })
  
  return myPromise
}

let result = makeRequest(url, 2000).then(JSON.parse)





