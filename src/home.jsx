function Home() {
  return (
    <main>
      <h1>Jiu Jitsu Journal</h1>
      <nav className="nav">
        <ul>
          <li>
            <a href="/jiu-jitsu-journal/client/src/moves/MoveIndex.jsx">
              Your moves
            </a>
          </li>
          <li>
            <a href="/jiu-jitsu-journal/client/src/moves/NewMoveForm.jsx">
              Add move
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Home;
