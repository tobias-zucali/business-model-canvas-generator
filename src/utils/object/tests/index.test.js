import { mergeObjects, deepMergeObjects, mapObject, mapEverything } from '../index'


describe('utils/object', () => {
  describe('mergeObjects', () => {
    it('merges plain objects', () => {
      expect(mergeObjects(
        {
          iWillStay: true,
          iWillBeOverwritten: 'yes',
          iWillBeOverwrittenToo: [1, 2],
        },
        {
          iWillBeOverwritten: 'done',
          iWillBeOverwrittenToo: [3, 4],
        }
      )).toEqual({
        iWillStay: true,
        iWillBeOverwritten: 'done',
        iWillBeOverwrittenToo: [3, 4],
      })
    })

    it('returns second argument if first is no object', () => {
      expect(mergeObjects(
        'I am no object',
        'I will be returned',
      )).toEqual(
        'I will be returned'
      )
    })

    it('returns first argument if second is undefined', () => {
      expect(mergeObjects(
        'I will be returned'
      )).toEqual(
        'I will be returned'
      )
    })
  })

  describe('deepMergeObjects', () => {
    it('deep merges plain objects', () => {
      expect(deepMergeObjects(
        {
          iWillStay: true,
          iWillBeMerged: {
            iWillStay: true,
            iWillBeOverwritten: 'yes',
          },
          iWillBeOverwritten: [1, 2],
        },
        {
          iWillBeMerged: {
            iWillBeOverwritten: 'done',
          },
          iWillBeOverwritten: [3, 4],
        }
      )).toEqual({
        iWillStay: true,
        iWillBeMerged: {
          iWillStay: true,
          iWillBeOverwritten: 'done',
        },
        iWillBeOverwritten: [3, 4],
      })
    })
  })

  describe('mapObject', () => {
    it('maps object', () => {
      expect(mapObject(
        {
          a: 1,
          b: 2,
          c: 3,
        },
        (key, value) => `${key}${value}`
      )).toEqual(
        {
          a: 'a1',
          b: 'b2',
          c: 'c3',
        }
      )
    })
  })

  describe('mapEverything', () => {
    it('maps everything', () => {
      expect(mapEverything(
        {
          a: 1,
          b: 2,
          c: 3,
        },
        (key, value) => `${key}${value}`
      )).toEqual(
        {
          a: 'a1',
          b: 'b2',
          c: 'c3',
        }
      )

      expect(mapEverything(
        ['a', 'b', 'c'],
        (key, value) => `${key}${value}`
      )).toEqual(
        ['0a', '1b', '2c']
      )
    })
  })
})
