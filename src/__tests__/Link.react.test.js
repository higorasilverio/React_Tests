import React from "react"
import Link from "../components/link/Link"
import ReactDOM from "react-dom"
import { act } from "react-dom/test-utils"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

let container
let link

beforeEach(() => {
  container = document.createElement("div")
  act(() => {
    ReactDOM.render(
      <Link page="https://www.facebook.com">Facebook</Link>,
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
  expect(link.href).toBe("https://www.facebook.com/")
})

test("Change href and check its prop", () => {
  const wrapper = shallow(<Link page="#">Google</Link>)
  wrapper.setProps({ page: 'https://www.google.com/' })
  expect(wrapper.find({ href: 'https://www.google.com/' })).toBeTruthy()
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