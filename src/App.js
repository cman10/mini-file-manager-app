import React, { useState } from 'react';

function App() {
  return (
    <div>
      <h1>File manager</h1>
      <Folder name="Office" >
      <Folder name="Desktop" isOpen={false}>
        <File name="m_image.jpeg" />
        <File name="songnew.mp4" />
        <File name="muysong.mp4" />

      </Folder>
      <Folder name="Home" />
      </Folder>

    </div>
  )

}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {

    setIsOpen(!isOpen);

  }

  const direction = isOpen ? 'down' : 'right';

  const { name, children } = props;
  return <div>
    <span onClick={handleClick} >

      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
    </span>
    {name}
    <div style={{ marginLeft: '17px' }}>
      {isOpen ? children : null}
    </div>
  </div>
}

const File = (props) => {
  const{name}=props;
  const fileNameExtension =name.split('.')[1];
  const fileIcons= {
    mp4:'headphones',
    jpeg:'file image',
    png:'file image outline',
  };
  return <div ><i className={`caret ${fileIcons[fileNameExtension]} icon`}></i>
  {name}
  </div>
}


export default App;
