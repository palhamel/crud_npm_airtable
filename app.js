require('dotenv').config()
// console.log(process.env.API_KEY_AIRTABLE)
// console.log(process.env.BASE_AIRTABLE)

var Airtable = require('airtable')
var base = new Airtable({ apiKey: process.env.API_KEY_AIRTABLE }).base(
  process.env.BASE_AIRTABLE
)
// console.log(base)

const table = base('uscreen')

const getRecords = async () => {
  const records = await table.select().firstPage()
  console.log(records)
}

getRecords()
