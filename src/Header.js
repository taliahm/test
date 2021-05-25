import React, { useEffect, useState } from "react";

function Header() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [name, setName] = useState('');
  useEffect(() => {
    async function fetchPoke() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const json = await response.json();
      setName(json.name);
    }
    fetchPoke();
  }, [])
  return (
    <header>
      <h1>Pizza Party Plaza</h1>
      <button onClick={() => {setLoggedIn(!loggedIn)}}>
        { loggedIn ? 'Logout' : 'Login' }
      </button>
      <p data-testid="name">welcome {name}</p>
    </header>
  );
}

export default Header;