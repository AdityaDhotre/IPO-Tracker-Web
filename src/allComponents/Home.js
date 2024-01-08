import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useAuth } from './AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div data-testid="home-component">
      <div className="bg-primary py-4">
        <div className="container">
          <h1 className="text-white text-center">Welcome to IPO Tracker & Currency Pulse</h1>
        </div>
      </div>
      <div className="bg-image">
        <div className="container mt-4 pt-4">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="overlay text-center">
                <div className="text">
                  <p className="lead" style={{ color: 'blue', fontWeight: 'bold' }}>
                    IPO Monitor & Currency Insights offers real-time stock market updates and robust analytical tools for in-depth analysis.
                  </p><br></br>
                  <h2>Key Features:</h2>
                  <ul className="list-group">
                    <li className="list-group-item">Explore upcoming IPOs with dynamic data sourced externally</li>
                    <li className="list-group-item">Stay informed with real-time currency rates from an external API</li>
                    <li className="list-group-item">Enable automatic data refresh or user-initiated updates for timely information</li>
                    <li className="list-group-item">Optimized for mobile, providing an enriched user experience</li>
                  </ul>

                  <br />
                  {isAuthenticated ? (
                    <Link to="/calender" className="btn btn-primary btn-lg">Explore Now</Link>
                  ) : (
                    <Link to="/login" className="btn btn-primary btn-lg">Explore Now</Link>
                  )}

                  <p>Begin exploring our feature-rich platform today!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
