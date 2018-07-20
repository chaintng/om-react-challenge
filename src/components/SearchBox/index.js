import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4em;
  max-width: 800px;
  margin: auto;
  
  input {
    width: 100%;
  }
`;

class SearchBox extends Component {
  render() {
    return (
      <Wrapper>
        <div style={{margin: '0px 10px'}}><i className="fa fa-search"></i></div><input type="text" />
      </Wrapper>
    );
  }
}

export default SearchBox;