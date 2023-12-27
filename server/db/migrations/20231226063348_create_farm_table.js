import db from '../db.js';

;(async () => {
  try {
    await db.schema.dropTableIfExists('farms')
    await db.schema.withSchema('public').createTable('farms', (table) => {
      table.increments('id')
      table.string('SiteInfor')
      table.string('Country')
      table.integer('Latitude')
      table.integer('Longitude')
      table.integer('Elevation')
      table.integer('MAT')
      table.integer('MAP')
      table.string('ClimateType')
      table.string('SamplingDepth')
      table.string('SamplingThickness')
      table.integer('SandPerc')
      table.integer('SiltPerc')
      table.integer('ClayPerc')
      table.string('Texture')
      table.integer('SoilpH')
      table.string('CoverCrop')
      table.string('CoverCropGroup')
      table.string('GrainCrop')
      table.string('GrainCropGroup')
      table.string('Tillage_C')
      table.string('Tillage_T')
      table.string('Fertilization_C')
      table.string('Fertilization_T')
      table.string('Conservation_Type')
      table.string('ControlDescription')
      table.integer('Yield_C')
      table.integer('Yield_T')
      table.integer('Weed_C')
      table.integer('Weed_T')
      table.timestamps(true, true)
    })
    console.log('farms table created!')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()

