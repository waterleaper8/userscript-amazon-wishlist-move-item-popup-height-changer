// ==UserScript==
// @name         Amazonほしいものリスト移動ポップアップ拡大
// @namespace    https://next.waterleaper.net/
// @version      0.1
// @description  Amazonのほしいものリスト移動ポップアップを拡大します
// @author       waterleaper
// @match        https://www.amazon.co.jp/hz/wishlist/ls/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

;(function () {
  "use strict"
  let popupBtns = document.querySelectorAll("input.a-button-input")
  let indexes = []
  popupBtns.forEach((btn, i) => {
    const label = btn.getAttribute("aria-labelledby")
    if (!label.indexOf("move-to-list-button")) {
      indexes.push(i)
      btn.addEventListener("click", () => {
        setTimeout(() => {
          const target = indexes.indexOf(i) + 1
          console.log(target)
          const popups = document.querySelectorAll(".a-popover-inner")
          popups.forEach((popup) => {
            popup.style.height = "360px"
          })
        }, 1500)
      })
    }
  })
})()
