import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import vids from '../assets/Media/pexels-nicole-michalou-5754819 (2160p) (1).mp4';
import '../Styles/FormComponent.css';
import '../Styles/FinalResult.css'

const FormComponent: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        option: '',
        mrCheckbox: false,
        mrsCheckbox: false,
        noneCheckbox: false,
        who: '',
    });

    // Handle input changes for text, select, and checkbox elements
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value, type } = e.target;

        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                [id]: (e.target as HTMLInputElement).checked, // Access 'checked' property safely
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [id]: value,
            }));
        }
    };

    // Form submission logic
    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, surname, option, who } = formData;

        // Validate input fields
        if (!name || !surname || !option || !who) {
            alert('All fields are required');
            return;
        }

        // Construct URL with form data
        const urlParams = new URLSearchParams({
            name,
            surname,
            option,
            mrCheckbox: formData.mrCheckbox.toString(),
            mrsCheckbox: formData.mrsCheckbox.toString(),
            noneCheckbox: formData.noneCheckbox.toString(),
            who,
        });

        // Use navigate to redirect
        navigate(`/results?${urlParams.toString()}`);
    };

  // Get dynamic background class based on the selected option
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
    return backgroundClasses[formData.option] || 'default-bg';
};


    return (
        <div className={`start ${getBackgroundClass()}`}>
            <form id="form" onSubmit={submitForm}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} />
                <br /><br />
                <label htmlFor="surname">Surname:</label>
                <input id="surname" type="text" placeholder="Surname" value={formData.surname} onChange={handleChange} />
                <br /><br />
                <select id="option" className="select-list" value={formData.option} onChange={handleChange}>
                    <option className='list-child' value="">Please Choose Your List Choice</option>
                    <option className='list-child'value="Happy Birthday">Happy Birthday 🎁🎈🎂</option>
                    <option className='list-child'value="Happy New Year">Happy New Year 🎊🎈🎆🎇🧨✨</option>
                    <option className='list-child'value="Happy Valentine's Day">Happy Valentine's Day ♥💓👩‍❤️‍👩</option>
                    <option className='list-child' value="Happy Easter">Happy Easter 🥚🎁🐰</option>
                    <option className='list-child'value="Happy Halloween">Happy Halloween 🎃🎃🎊</option>
                    <option className='list-child'value="Happy Mother's Day">Happy Mother's Day 👩💓</option>
                    <option className='list-child'value="Happy Father's Day">Happy Father's Day 🧔💓</option>
                    <option className='list-child'value="Happy Children's Day">Happy Children's Day 👨‍👨‍👧‍👧💓🎊</option>
                    <option className='list-child'value="Merry Christmas">Merry Christmas ✨🎄🎊🎇</option>
                    <option className='list-child'value="Happy Boxing Day">Happy Boxing Day 🥊😉</option>
                    <option className='list-child'value="Happy Ed-al-Kabir">Happy Ed-al-Kabir 👳‍♂️💓</option>
                    <option className='list-child'value="Happy Ed-al-Fitr">Happy Ed-al-Fitr 🧕💓</option>
                    <option className='list-child'value="Happy Graduation Day">Happy Graduation Day 🎓🎓</option>
                    <option className='list-child'value="Keep Up the Good Work">Keep Up the Good Work 😉</option>
                    <option className='list-child'value="Eid-al-Maulud">Eid-al-Maulud 🌙🎊</option>
                    <option className='list-child'value="Happy Independence Day">Happy Independence Day 👨‍👨‍👧‍👧💓</option>
                    <option className='list-child'value="Happy Democracy Day">Happy Democracy Day 🎆🎇</option>
                    <option className='list-child'value="Happy Worker's Day">Happy Worker's Day 👨‍🔧🎊😉</option>
                </select>

                <br /><br />
                <label htmlFor="mrCheckbox">Mr</label>
                <input id="mrCheckbox" type="checkbox" checked={formData.mrCheckbox} onChange={handleChange} />
                <label htmlFor="mrsCheckbox">Mrs</label>
                <input id="mrsCheckbox" type="checkbox" checked={formData.mrsCheckbox} onChange={handleChange} />
                <label htmlFor="noneCheckbox">None</label>
                <input id="noneCheckbox" type="checkbox" checked={formData.noneCheckbox} onChange={handleChange} />
                <br /><br />
                <label htmlFor="who">To:</label>
                <input id="who" type="text" placeholder="Required" value={formData.who} onChange={handleChange} />
                <br /><br />
                <button id="submitBtn" type="submit">Submit</button>
            </form>

            <div className="video-background">
                <video autoPlay muted loop>
                    <source src={vids} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="content">
                <h1 id="greetingText">Welcome</h1>
                <p>God Bless you</p>
            </div>
        </div>
    );
};

export default FormComponent;
