import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LaptopVisible>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>

        </LaptopVisible>
        <Logo />
        <LaptopVisible>
          <CenterBox>
            <Button>
              Subscribe
            </Button>
            <Anchor>
              Already a subscriber?
            </Anchor>
          </CenterBox>
        </LaptopVisible>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const LaptopVisible = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;
const Anchor = styled.a`
  font-family: var(--font-family-serif);
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-decoration-line: underline;
  color: var(--color-gray-900);

`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
  }
  margin-top: 32px;
  margin-bottom: 48px;
`;

export default Header;
