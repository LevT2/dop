// const myJestHelper = require("../src/myjesthelper");

const Ajv = require("ajv")
const ajv = new Ajv()

const searchBooksRequestSchema = {
    "type": "object",
    "properties": {
        "title": {"type": "string"},
        "fields": {
            "type": "array",
            "items": {"type": "string"}
        }
    },
    "required": ["title", "fields"]
};
const searchBooksRequest = {
    "title": "habit",
    "fields": ["title", "weight", "number_of_pages"]
};

const sut_func = ajv.validate
const toMatch = (schema, input) => expect(sut_func(schema, input)).toBe(false)

console.log(ajv.validate(searchBooksRequestSchema, searchBooksRequest))

// describe ("--", () => {
    test('ajv.validate - works // oops not working too', () => {
        console.log(ajv.validate(searchBooksRequestSchema, searchBooksRequest))
        expect(ajv.validate(searchBooksRequestSchema, searchBooksRequest)).toEqual(false)
    })


    test("ajv.validate - why doesn't?", () => {
        toMatch(searchBooksRequestSchema, searchBooksRequest)
    })
// })