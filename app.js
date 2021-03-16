require('dotenv').config()

const apiAirTable = process.env.API_KEY_AIRTABLE
const baseAirTable = process.env.BASE_AIRTABLE

var Airtable = require('airtable')

var base = new Airtable({ apiKey: apiAirTable }).base(baseAirTable)
const table = base('uscreen')

// ----------------------------------------------------

// ==> get all records in table:
const getRecords = async () => {
  const records = await table
    .select({ maxRecords: 3, view: 'Grid view' })
    .firstPage()
  console.log(records)
}
// getRecords()

// ----------------------------------------------------

// ==> get record by id:
const getRecordById = async (theId) => {
  const record = await table.find(theId)
  console.log(record)
}
// getRecordById('recg2D5xnT347MMdT')

// ----------------------------------------------------

// ==> create records
const createRecord = async (fields) => {
  const createdRecord = await table.create(fields)
  console.log(selectedInfo(createdRecord))
}
// function to clg only the important parts in return:
const selectedInfo = (data) => {
  return {
    id: data.id,
    fields: data.fields,
    // createdTime: data.createdTime, // <= not working yet
  }
}
createRecord({
  id: 200,
  name: 'Jim',
  email: 'jim@email.se',
  custom_fields: 'new addition',
  event: 'user_created',
})
// ----------------------------------------------------
