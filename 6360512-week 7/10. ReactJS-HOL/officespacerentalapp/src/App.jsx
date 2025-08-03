import './App.css';
import CubeImage from '/CubeSpace.jpg'
import Images from '/2.jpg'
import  iceage from '/3.jpg'
function App() {
  const officeList = [
    { name: 'Space One', rent: 55000, address: 'MG Road, Bangalore', image: CubeImage },
    { name: 'Space Two', rent: 65000, address: 'BTM Layout, Bangalore', image: Images },
    { name: 'Space Three', rent: 48000, address: 'Whitefield, Bangalore', image: iceage }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental App</h1>
      {officeList.map((office, index) => (
        <div key={index} style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
          <img src={office.image} alt="Office" />
          <h2>{office.name}</h2>
          <p>{office.address}</p>
          <p style={{ color: office.rent > 60000 ? 'green' : 'red' }}>
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
