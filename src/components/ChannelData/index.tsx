/* eslint-disable react/jsx-wrap-multilines */
import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const image = 'https://api.adorable.io/avatars/100/guilherme';
  const image2 = 'https://api.adorable.io/avatars/100/diebot';
  const image3 = 'https://api.adorable.io/avatars/100/cassio';
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
        {Array.from(Array(5).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Guilherme Rodz"
            date="21/06/2020"
            content="Hoje é o meu aniversário!"
            image={image}
          />
        ))}
        {Array.from(Array(5).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Cassio Carvalho"
            date="31/07/2020"
            content="Hoje é o meu aniversário!"
            image={image3}
          />
        ))}

        <ChannelMessage
          author="Diego Fernandes"
          date="21/06/2020"
          content={
            <>
              <Mention>@Guilherme Rodz</Mention>
              <>, me carrega no LoL e CS de novo por favor?</>
            </>
          }
          hasMention
          isBot
          image={image2}
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
