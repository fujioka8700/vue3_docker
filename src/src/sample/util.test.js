import { test, expect } from 'vitest'
import { mul, div } from './util'

test('掛け算のテスト', () => {
  expect(mul(6, 9)).toBe(54)
})

test('割り算のテスト', () => {
  expect(div(12, 4)).toBe(3)
})
