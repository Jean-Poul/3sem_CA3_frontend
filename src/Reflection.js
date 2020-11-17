const Reflection = () => {
  return (
    <div>
      <h1>Home of my thoughts</h1>
      <br />
      <p>My reflections for this project</p>
      <p>
        During this project I have learned how to make additional requests to
        other server while using the correct CORS standards.
        <br />
        <br />
        I also gained experience in how to read documentation on external API's.
        The hard part of this is that different API's return different kinds of
        JSON strings. An example could be that my JSON response was an object
        with several other objects that also contained several arrays. This made
        it very hard to use my entity and DTO in the correct manner.
        <br />
        <br />
        A somewhat concerning error that can be found in my code is that when
        pressing the button, which fetches the external data, the console will
        turn red with errors. Though the program will not crash and it works as
        intended.
        <br />
        <br />
        A "small" thing i learned was that I have to remember to add a key to a
        row when making a list or table. This is especially important when using
        the .map function since it needs to be able to identify each row
        uniquely.
        <br />
        <br />
        Finally I have had big issues with external links. While the links work
        on localhost they seem to get CORS errors when being deployed on my
        droplet(virtual machine). The weird part about this is that I can fetch
        from several of my external API's but not from one specific. I have a
        feeling it has to do with my request header missing some data.
      </p>
    </div>
  );
};

export default Reflection;
