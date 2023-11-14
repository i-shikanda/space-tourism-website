import Nav from "./components/nav/nav";  

export default function Home() {
  return (
    <section>
      <Nav/>
      <div>
        <p>So, you want to travel to</p>
        <h1>Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <a href="#">
        <button>Explore</button>
      </a>
    </section>
  );
}
