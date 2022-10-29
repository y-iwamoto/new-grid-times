import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MarketsSection = styled.section`
  position: relative;
  @media ${QUERIES.laptopAndUp} {
      &::after {
        content: '';
        position: absolute;
        border-right: 1px solid var(--color-gray-300);
        top: 0px;
        right: -25px;
        width: 100%;
        height: 100%;
      }
    }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));;
  }
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(3, 185px);
  }
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  overflow-x: hidden;
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(5, calc(33% - 40px));
    overflow-x: auto;
  }
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(5, calc(45% - 40px));
    overflow-x: auto;
  }
`;

export default SpecialtyStoryGrid;
