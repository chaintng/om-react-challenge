import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10px 0px;
  border: 1px solid #ccc;
  box-shadow: 5px 10px 18px #BBB;
  border-radius: 3px;
  margin-bottom: 50px;
  overflow: hidden;
  transition: opacity 2s;
  position: relative;
`;

export const CardCoverImageWrapper = styled.div`
  max-height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const CardWithImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

export const PaymentWrapper = styled.div`
  transform: translateY(${props => props.visible ? '0%' : '100%'});
  transition: transform .2s ease-in;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  flex: none;
  
  > * {
    flex-basis: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  > i {
    justify-content: flex-end;
    padding: 0px 20px;
  }
`;

export const PaymentOption = styled.div`
  dislay: flex;
  justify-content: space-around;
`;

export const CardCaption = styled.div`
  display: flex;
  padding: 10px;
  
  > * {
    flex: auto;
    display: flex;
    align-items: center;
  }
  
  > button {
    flex: 0 0 50px;
  }
`;

export const RadioLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
    
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  /* When the radio button is checked, add a blue background */
  & input:checked ~ .checkmark {
      background-color: #2196F3;
  }
  
  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
      content: "";
      position: absolute;
      display: none;
  }
  
  /* Show the indicator (dot/circle) when checked */
  & input:checked ~ .checkmark:after {
      display: block;
  }
  
  /* Style the indicator (dot/circle) */
  & .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
	}
	
  span.checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #FFF;
      border: 1px #888 solid;
      border-radius: 50%;
  }
  
  > input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
  }
`;
RadioLabel.displayName = 'RadioLabel';
