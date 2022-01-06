const fetchUsers = async () => {
  userList = document.querySelector('#users')

  // const res = await fetch('http://localhost:9000/getusers')
  const res = await fetch('/.netlify/functions/getusers')
  const data = await res.json()

  console.log('data =', data)

  data.forEach((user, index) => {
    const card = document.createElement('div')
    card.className = 'card'
    const li = document.createElement('li')
    li.className = 'list-group-item'
    const link = document.createElement('a')
    link.appendChild(document.createTextNode((index + 1) + '. ' + user.login))
    link.href = user.html_url
    link.target = '_blank'
    li.appendChild(link)
    card.appendChild(li)
    userList.appendChild(card)
  })
}

fetchUsers()
