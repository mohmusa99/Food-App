import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FullScreenModal from './FullScreenModal';

const HomePage = () => {
    return (
        <div className='p-5'>
            <FullScreenModal />
            <Section>
                <h2>Featured Partners</h2>
                {/* Restaurant cards would go here */}
                <Link to="/featured-partners">
                    <button>See All</button>
                </Link>
            </Section>

            <Section>
                <h2>All Restaurants</h2>
                {/* Restaurant cards would go here */}
                <Link to="/all-restaurants">
                    <button>See All</button>
                </Link>
            </Section>

            <Section>
                <h2>Best Picks</h2>
                {/* Restaurant cards would go here */}
                <Link to="/best-picks">
                    <button>See All</button>
                </Link>
            </Section>

        </div>
    );
};

const Section = styled.div`
  margin-bottom: 20px;
  h2 {
    font-family: 'Yu Gothic UI';
    font-size: 24px;
    margin-bottom: 10px;
  }
  button {
    font-family: 'Yu Gothic UI';
    background-color: #EEA734;
    color: #FFFFFF;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: #D48B29;
    }
  }
`;

export default HomePage;
