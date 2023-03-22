import { render, screen } from '@testing-library/react';
import { NavLink } from 'components';
import { ProjectsLink } from 'types';
import { BrowserRouter } from 'react-router-dom';

const mockProps: ProjectsLink = {
  id: 'mockID',
  title: 'mockTitle',
};

describe('NavLink Component', () => {
  test('props로 전달받은 id를 렌더링한다.', () => {
    render(
      <BrowserRouter>
        <NavLink navData={mockProps} />
      </BrowserRouter>
    );
    const navId = screen.getByText(mockProps.id);
    expect(navId).toBeInTheDocument();
  });

  test('props로 전달받은 title을 렌더링한다.', () => {
    render(
      <BrowserRouter>
        <NavLink navData={mockProps} />
      </BrowserRouter>
    );
    const navTitle = screen.getByText(mockProps.title);
    expect(navTitle).toBeInTheDocument();
  });
});
