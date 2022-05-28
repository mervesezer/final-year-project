import * as React from 'react';
import { TextInput } from 'react-native-paper';

const MyComponent = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput style={{}}
      value={text}
      onChangeText={text => setText(text)}
      autoComplete
      underlineColor='pink'
      mode='outlined'
      placeholder='email'
      selectionColor='blue'
      underlineColorAndroid="transparent"
      autoCorrect={false}
      activeOutlineColor="blue"
    />
  );
};

export default MyComponent;