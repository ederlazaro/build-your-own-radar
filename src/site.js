require('./common')
require('./images/logo-tech-belcorp.png')
require('./images/radar_legend.png')
require('./gtm.js')

const GoogleSheetInput = require('./util/factory')

const urlGoogleSheetInput = 'https://docs.google.com/spreadsheets/d/1XkBWrM4jGduWIWuwCHuTSwGGCKE7aA7dLg-mj3PsASo/edit?usp=sharing'

GoogleSheetInput().build(urlGoogleSheetInput)
