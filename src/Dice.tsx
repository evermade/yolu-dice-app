const Dice = ({ face }: { face: number }) => (
  <div className={`dice face-${face} `}>
    <div className="diceFace front"></div>
    <div className="diceFace up"></div>
    <div className="diceFace left"></div>
    <div className="diceFace right"></div>
    <div className="diceFace bottom"></div>
    <div className="diceFace back"></div>
  </div>
);

export default Dice;
