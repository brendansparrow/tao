(function () {
  'use strict'

	// Make dot navigation visible
  var nav = document.getElementById('main-navigation')

  nav.style.display = 'flex'
  nav.className += ' visible'

	// Make array from sections
  var section = document.querySelectorAll('h3 > a')
  var sections = {}
  var i = 0; Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop
  })

	// Update current nav-link
  window.onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.current').removeAttribute('aria-current')
        document.querySelector('.current').className = document.querySelector('.current').className.replace(' current', '')
        document.querySelector('a[href*=' + i + ']').classList.toggle('current')
        document.querySelector('a[href*=' + i + ']').setAttribute('aria-current', true)
      }
    }
  }
})()
