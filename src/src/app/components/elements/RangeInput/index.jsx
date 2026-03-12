import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const RangeInput = styled(Slider)(({ labelBackgroundColor, labelPosition }) => {
    const gradientColor = `linear-gradient(90deg, #7cae7b 0%, #518c83 100%)`;

    return {
        color: 'transparent',
        height: 8,
        '& .MuiSlider-track': {
            backgroundImage: gradientColor,
            border: 'none',
        },
        '& .MuiSlider-thumb': {
            height: 24,
            width: 24,
            backgroundColor: '#75a87b',
            border: '3px solid #fff',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
            },
            '&::before': {
                display: 'none',
            },
        },
        '& .MuiSlider-valueLabel': {
            lineHeight: 1.2,
            fontSize: 24,
            fontWeight: 'bold',
            padding: '3px 10px 0 10px',
            height: 45,
            backgroundColor: labelBackgroundColor,
            borderRadius: 10,
            border: '5px solid #fff',
            fontFamily: 'Fixel Bold',
            transform: `rotate(5deg) translateX(${labelPosition}px) translateY(-113%) scale(1) !important`,
            '& .MuiTypography-root': {
                fontSize: '16px',
                fontWeight: 'bold',
            },
            '&::before': {
                background: '#fff',
                bottom: '-5px',
                left: '80%',
            },
        },
        '& .MuiSlider-rail': {
            opacity: 0.5,
            boxShadow: 'inset 0px 0px 4px -2px #000',
            backgroundColor: '#424c4b',
        },
    };
});

export default RangeInput;