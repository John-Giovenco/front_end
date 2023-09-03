import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function MoveIndex(data) {
  const navigate = useNavigate();

  const [moves, setMoves] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/moves`);
      const resData = await response.json();
      setMoves(resData);
    };
    fetchData();
  }, []);

  let movesFormatted = moves.map((move) => {
    return (
      <div className="col-sm-6" key={move.moveId}>
        <h2>
          <a href="#" onClick={() => navigate.push(`/moves/${move.moveId}`)}>
            {move.name}
          </a>
        </h2>
      </div>
    );
  });
  return (
    <main>
      <h1> Your Moves</h1>
      <div className="row">{movesFormatted}</div>
    </main>
  );
}

export default MoveIndex;
