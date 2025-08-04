import { render, screen, waitFor, within, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, describe, vi, beforeEach } from "vitest"
import App from '../App'
beforeEach(() => {
  vi.mock("../ai", () => ({
    getRecipeFromGemini: () => Promise.resolve({text: "# Recipe mock\r\nThis is a mocked recipe"})
  }))

  window.HTMLElement.prototype.scrollIntoView = vi.fn()
})

describe('Chef Gemini App', () => {
  it('renders the header', async () => {
    //Arrange
    render(<App />)

    //Act
    let header = screen.getByTestId("chef-header")
    //console.log(header)

    //Assert
    let logo = within(header).getByTestId("chef-logo")
    expect(logo).toBeVisible()

    let text = within(header).getByText("Chef Gemini")
    expect(text).toBeVisible()
    
    screen.debug() // prints out the jsx in the App component unto the command line
  })

  it ('allows entering ingredients', async () => {

    //Arrange
    var r = render(<App />)
    //Act
    
    await enterIngredient("Oregano")

    /*await waitFor(async () => {
      expect(screen.getByLabelText("Add ingredient")).toHaveValue("")
    })*/

    await enterIngredient("Basil")

    await enterIngredient("Beef Mince")

    await enterIngredient("Tomatoes")

    screen.debug();

    //Assert

    let ingredientsList = screen.getByRole("list")
    await assertIngredient("Oregano", ingredientsList)
    await assertIngredient("Basil", ingredientsList)
    await assertIngredient("Beef Mince", ingredientsList)
    await assertIngredient("Tomatoes", ingredientsList)

    //Get a recipe
    let recipeButton = await screen.findByText("Get a recipe");
    expect(recipeButton).toBeVisible();

  })

  it ('when clicking get recipe - returns recipe', async () => {

    //Arrange
    var r = render(<App />)
    //Act
    
    await enterIngredient("Oregano")

    await enterIngredient("Basil")

    await enterIngredient("Beef Mince")

    await enterIngredient("Tomatoes")

    //click get a recipe
    let recipeButton = await screen.findByText("Get a recipe");
    expect(recipeButton).toBeVisible();
    await userEvent.click(recipeButton);

    //Assert
    let recipeText = await screen.findByText("Recipe mock")
    expect(recipeText).toBeVisible()
    screen.debug()
  })

  //Helper functions
  async function enterIngredient(text) {

    let input = screen.getByLabelText("Add ingredient")
    let button = screen.getByRole("button")

    await userEvent.clear(input) //Manual clearing is necessary because JSDOM doesn't fully implement form behaviour
    expect(input).toHaveValue("")

    await userEvent.type(input, text)
    expect(input).toHaveValue(text)

    await userEvent.click(button)
    expect(input).toHaveValue("")
  }

  async function assertIngredient(text, ingredientsList) {
    var ingredient = await within(ingredientsList).findByText(text)
    expect(ingredient).toBeVisible()
  }
})
