import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Anchor href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <SubWrapper>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </SubWrapper>
      </Wrapper>
    </Anchor>
  );
};

const Anchor = styled.a`
  position: relative;
  &:not(:last-child)::after {
    position: absolute;
    content: " ";
    display: block;
    border-bottom: 1px solid var(--color-gray-300);
    bottom: -16px;
    width: 100%;
    @media ${QUERIES.tabletOnly} {
      border-bottom: 0px;
    }
  }
  @media ${QUERIES.tabletOnly} {
    width: 25%;
  }
`

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 21px;
  @media ${QUERIES.tabletOnly} {
    flex-direction: column;
    align-items: flex-start
  }
`;

const SubWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media ${QUERIES.tabletOnly} {
    display: block;
  }
`

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
