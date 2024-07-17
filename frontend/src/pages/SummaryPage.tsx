

import React from 'react';
import '../styles/Summary.css';
import Header from '../components/Header';
import Footer from '../components/core/Footer';
import "../styles/tailwind.css"



const SummaryPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="text-center mb-5">
                    <h1 className="text-4xl font-bold">Vacation Summary</h1>
                </div>
                <div className="summary-overlay mb-5 p-4">
                    <h2 className="text-2xl"><span className="icon">📍</span> Reykjavik, Iceland</h2>
                    <div className="summary-card">
                        <img src="public/activities/island.jpg" alt="Reykjavik, Iceland" />
                    </div>
                </div>
                <div className="summary-overlay mb-5 p-4">
                    <h2 className="text-2xl"><span className="icon">🏨</span> Reykjavik Marina - Berjaya Iceland Hotels</h2>
                    <div className="summary-card">
                        <img src="public/activities/hotel.jpg" alt="Reykjavik Marina - Berjaya Iceland Hotels" />
                    </div>
                </div>
                <div className="summary-overlay p-4">
                    <h2 className="text-2xl"><span className="icon">🗓️</span> Timeline for Activities</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <h5 className="font-bold text-lg">Day 1: Visit the Historical Musium</h5>
                        </div>
                        <div className="timeline-item">
                            <h5 className="font-bold text-lg">Day 2: Go Hiking</h5>
                        </div>
                        <div className="timeline-item">
                            <h5 className="font-bold text-lg">Day 3: Attend the Avicci's concert</h5>
                        </div>
                    </div>
                </div>
                <div className="footer-text text-4xl font-bold mt-8">Enjoy your vacation!</div>
            </div>
            <Footer bg={''} />
        </>
    );
}

export default SummaryPage;
