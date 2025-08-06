import { test, expect, describe, vi, beforeEach, afterEach } from "vitest"
import {App, GetRandomDieValues} from '../App'

beforeEach(() => {

})

describe('GetRandomDieValues', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  

  let testCases = [
    [0, 1],
    [0.1, 1],
    [0.2, 2],
    [0.3, 2],
    [0.4, 3],
    [0.5, 3],
    [0.6, 4],
    [0.7, 5],
    [0.8, 5],
    [0.9, 6],
    [1.0, 6]
  ]
  
  test.each(testCases)('returns expected values', (mockRandom, expectedValue) => {
    // Arrange
    vi.spyOn(global.Math, 'random').mockReturnValue(mockRandom)

    // Act
    let randomDieValues = GetRandomDieValues();
    console.log(randomDieValues);

    // Assert
    randomDieValues .forEach(value => {
      expect(value).toBe(expectedValue);
    });
  })
})
