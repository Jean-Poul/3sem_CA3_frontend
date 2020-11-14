const Reflection = () => {
  return (
    <div>
      <h1>Home of my thoughts</h1>
      <p>My reflections for this project</p>
      <p>
        During this project I have learned how to make additional calls to other
        server while using the correct CORS standards. <br />
        I also gained experience in how to read documentation on external API's.
        The hard thing here is that different API's return different <br />
        kinds of JSON strings. An example could be that my JSON response was an
        object with several other objects that also contained several arrays.{" "}
        <br />
        This made it very hard to use my entities and DTO in the correct way.{" "}
        <br />
        Another error in my code is that when pressing a button, which fetches
        the external data, the console will turn red with errors.
        <br />
        The program will not crash and it works as intended. Finally I have had
        big issues with external links. While the links work on localhost they
        seem to get CORS errors when being <br />
        deployed on my droplet. I also learned that I have to remember to add a
        key to a row when making a list or table.
        <br />
        This is especially important when using the .map function since it needs
        to be able to <br />
        identify each row uniquely.
      </p>
    </div>
  );
};

export default Reflection;
