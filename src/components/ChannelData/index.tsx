/* eslint-disable react/jsx-wrap-multilines */
import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(2).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Guilherme Rodz"
            date="21/06/2020"
            content="Hoje é o meu aniversário!"
            image="https://api.adorable.io/avatars/100/guilherme"
          />
        ))}
        <ChannelMessage
          author="Pill Bates"
          date="21/06/2020"
          content={
            <>
              <Mention>@Guilherme Rodz</Mention>
              <> Meus parabéns então!</>
            </>
          }
          image="https://api.adorable.io/avatars/100/pill"
        />
        {Array.from(Array(2).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Cassio Carvalho"
            date="31/07/2020"
            content="Hoje é o meu aniversário!"
            image="https://api.adorable.io/avatars/100/cassio"
          />
        ))}

        <ChannelMessage
          author="Meff Dezzos"
          date="31/07/2020"
          content={
            <>
              <Mention>@Cassio Carvalho</Mention>
              <> Meus parabéns mano!!</>
            </>
          }
          image="https://api.adorable.io/avatars/100/pill"
        />

        <ChannelMessage
          author="Tio das vendas"
          date="01/08/2020"
          content="Alguem ai joga Valorant?"
        />

        <ChannelMessage
          author="Pene Mimmons"
          date="02/08/2020"
          image="https://api.adorable.io/avatars/100/penemimm"
          content="Comecei a jogar essa semana"
        />

        <ChannelMessage
          author="Diego Fernandes"
          date="02/08/2020"
          content={
            <>
              <Mention>@Cassio Carvalho</Mention>
              <>, tem como me carregar no CSGO aee?</>
            </>
          }
          isBot
          image="https://api.adorable.io/avatars/100/doieg"
        />

        <ChannelMessage
          author="Diego Fernandes"
          date="03/08/2020"
          content={
            <>
              <Mention>@Guilherme Rodz</Mention>
              <>, me carrega no LoL e CS de novo por favor?</>
            </>
          }
          hasMention
          isBot
          image="https://api.adorable.io/avatars/100/diego"
        />
        <ChannelMessage
          author="Diego Fernandes"
          date="03/08/2020"
          content={
            <>
              <Mention>@Guilherme Rodz</Mention>
              <>, me carrega no LoL e CS de novo por favor?</>
            </>
          }
          hasMention
          isBot
          image="https://api.adorable.io/avatars/100/diego"
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
