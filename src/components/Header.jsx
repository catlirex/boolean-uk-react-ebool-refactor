import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

const StyledHeader = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  height: 100px;

  .header__logo {
    margin: 0 1rem;
    font-size: 3.5rem;
  }

  &:after {
    display: block;
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 80%;
    justify-self: center;
    content: "";
    border-bottom: 2px solid var(--border-colour);
  }

  .header__nav {
    margin-left: 3rem;
  }

  .header__nav li {
    display: inline-block;
    margin-left: 1rem;
    padding: 0.5rem;
    font-size: 1.5rem;
  }

  .header__nav li:hover {
    text-decoration: underline;
  }
`;

function Header() {
  let history = useHistory();
  return (
    <StyledHeader
      className="header"
      style={{ ["--border-colour"]: `var(--${randColour()})` }}
    >
      <div className="header__logo" style={{ color: `var(--${randColour()})` }}>
        ebool
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Button size="large">
              <Link
                to={{
                  pathname: `/products`,

                  href: `/products`,
                }}
              >
                Home
              </Link>
            </Button>
          </li>
          <li>
            <Button size="large">
              <Link
                to={{
                  pathname: `/categories`,

                  href: `/categories`,
                }}
              >
                Categories
              </Link>
            </Button>
          </li>
          <li>
            <Button size="large">
              <Link
                to={{
                  pathname: `/basket`,

                  href: `/basket`,
                }}
              >
                Basket
              </Link>
            </Button>
          </li>
          <li>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                history.push(`/search/${e.target.searchBar.value}`);
              }}
            >
              <TextField
                type="text"
                name="searchBar"
                id="searchBar"
                placeholder="Search any product..."
              />
            </form>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;
