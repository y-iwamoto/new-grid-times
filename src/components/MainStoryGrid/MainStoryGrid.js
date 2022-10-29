import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
    grid-template-columns: 1fr 252px;
  }
  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    grid-template-columns: 1fr 385px 275px;
  }
  gap: 48px;
  margin-bottom: 48px;
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  position: relative;
  @media ${QUERIES.tabletAndUp} {
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

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
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

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const OpinionStoryList = styled.div`
  display: flex;
  flex-direction: column;
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
  }
  gap: 32px;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  position: relative;
  @media ${QUERIES.laptopAndUp} {
    &::after {
      content: '';
      position: absolute;
      border-top: 1px solid var(--color-gray-300);
      top: -25px;
      width: 100%;
      height: 100%;
    }
  }
`;

export default MainStoryGrid;
