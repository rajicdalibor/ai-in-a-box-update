import './BackgroundDecoration.css';
import {imageSrc} from "../services/utils";

const purpleCrosses = [
    {top: '150px', left: '80%'},
    {top: '350px', left: '10%'},
    {top: '500px', left: '90%'},
    {top: '1050px', left: '10%'},
    {top: '1750px', left: '5%'},
    {top: '2050px', left: '12%'},
    {top: '3050px', left: '5%'},
    {top: '5050px', left: '92%'},
    {top: '5050px', left: '92%'},
    {top: '6050px', left: '88%'},
    {top: '7800px', left: '12%'},
    {top: '8700px', left: '92%'}
]

const orangeCrosses = [
    {top: '200px', left: '5%'},
    {top: '2400px', left: '15%'},
    {top: '2800px', left: '10%'},
    {top: '4200px', left: '10%'},
    {top: '4500px', left: '90%'},
    {top: '6000px', left: '10%'},
    {top: '8000px', left: '90%'},
    {top: '8500px', left: '12%'}
]

const greenCrosses = [
    {top: '1100px', left: '95%'},
    {top: '2100px', left: '15%'},
    {top: '3100px', left: '93%'},
    {top: '5100px', left: '15%'},
    {top: '4500px', left: '90%'},
    {top: '6100px', left: '15%'},
    {top: '7100px', left: '90%'},
    {top: '8100px', left: '5%'}
]
function BackgroundDecoration() {
    return (
        <>
            <div>
                <div className={'boxes'} style={{top: '200px', right: '5%'}}/>
                <div className={'boxes'} style={{top: '400px', left: '5%'}}/>
                <div className={'boxes'} style={{top: '3200px', left: '5%'}}/>
                <div className={'boxes'} style={{top: '4600px', right: '5%'}}/>
                <div className={'boxes'} style={{top: '5300px', left: '5%'}}/>
            </div>
            <div>
                {purpleCrosses.map((cross, id) =>
                    <img
                        key={id}
                        src={imageSrc('cross-purple.svg')}
                        alt={'cross-purple'} className={'cross'}
                        style={cross}
                    />
                )}
                {orangeCrosses.map((cross, id) =>
                    <img
                        key={id}
                        src={imageSrc('cross-orange.svg')}
                        alt={'cross-orange'} className={'cross'}
                        style={cross}
                    />
                )}
                {greenCrosses.map((cross, id) =>
                    <img
                        key={id}
                        src={imageSrc('cross-green.svg')}
                        alt={'green-orange'} className={'cross'}
                        style={cross}
                    />
                )}
            </div>
        </>
    );
}

export default BackgroundDecoration;