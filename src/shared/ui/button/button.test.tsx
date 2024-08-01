import { screen, render, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button tests', () => {
  it('should render button with the correct text content', () => {
    render(<Button data-testid="button">Button</Button>);

    expect(screen.getByTestId('button')).toHaveTextContent('Button');
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = vitest.fn();

    render(
      <Button data-testid="button" className="test" onClick={handleClick}>
        Button
      </Button>
    );

    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
