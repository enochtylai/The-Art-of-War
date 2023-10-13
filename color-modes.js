/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const storedTheme = localStorage.getItem('theme')

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme
    }

    return 'dark'
  }

  const setTheme = function (theme) {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = theme => {
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.add('d-none')
    })

    btnToActive.classList.remove('d-none')
  }
  
  window.addEventListener('load', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          if (theme == 'dark') {
            localStorage.setItem('theme', 'light')
            setTheme('light')
            showActiveTheme('light')
          } else {
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
            showActiveTheme('dark')
          }
        })
      })
  })
})()
