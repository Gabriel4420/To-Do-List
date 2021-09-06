import React,{ useState, useEffect } from 'react';

import { Container, InputText } from './styles';

function SearchBox(props) {
  const [text, setText] = useState(' ');

  const handleKeyUp = (e) => {
    
    if(e.keyCode === 13){
      if(props.onEnter){
        props.onEnter(text);
        setText('') 
    }
    }
  }

  useEffect(() =>{
    props.onChangeText(text);
  }, [props, text])
  return (
    <Container>
      

      <InputText 
      borderColor={props.borderColor}
      bgColor={props.bgColor}
      colorText ={props.colorText}
      placeholder={props.searchQuery}
      value={text}
      onKeyUp={handleKeyUp}
      onChange={e=> setText(e.target.value)}
      />
    </Container>
  );
};

export default SearchBox;
