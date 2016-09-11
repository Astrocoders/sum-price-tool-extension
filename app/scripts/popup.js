'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const moment = require('moment')
  const vmasker = require('vanilla-masker')

  const maskMoneyConfig = {
    unit: 'R$',
    thousands: '.',
    decimal: ','
  }

  const timeEl = document.getElementsByClassName('js-time')[0]
  const rateEl = document.getElementsByClassName('js-rate')[0]
  const totalEl = document.getElementsByClassName('js-total')[0]

  vmasker(timeEl).maskPattern('99:99:99')
  vmasker(rateEl).maskMoney(maskMoneyConfig)

  const sumUp = () => {
    const unMaskedRate = vmasker.toNumber(rateEl.value) / 100
    const sumUp = moment.duration(timeEl.value).asHours() * unMaskedRate
    const sumUpFixed = sumUp.toFixed(2)
    const sumUpFixedHundred = Math.floor(Number(sumUpFixed) * 100)

    totalEl.value = vmasker.toMoney(sumUpFixedHundred, maskMoneyConfig)
  }

  timeEl.addEventListener('keyup', sumUp)
  rateEl.addEventListener('keyup', sumUp)
})
