const Blog = () => {
  return (
    <div className="container px-5 mx-auto flex space-y-4 flex-col">
      <div className="">
        <h1 className="text-2xl font-bold font-semibold mb-3">
          1. Differences Between JavaScript vs Node JS
        </h1>
        <ul className="ml-6 text-sm font-semibold list-decimal flex flex-col space-y-3">
          <li>
            javaScript is a simple programming language that runs in any browser
            JavaScript Engine. Whereas Node JS is an interpreter or running
            environment for a JavaScript programming language that holds many
            excesses, it requires libraries that can easily be accessed from
            JavaScript programming for better use.
          </li>
          <li>
            JavaScript is normally used for any client-side activity for one web
            application. An activity can be addressing business validation or
            dynamic page display in some schedule time interval or basic Ajax
            call kind of task. Those are used for a maximum time for any web
            application. Whereas Node JS mainly used for accessing or running
            any operating system for non-blocking operation. An operation like
            creating or executing a shell script, or getting some specific
            hardware-related information on one call or installed certificate
            details in the system or a lot of define task is non-blocking on an
            operating system.
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold mb-3">
          2. When should you use nodejs and when should you use mongodb
        </h1>
        <ul className="ml-6 text-sm font-semibold flex flex-col space-y-3">
          <li>
            NodeJs: Shortly we can say, NodeJS is a JavaScript runtime
            environment. It's actually helps JavaScript to run outside of
            server. It's used in server side development.
          </li>
          <li>
            MongoDB: But, MongoDB is NoSQL database which is document oriented.
            It represents data as of JSON documents. It's used for store data.
          </li>
          <li>
            Summary: The summary is MongoDB is a database where we can store
            data and NodeJS helps us to to connect our client site to database
            by it's server site.
          </li>
        </ul>
      </div>

      <div className="">
        <h1 className="text-2xl font-semibold mb-3">
          3. Differences between sql and nosql databases.
        </h1>
        <ul className="ml-6 text-sm font-semibold flex flex-col list-disc space-y-3">
          <li>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable.
          </li>
          <li>
            SQL databases are table-based, while NoSQL databases are document,
            key-value, graph, or wide-column stores.
          </li>
          <li>
            SQL databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </li>
        </ul>
      </div>

      <div className="">
        <h1 className="text-2xl font-semibold mb-3">
          4. What is the purpose of jwt and how does it work
        </h1>
        <p className="text-sm font-semibold">
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted.
        </p>
      </div>
    </div>
  );
};

export default Blog;
