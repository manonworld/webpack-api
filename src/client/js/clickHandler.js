function handleClick(event) {
    fetch('https://api.publicapis.org/entries')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = JSON.stringify(res.entries)
    })
}

export { handleClick }
