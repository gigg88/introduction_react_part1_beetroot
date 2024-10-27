// App.js
import React from 'react';
import Header from './header';
import MainContent from './mainContent';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(e(App));

export default  
 App;