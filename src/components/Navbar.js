import routes from '../routes';
import NavbarLink from './NavbarLink';

function Navbar() {
  return (
    <>
      {routes.map(({ path, label }) => (label ? (
        <NavbarLink
          key={`nav-link-${path}`}
          to={path}
          label={label}
        />
      ) : null))}
    </>
  );
}

export default Navbar;
