import logo from './logo.svg';
import './App.css';

function Banner({ title, navItems }) {
  return (
    <header className="banner">
      <h1>{title}</h1>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Main({ content }) {
  return (
    <main className="main-content">
      {content.map((section, index) => (
        <section key={index}>
          <h2>{section.heading}</h2>
          <p>{section.text}</p>
        </section>
      ))}
      <section>
        <h2>About This Page</h2>
        <p>This page demonstrates the use of React components and props.</p>
      </section>
    </main>
  );
}

function Footer({ copyright, date})  {
  return (
    <footer className="footer">
      <p>{copyright}</p>
      <p>{date}</p>
      <p>Created by Brian Waldschmidt</p>
    </footer>
  );
}

function App() {
  const navItems = ['Home', 'Destinations', 'Contact'];
  const content = [
    { heading: 'Explore the World', text: 'Discover the most beautiful places on Earth, from the beaches of Bali to the mountains of Switzerland. Each destination offers unique experiences and breathtaking views.' },
    { heading: 'Travel Tips', text: 'Pack light, stay hydrated, and always have a backup plan. Whether you are traveling solo or with family, these tips will help you make the most of your journey.' },
  ];
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="App">
      <Banner title="Travel the World" navItems={navItems} />
      <Main content={content} />
      <Footer copyright="&copy 2024 Travel World" date={currentDate} />
    </div>
  );
}

export default App;
