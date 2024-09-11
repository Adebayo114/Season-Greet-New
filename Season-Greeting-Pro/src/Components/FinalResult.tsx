    // ResultPage.tsx
    import React from 'react';
    import { useLocation } from 'react-router-dom';
    import '../Styles/FinalResult.css'; // Import the CSS file for styling
    import whatsappIcon from '../assets/Media/whatsapp.png';

    
    const ResultPage: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // Extracting query parameters from URL
    const name = queryParams.get('name');
    const surname = queryParams.get('surname');
    const option = queryParams.get('option');
    const who = queryParams.get('who');

    // Constructing the WhatsApp share link
    const whatsappLink = `https://wa.me/?text=Check%20out%20this%20greeting%20I%20sent%20you:%20${encodeURIComponent(window.location.href)}`;

    return (
        <div className="head-container">
        <div className="greetingContainer" id="greetingContainer">
            {option ? option : 'Greeting will be displayed here.'}
        </div>
        <br />

        <div className="from">From</div>
        <div className="identification" id="identification">
            {`${name ? name : ''} ${surname ? surname : ''}`}
        </div>
        <br />
        <br />

        <div className="to">To</div>
        <br />
        <br />
        <div className="sendTo" id="sendTo">
            {who ? who : 'Recipient will be displayed here.'}
        </div>
        <br />

        <div className="clickyours">
            <a href="/">Click Here To Create Yours 😉</a>
        </div>
        <div id="whatsapp" className="whatsapp-image">
            <a href={whatsappLink}>
            <img src={whatsappIcon} width="30px" alt="Share on WhatsApp" />

            </a>
        </div>
        </div>
    );
    };

    export default ResultPage;
