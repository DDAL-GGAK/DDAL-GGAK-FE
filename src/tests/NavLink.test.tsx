import { render, screen } from '@testing-library/react';
import { NavLink } from 'components';
import { ProjectsLink } from 'types';
import { BrowserRouter } from 'react-router-dom';
// import { getUserProjects } from 'api';

const mockProps: ProjectsLink = {
  id: 'mockID',
  projectTitle: 'mockTitle',
  thumbnail: 'mockImage',
};

const mockPropsWithoutThumbnail: ProjectsLink = {
  id: 'mockID',
  projectTitle: 'mockTitle',
  thumbnail: null,
};

describe('NavLink Component', () => {
  const { id, projectTitle, thumbnail } = mockProps;

  test('클릭 시, 동적라우팅 된 page로 이동한다', () => {
    render(
      <BrowserRouter>
        <NavLink data={mockProps} />
      </BrowserRouter>
    );
    const navLink = screen.getByRole('link');
    expect(navLink).toHaveAttribute('href', `/project/${id}`);
  });

  test('thumbnail이 없는 경우, projectTitle의 첫 문자를 대문자로 렌더링한다.', () => {
    render(
      <BrowserRouter>
        <NavLink data={mockPropsWithoutThumbnail} />
      </BrowserRouter>
    );
    const navTitle = screen.getByText(projectTitle.toUpperCase()[0]);
    expect(navTitle).toBeInTheDocument();
  });

  test('thumbnail이 있는 경우, thumbnail 컴포넌트를 렌더링한다.', () => {
    render(
      <BrowserRouter>
        <NavLink data={mockProps} />
      </BrowserRouter>
    );
    const navThumnail = screen.getByRole('img');
    expect(navThumnail).toHaveAttribute('src', thumbnail);
  });
});
