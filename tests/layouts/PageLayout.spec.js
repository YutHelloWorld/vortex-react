import React from 'react'
import PageLayout from 'layouts/PageLayout/PageLayout'
import { shallow } from 'enzyme'
import { Navbar } from 'reactstrap'

describe('(Layout) PageLayout', () => {
  it('renders a <NavBar />', () => {
    const wrapper = shallow(<PageLayout />)
    expect(wrapper.find(Navbar)).to.have.length(1)
  })
})
