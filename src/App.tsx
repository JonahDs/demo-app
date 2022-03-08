import React from 'react';
import Button, { buttonColors } from './components/button';

const App = (): JSX.Element => {
  const handleClick = React.useCallback(() => {
    console.log('clicked');
  }, [])

  return (
    <div>
      <Button value="Search" type={buttonColors.ORANGE} onClick={handleClick}/>
    </div>
  );
}

export default App;
