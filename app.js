require('dotenv').config()
// console.log(process.env.API_KEY_AIRTABLE)
// console.log(process.env.BASE_AIRTABLE)
var Airtable = require('airtable')
var base = new Airtable({ apiKey: process.env.API_KEY_AIRTABLE }).base(
  process.env.BASE_AIRTABLE
)
// console.log(base)
const table = base('uscreen')
// console.log(table)

// ==> get all:
const getRecords = async () => {
  const records = await table
    .select({ maxRecords: 3, view: 'Grid view' })
    .firstPage()
  console.log(records)
}
// getRecords()

// ==> get by id:
const getRecordById = async (theId) => {
  const record = await table.find(theId)
  console.log(record)
}
getRecordById('recg2D5xnT347MMdT')
