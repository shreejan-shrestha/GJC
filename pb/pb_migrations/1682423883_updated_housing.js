migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "flzgnctu",
    "name": "facing_direction",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "N",
        "NE",
        "NW",
        "E",
        "W",
        "S",
        "SE",
        "SW"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9fuupa77nzvq6v")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "flzgnctu",
    "name": "facing_direction",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "North",
        "North-East",
        "North-West",
        "East",
        "West",
        "South",
        "South-East",
        "South-West"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
