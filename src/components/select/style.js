import styled from 'styled-components';

export const SelectArea = styled.div`
  width: ${props => props.width};

  select {
    width: 100%;
    height: 32px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 0px 8px;
    cursor: pointer;
    
    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }
`;
