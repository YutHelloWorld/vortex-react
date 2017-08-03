import React from 'react'
import PageLayout from 'layouts/PageLayout/PageLayout'
import { shallow } from 'enzyme'
import { Navbar } from 'reactstrap'

describe('(Layout) PageLayout', () => {
  it('renders as a <div>', () => {
    shallow(<PageLayout />).should.have.tagName('div')
  })

  it('renders a <NavBar />', () => {
    const wrapper = shallow(<PageLayout />)
    expect(wrapper.find(Navbar)).to.have.length(1)
  })

  it('renders its children inside of the viewport', () => {
    const Child = () => <h2>child</h2>
    shallow(
      <PageLayout>
        <Child />
      </PageLayout>
    )
      .find('.page-layout__viewport')
      .should.contain(<Child />)
  })
})
