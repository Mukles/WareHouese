const Home = () => {
  return (
    <div className="">
      <h1>Hellow form HOme</h1>
      {Array(5).map((i, idx) => console.log(idx))}
    </div>
  );
};

export default Home;
