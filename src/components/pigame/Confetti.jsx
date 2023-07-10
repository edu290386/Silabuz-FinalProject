import Confetti from 'react-confetti';

const ConfettiCheck = () => {

    return (
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
      />
    );
  };

export default ConfettiCheck;