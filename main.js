// ==UserScript==
// @name         Amazonほしいものリスト移動ポップアップ拡大
// @namespace    https://next.waterleaper.net/
// @version      0.2
// @description  Amazonのほしいものリスト移動ポップアップを拡大します
// @author       waterleaper
// @match        https://www.amazon.co.jp/hz/wishlist/ls/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license MIT
// ==/UserScript==

;(function () {
  "use strict"
  let popupBtns = document.querySelectorAll("input.a-button-input")
  let indexes = []
  popupBtns.forEach((btn, i) => {
    const label = btn.getAttribute("aria-labelledby")
    btn.addEventListener("click", () => {
      setTimeout(() => {
        const popups = document.querySelectorAll(".a-popover-inner")
        popups.forEach((popup) => {
          popup.style.height = "360px"
        })
      }, 2000)
    })
  })
})()
