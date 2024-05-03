import React from 'react';
const Joke = () => {
  //
 State to store the joke
  const [joke, setJoke] = React.useState('');
  // Function to fetch a random joke
  const fetchJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/',
 {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    setJoke(data.joke);
  };
  // Fetch a joke on component mount
  React.useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <div>
      <button onClick={fetchJoke}>Get a new joke</button>
      <p>{joke}</p>
    </div>
  );
};
export default Joke;