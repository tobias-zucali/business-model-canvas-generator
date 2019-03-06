import { forceArray, mergeArraysByKey } from '../index'


describe('utils/array', () => {
  describe('forceArray', () => {
    it('returns input value if it is already an array', () => {
      const value = [1, 2, 3]
      expect(
        forceArray(value)
      ).toBe(
        value
      )
    })

    it('wraps in an array', () => {
      expect(
        forceArray('abc')
      ).toEqual(
        ['abc']
      )

      expect(
        forceArray({ test: 'ja' })
      ).toEqual(
        [{ test: 'ja' }]
      )

      expect(
        forceArray(false)
      ).toEqual(
        [false]
      )
    })

    it('returns empty array', () => {
      expect(
        forceArray(null)
      ).toEqual(
        []
      )

      expect(
        forceArray(undefined)
      ).toEqual(
        []
      )

      expect(
        forceArray()
      ).toEqual(
        []
      )
    })
  })

  describe('mergeArraysByKey', () => {
    it('merges arrays', () => {
      const source = [
        { id: 'a', destination: true },
        { id: 'b', destination: true },
      ]
      const destination = [
        { id: 'b', source: true },
        { id: 'c', source: true },
      ]

      expect(
        mergeArraysByKey(source, destination, { key: 'id' })
      ).toEqual([
        { id: 'a', destination: true },
        { id: 'b', destination: true, source: true },
        { id: 'c', source: true },
      ])
    })

    it('returns destination if source is no array or nil', () => {
      const destination = [{ id: 'a' }]

      expect(
        mergeArraysByKey('hugo', destination, { key: 'id' })
      ).toEqual(
        destination
      )

      expect(
        mergeArraysByKey(null, destination, { key: 'id' })
      ).toEqual(
        destination
      )

      expect(
        mergeArraysByKey(undefined, destination, { key: 'id' })
      ).toEqual(
        destination
      )
    })

    it('returns source if source is nil', () => {
      const source = [{ id: 'a' }]

      expect(
        mergeArraysByKey(source, null, { key: 'id' })
      ).toEqual(
        source
      )

      expect(
        mergeArraysByKey(source, undefined, { key: 'id' })
      ).toEqual(
        source
      )
    })
  })
})
