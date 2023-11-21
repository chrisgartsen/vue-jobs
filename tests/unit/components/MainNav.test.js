import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('Vue Careers')
    expect(companyName).toBeInTheDocument()
  })
})