import styled from "styled-components";


// drop list 
export const DropListWrapper = styled.div`
position: absolute;
border: 1px solid #bfc5cd;
border-radius: 7px;
box-shadow: 0 5px 15px 0 rgba(74, 74, 74, 0.15);
background-color: #ffffff;
max-height: 300px;
overflow-y: auto;
z-index: 1;
left: 0;
right: 0;
width: 22.5%;
top: 75px;
`;

export const ListItem = styled.div`
cursor: pointer;
padding: 10px;
&:hover {
  background-color: #f7f7f7;
}
`;

// Input field
export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
`;

export const StyledInput = styled.input`
  width: 20%;
  padding: 16px;
  border: 1px solid #bfc5cd;
  appearance: none;
  border-radius: 7px;
  background-color: transparent;
  &:hover,
  &:focus {
    border-color: #4a4a4a;    
  }
  &::placeholder{
    opacity: 0;
  }
  &,
  & + label {
    transition: all 0.3s ease-out;
    cursor: text;
  }
  & + label {
    width: max-content;
    color: #798697;
  }
  &:placeholder-shown + label {
    transform-origin: left bottom;
    transform: translate(16px, 35px) scale(1);
  }
  &:not(:placeholder-shown),
  &:focus {
    & + label {
      transform: translate(7px, 0) scale(1);
      cursor: pointer;
    }
    &::placeholder {
      transform: translateX(0);
      opacity: ${({ placeholder }) => (placeholder ? 1 : 0)};
    }
  }
`;

// Search bar 
export const Div = styled.div`
  position: relative;
`;



