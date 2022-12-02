import styled from "styled-components";

export const FormGroup = styled.div`
  color: palevioletred;
  display: block;
  width: 300px;
  margin: 20px auto;
`;

export const Label = styled.label`
  color: black;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 25px auto;
  color: black;
  border: 2px solid lightgrey;
  border-radius: 3px;
  font-size: 20px;
  width: 100%;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: black;
  display: block;
`;
export const Select = styled.select`
    display: block;
	margin: 25px auto;
	padding: 0.5em;
	color: black;
	border: 2px solid lightgrey;
	border-radius: 3px;
    font-size:20px
	width: 100%;
`;
export const Option = styled.option`
  color: black;
  display: block;
`;

export const Button = styled.button`
  display: inline-block;
  background-color: darkred;
  border: 2px double #bc8f8f;
  border-radius: 18px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 35px;
`;
