import './backgroundBoxes.css';
import {imageSrc} from "../services";
function BackgroundBoxes() {
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
                <img
                    src={imageSrc('cross-purple.svg')}
                    alt={'cross-purple'} className={'cross'}
                    style={{top: '500px', right: '10%'}}
                />
                <img
                    src={imageSrc('cross-purple.svg')}
                    alt={'cross-purple'} className={'cross'}
                    style={{top: '150px', right: '20%'}}
                />
                <img
                    src={imageSrc('cross-purple.svg')}
                    alt={'cross-purple'} className={'cross'}
                    style={{top: '350px', left: '10%'}}
                />
                <img
                    src={imageSrc('cross-purple.svg')}
                    alt={'cross-purple'} className={'cross'}
                    style={{top: '1050px', left: '10%'}}
                />
                <img
                    src={imageSrc('cross-purple.svg')}
                    alt={'cross-purple'} className={'cross'}
                    style={{top: '1750px', left: '5%'}}
                />
                <img
                    src={imageSrc('cross-purple.svg')}
                    alt={'cross-purple'} className={'cross'}
                    style={{top: '2050px', left: '12%'}}
                />
                <img
                    src={imageSrc('cross-purple.svg')}
                    alt={'cross-purple'} className={'cross'}
                    style={{top: '3050px', left: '5%'}}
                />
                <img
                    src={imageSrc('cross-purple.svg')}
                    alt={'cross-purple'} className={'cross'}
                    style={{top: '5050px', left: '8%'}}
                />
                <img
                    src={imageSrc('cross-purple.svg')}
                    alt={'cross-purple'} className={'cross'}
                    style={{top: '6050px', right: '8%'}}
                />
                <img
                    src={imageSrc('cross-purple.svg')}
                    alt={'cross-purple'} className={'cross'}
                    style={{top: '7800', right: '8%'}}
                />

                <img
                    src={imageSrc('cross-orange.svg')}
                    alt={'cross-orange'} className={'cross'}
                    style={{top: '200px', left: '100px'}}
                />
                <img
                    src={imageSrc('cross-orange.svg')}
                    alt={'cross-orange'} className={'cross'}
                    style={{top: '2800px', right: '10%'}}
                />
                <img
                    src={imageSrc('cross-orange.svg')}
                    alt={'cross-orange'} className={'cross'}
                    style={{top: '2400px', left: '300px'}}
                />
                <img
                    src={imageSrc('cross-orange.svg')}
                    alt={'cross-orange'} className={'cross'}
                    style={{top: '4200px', left: '10%'}}
                />
                <img
                    src={imageSrc('cross-orange.svg')}
                    alt={'cross-orange'} className={'cross'}
                    style={{top: '4500px', right: '10%'}}
                />
                <img
                    src={imageSrc('cross-orange.svg')}
                    alt={'cross-orange'} className={'cross'}
                    style={{top: '6000px', left: '10%'}}
                />
                <img
                    src={imageSrc('cross-orange.svg')}
                    alt={'cross-orange'} className={'cross'}
                    style={{top: '8000px', right: '10%'}}
                />
                <img
                    src={imageSrc('cross-green.svg')}
                    alt={'cross-green'} className={'cross'}
                    style={{top: '1100px', right: '5%'}}
                />
                <img
                    src={imageSrc('cross-green.svg')}
                    alt={'cross-green'} className={'cross'}
                    style={{top: '2100px', left: '15%'}}
                />
                <img
                    src={imageSrc('cross-green.svg')}
                    alt={'cross-green'} className={'cross'}
                    style={{top: '3100px', right: '7%'}}
                />
                <img
                    src={imageSrc('cross-green.svg')}
                    alt={'cross-green'} className={'cross'}
                    style={{top: '5100px', left: '15%'}}
                />
                <img
                    src={imageSrc('cross-green.svg')}
                    alt={'cross-green'} className={'cross'}
                    style={{top: '6100px', left: '15%'}}
                />
                <img
                    src={imageSrc('cross-green.svg')}
                    alt={'cross-green'} className={'cross'}
                    style={{top: '7100px', right: '10%'}}
                />
                <img
                    src={imageSrc('cross-green.svg')}
                    alt={'cross-green'} className={'cross'}
                    style={{top: '8100px', left: '5%'}}
                />
            </div>
        </>
    );
}

export default BackgroundBoxes;