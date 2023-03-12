/*
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/) (removed storing preferred theme)
 * Copyright 2011-2022 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
    'use strict'

    const getPreferredTheme = () => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  
    const setTheme = function (theme) {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
      }
    }
  
    setTheme(getPreferredTheme())
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        setTheme(getPreferredTheme())
    })
  
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            setTheme(theme)
          })
        })
    })
})()