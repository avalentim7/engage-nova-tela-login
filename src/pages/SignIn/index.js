import React from 'react';

import { Container, Content, Background, GroupButton, LabelFloat } from './styles';

import { FiFacebook, FiPlus } from 'react-icons/fi'
import { FcAndroidOs, FcGoogle, FcNext } from 'react-icons/fc'

import logoImg from '../../assets/logo_scania.png';

const SignIn = () => (
  <>
    <Container>
        <span>2.8.40</span>
      <Content>
        <img src={logoImg} alt="Logotipo" />

        <form>
          <h1>Fazer login</h1>
          <LabelFloat>
            <input type="text" placeholder=" "></input>
            <label>Nome de Usuário</label>
          </LabelFloat>

          <LabelFloat>
            <input type="password" placeholder=" "></input>
            <label>Senha</label>
          </LabelFloat>

          <GroupButton>
            <button class="facebook" type="button"><FiFacebook size="20" color="white" /></button>
            <button class="google" type="button"><FcGoogle size="20" /></button>
            <button class="sso" type="button"><FcAndroidOs size="20" /></button>
          </GroupButton>

          <a href="/">Esqueci minha senha</a>
          <button type="submit">
            <FcNext size="20"></FcNext>
          </button>
        </form>

        <a href="/">
          <FiPlus />
          Cadastre-se
          </a>

      </Content>
      <Background />
    </Container>
  </>
)

export default SignIn;