import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 5px 10px 18px #BBB;
  border-radius: 3px;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
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