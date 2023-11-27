import React from 'react';

const FullWidthBlueBackground = () => {
  const containerStyle = {
    width: '100%',
    minHeight: '100vh', // Ensure the component takes up the full viewport height
    backgroundColor: 'lightblue',
  };

  return (
    <div style={containerStyle}>
      {/* Your content goes here */}
    </div>
  );
};

export default FullWidthBlueBackground;
