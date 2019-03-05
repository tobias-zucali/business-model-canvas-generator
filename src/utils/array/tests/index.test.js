import { forceArray } from '../index'


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
})
