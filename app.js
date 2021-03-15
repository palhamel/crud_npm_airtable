require('dotenv').config()
// console.log(process.env.API_KEY_AIRTABLE)
// console.log(process.env.BASE_AIRTABLE)

var Airtable = require('airtable')
var base = new Airtable({ apiKey: process.env.API_KEY_AIRTABLE }).base(
  process.env.BASE_AIRTABLE
)
// console.log(base)

const table = base('uscreen')

// get all:
const getRecords = async () => {
  const records = await table
    .select({ maxRecords: 3, view: 'Grid view' })
    .firstPage()
  console.log(records)
}
// getRecords()

// get by id:
const getRecordById = async () => {
  const record = await table.find('recg2D5xnT347MMdT')
  console.log(record)
}
getRecordById()