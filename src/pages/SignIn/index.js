import React from 'react';

import { Container, Content, Background, GroupButton, LabelFloat, Infos } from './styles';

import { FiLock, FiFacebook, FiActivity } from 'react-icons/fi'

import logoImg from '../../assets/logo.png';

const SignIn = () => (
  <>
    <Container>
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
            <button class="facebook" type="button"><FiFacebook /></button>
            <button class="google" type="button"><FiActivity /></button>
            <button class="sso" type="button"><FiLock /></button>
          </GroupButton>

          <a href="/">Esqueci minha senha</a>
          <button type="submit">
            <FiFacebook size="20"></FiFacebook>
          </button>
        </form>

        <a href="/">
          <FiLock />
          Cadastre-se
          </a>

      </Content>

      <Background />
    </Container>
  </>
)

export default SignIn;