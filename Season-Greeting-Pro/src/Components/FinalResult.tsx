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

    // Function to get background class based on the selected option
    const getBackgroundClass = () => {
        const backgroundClasses: Record<string, string> = {
            'Happy Birthday': 'happy-birthday-bg',
            'Happy New Year': 'happy-new-year-bg',
            'Happy Valentine\'s Day': 'happy-valentines-day-bg',
            'Happy Easter': 'happy-easter-bg',
            'Happy Halloween': 'happy-halloween-bg',
            'Happy Mother\'s Day': 'happy-mothers-day-bg',
            'Happy Father\'s Day': 'happy-fathers-day-bg',
            'Happy Children\'s Day': 'happy-childrens-day-bg',
            'Merry Christmas': 'merry-christmas-bg',
            'Happy Boxing Day': 'happy-boxing-day-bg',
            'Happy Ed-al-Kabir': 'happy-ed-al-kabir-bg',
            'Happy Ed-al-Fitr': 'happy-ed-al-fitr-bg',
            'Happy Graduation Day': 'happy-graduation-day-bg',
            'Keep Up the Good Work': 'keep-up-the-good-work-bg',
            'Eid-al-Maulud': 'eid-al-maulud-bg',
            'Happy Independence Day': 'happy-independence-day-bg',
            'Happy Democracy Day': 'happy-democracy-day-bg',
            'Happy Worker\'s Day': 'happy-workers-day-bg',
        };

        // Retrieve the class corresponding to the selected option
        return backgroundClasses[option || ''] || 'default-bg';
    };

    return (
        <div className={`head-container ${getBackgroundClass()}`}>
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
