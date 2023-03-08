function renderHandler () {
  let userIn = source.textContent

  let userHTML = marked.parse(userIn)

  preview.innerHTML = userHTML
}

source.addEventListener('change', renderHandler)
