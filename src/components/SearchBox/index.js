import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4em;
`;

class SearchBox extends Component {
  render() {
    return (
      <Wrapper>
        <div style={{marginRight: '10px'}}>Search Charities:</div><input type="text" />
      </Wrapper>
    );
  }
}

export default SearchBox;