import React from "react"
import Link from "../components/link/Link"
import ReactDOM from "react-dom"
import { act } from "react-dom/test-utils"

let container
let link

beforeEach(() => {
  container = document.createElement("div")
  act(() => {
    ReactDOM.render(
      <Link page="http://www.facebook.com">Facebook</Link>,
      container
    )
  })
  link = container.querySelector("a")
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

test("Pass href props to html link", () => {
  expect(link.href).toBe("http://www.facebook.com/")
})

test("Check class after mouse action", () => {
  expect(link.className).toBe("normal")
})

test("Check class before mouse action", () => {
  act(() => {
    link.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }))
  })
  expect(link.className).toBe("hovered")
})
