import React, { useEffect, useState } from 'react'
import "../styles/CropRecommendation.css"
import Connect from './Connect'
import img from "../assets/undraw_nature_benefits_re_kk70.svg"

function CropRecommendation() {

    // const [nitrogen, setNitrogen] = useState('');
    // const [phosphorous, setPhosphorous] = useState('');
    // const [potassium, setPotassium] = useState('');
    // const [temperature, setTemperature] = useState('');
    // const [humidity, setHumidity] = useState('');
    // const [ph, setPh] = useState('');
    // const [rainfall, setRainfall] = useState('');

    const [result, setResult] = useState(null)

    const [parameters, setParameters] = useState({
        nitrogen: '',
        phosphorous: '',
        potassium: '',
        temperature: '',
        humidity: '',
        ph: '',
        rainfall: '',
    })

    const onChange = (e) => {
        console.log(parameters)
        setParameters({ ...parameters, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = []
        Object.keys(parameters).forEach((key, i) => {
            let value = parameters[key];
            if (i > 2) {
                value = parseFloat(value);
            }
            else{
                value = parseInt(value)
            }
            body.push(value);
        });
        console.log(body)
        
        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setResult(data)
                console.log(typeof(data))
            })
        );
    };

    useEffect(() => {
        console.log(result)
    }, [result])

    return (
        <div className='CropRecommendation'>
            <div className="CropRecommendation__top">
                <Connect />
            </div>
            <div className="CropRecommendation__bottom">
                <div className="CropRecommendation__bottom__left">
                    <img src={img} alt="" />
                </div>
                <div className="CropRecommendation__bottom__right">
                    <form onSubmit={handleSubmit}>
                        <label className="CropRecommendation__label">
                            Nitrogen:
                            <input className="CropRecommendation__input" name='nitrogen' type="text" value={parameters.nitrogen} onChange={onChange} />
                        </label>
                        <label className="CropRecommendation__label">
                            Phosphorous:
                            <input className="CropRecommendation__input" name='phosphorous' type="text" value={parameters.phosphorous} onChange={onChange} />
                        </label>
                        <label className="CropRecommendation__label">
                            Potassium:
                            <input className="CropRecommendation__input" name='potassium' type="text" value={parameters.potassium} onChange={onChange} />
                        </label>
                        <label className="CropRecommendation__label">
                            Temperature:
                            <input className="CropRecommendation__input" name='temperature' type="text" value={parameters.temperature} onChange={onChange} />
                        </label>
                        <label className="CropRecommendation__label">
                            Humidity:
                            <input className="CropRecommendation__input" name='humidity' type="text" value={parameters.humidity} onChange={onChange} />
                        </label>
                        <label className="CropRecommendation__label">
                            pH:
                            <input className="CropRecommendation__input" name='ph' type="text" value={parameters.ph} onChange={onChange} />
                        </label>
                        <label className="CropRecommendation__label">
                            Rainfall:
                            <input className="CropRecommendation__input" name='rainfall' type="text" value={parameters.rainfall} onChange={onChange} />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            {result &&
            <div>
                <p>{result}</p>
            </div>
            }
        </div>
    );
}


export default CropRecommendation