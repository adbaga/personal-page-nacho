import { render, screen, cleanup } from '@testing-library/react';
import Header from '../Header'

test('should render todo component', () =>{

    render(<Header/>);
    const todoElement = screen.getByTestId('Header-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('NACHO! #ConsentIsSexyHomeServicesBlogContacts')
})