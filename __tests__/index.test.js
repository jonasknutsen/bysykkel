import { mount } from 'enzyme'
import React from 'react'

import IndexPage from '../pages/index.js'

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<IndexPage />)
      expect(wrap.find('h1').text()).toBe('Bysykler i Oslo')
    })
  })
})
