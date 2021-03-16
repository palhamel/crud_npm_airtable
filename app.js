require('dotenv').config()

const apiAirTable = process.env.API_KEY_AIRTABLE
const baseAirTable = process.env.BASE_AIRTABLE

var Airtable = require('airtable')

var base = new Airtable({ apiKey: apiAirTable }).base(baseAirTable)
const table = base('uscreen')

/*
error handling via async try/catch (err)
*/

// function to console.log only the important parts in the return:
const selectedInfo = (data) => {
  // <<<<<<<<<<<
  return {
    id: data.id,
    fields: data.fields,
    // createdTime: data.createdTime, // <= not working
  }
}

// ----------------------------------------------------

// ==> GET all records in table
const getRecords = async () => {
  try {
    const records = await table
      .select({ maxRecords: 3, view: 'Grid view' })
      .firstPage()
    console.log('list all', records)
  } catch (err) {
    console.error(err)
  }
}
// getRecords()

// ----------------------------------------------------

// ==> GET record by id
const getRecordById = async (theId) => {
  try {
    const record = await table.find(theId)
    console.log('list one:', record)
  } catch (err) {
    console.error(err)
  }
}
// getRecordById('recg2D5xnT347MMdT')

// ----------------------------------------------------

// ==> CREATE records
const createRecord = async (fields) => {
  try {
    const createdRecord = await table.create(fields)
    console.log('created:', selectedInfo(createdRecord))
  } catch (err) {
    console.error(err)
  }
}
// createRecord({
//   id: 200,
//   name: 'Jim',
//   email: 'jim@email.se',
//   custom_fields: 'new addition',
//   event: 'user_created',
// })
// ----------------------------------------------------

// ==> UPDATE records
const updateRecord = async (id, fields) => {
  try {
    const updatedRecord = await table.update(id, fields)
    console.log('updated:', selectedInfo(updatedRecord))
  } catch (err) {
    console.error(err)
  }
}
// updateRecord('rec4T7LlvkUMh6hiK', {
//   name: "Benke von updated",
// })
// ----------------------------------------------------

// ==> DELETE records
const deleteRecord = async (id) => {
  try {
    const deletedRecords = await table.destroy(id)
    console.log('deleted:', selectedInfo(deletedRecords))
  } catch (err) {
    console.error(err)
  }
}

deleteRecord('recUuA1wXiyyc1rvg')
