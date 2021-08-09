import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import CheckboxWithLabel from "../components/checkboxWithLabel/CheckboxWithLabel"

Enzyme.configure({ adapter: new Adapter() })

test("CheckboxWithLabel starts with Off text", () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />)

  expect(checkbox.text()).toEqual("Off")
})

test("CheckboxWithLabel changes the text after click", () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />)

  checkbox.find("input").simulate("change")

  expect(checkbox.text()).toEqual("On")
})
