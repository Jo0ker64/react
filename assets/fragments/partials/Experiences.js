import React from 'react';

class Experiences extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experiences: [],
            error: null,
        };
    }

    componentDidMount() {
        fetch('https://127.0.0.1:8000/experience')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                //console.log(data.message);
                this.setState({ experiences: data.message });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                this.setState({ error: error.message });
            });
    }

    render() {
        const { experiences, error } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }

        if (!experiences || experiences.length === 0) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <ul>
                    {Array.isArray(experiences) && experiences.map(experience => (
                        <li key={experience.id} className="d_timeline-item">
                            <h3 className="d_timeline-title">{experience.year}</h3>
                            <p className="d_timeline-text">
                                <span className="d_title">{experience.title}</span>
                                <span className="d_company">{experience.company}</span>
                                {experience.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Experiences;
