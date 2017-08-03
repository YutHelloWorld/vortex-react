import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { render } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<HomeView />)
  })

  it('Renders an awesome image', () => {
    const star = _component.find('img')
    expect(star).to.exist()
    expect(star.attr('alt')).to.match(/vortex!/)
  })
})
