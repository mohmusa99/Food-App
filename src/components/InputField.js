import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Wrapper = styled.div`
  margin-bottom: 18px;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const Label = styled.label`
  font-family: 'Yu Gothic UI';
  font-weight: lighter;
  font-size: 12px;
  display: block;
  color: #868686;
`;

const StyledInput = styled.input`
  width: 100%;
  padding-bottom: 5px;
  font-family: 'Yu Gothic UI';
  font-weight: 500;
  font-size: 16px;
  border-bottom: 1px solid #F3F2F2;
  outline: none;

  &:focus {
    border-color: #868686;
  }
`;

const IconWrapper = styled.div`
  cursor: pointer;
  color: #979797;

  &:hover {
    color: #000;
  }
`;

const InputField = ({ label, type, value, onChange, placeholder }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <Wrapper>
            <LabelWrapper>
                <Label>{label}</Label>

                {type === 'password' && (
                    <IconWrapper onClick={togglePasswordVisibility}>
                        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                    </IconWrapper>
                )}
            </LabelWrapper>

            <StyledInput
                type={type === 'password' && isPasswordVisible ? 'text' : type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />

        </Wrapper>
    );
};

export default InputField;
