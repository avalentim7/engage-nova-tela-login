import styled from 'styled-components';

import { shade } from 'polished';

import signInBackgroundImg from '../../assets/BG.jpg';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 550px;
    max-width: 100%;

    > img {
        width: 20vh;
    }

    form {
        margin: 80px 0 20px 0;
        width: 340px;
        text-align: center;

        > button {
            color: #666;
            padding: 20px;
            border: 1px solid #666360;
            background-color: transparent;
            border-radius: 8px;
            margin-top: 40px;
        }
    }

    svg {
      margin-right: 16px;
    }

    h1 {
        margin-bottom: 24px;
    }

    a {
      color: #333;
      display:block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #3951b2;
      }
    }

    > a {
    color: #FF9000;
    display:block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#FF9000')}
    }
  }
`;

export const GroupButton = styled.div`
    display:flex;
    flex-direction: row;

    button {
        border: 0;
        border-radius: 6px;
        padding: 8px;
        display: flex;
        justify-content: center;
        flex: 1;
        margin-top: 16px;

        & + button {
            margin-left: 10px;
        }
    }

    button.facebook {
        background-color: #3951b2;
    }

    button.google {
        background-color: #ffffff;
    }
    
    button.sso {
        background-color: #333333;
    }
`;


export const LabelFloat = styled.div`
    position: relative;
    padding-top:0;

    & + div {
        margin-top: 8px;
    } 

    label {
        margin-left: 20px;
        padding-top:8px;
    }

    & input {
        background: #e8e8e8;
        border-radius: 6px;
        border: 0;
        border-bottom: 2px solid lightgrey;
        padding: 26px 16px 16px 16px;
        width: 100%;
        display: flex;
        align-items: center;
        
        flex: 1;
        color: #222;

        outline: none;
        min-width: 180px;
        font-size: 16px;
        transition: all .3s ease-out;
        -webkit-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
        -webkit-appearance:none; 

        &::placeholder {
            color: #666360;
        }

        &-internal-autofill-selected {
           background-color: transparent;
        }

    }

    & input:focus{
      border-bottom: 2px solid #3951b2;
    }
    
    & input::placeholder{ 
      color:transparent; 
      margin-top:10px;
      padding-bottom: 20px;
    }

    & label{
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      margin-top: 13px;
      transition: all .3s ease-out;
      -webkit-transition: all .3s ease-out;
      -moz-transition: all .3s ease-out;
    }

    & input:required:invalid + label{
      color: red;
    }

    & input:focus:required:invalid{
      border-bottom: 2px solid red;
    }

    & input:required:invalid + label:before{
      content: '*';
    }

    & input:focus + label,
    & input:not(:placeholder-shown) + label{
      font-size: 12px;
      margin-top: 0;
      margin-left: 8px;
      color: #3951b2;
    }
`;

export const Background = styled.div`
    flex: 1;

    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
    background-repeat:no-repeat;
    background-attachment: fixed;
    background-position: center;
`;