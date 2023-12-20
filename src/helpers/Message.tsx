import React from 'react';
import { FormattedMessage } from 'react-intl';

interface MessageProps {
  id: string;
  defaultMessage?: string;
  values?: Record<string, string | number>;
}

export const Message: React.FC<MessageProps> = ({
  id,
  defaultMessage,
  values,
}) => {
  return (
    <FormattedMessage id={id} defaultMessage={defaultMessage} values={values}>
      {(message) => <>{message}</>}
    </FormattedMessage>
  );
};
