import React from 'react';
import Select from 'react-select';

const capabilityOptions = [
    { value: 'Standard', label: 'Standard', color: 'var(--cap-color-standard)', backgroundColor: 'var(--cap-color-standard-lt)' },
    { value: 'Not Offered', label: 'Not Offered', color: 'var(--cap-color-not-offered)', backgroundColor: 'var(--cap-color-not-offered-lt)' },
    { value: 'Custom', label: 'Custom', color: 'var(--cap-color-custom)', backgroundColor: 'var(--cap-color-custom-lt)' },
    { value: '3rd-Party', label: '3rd-Party', color: 'var(--cap-color-3rd-party)', backgroundColor: 'var(--cap-color-3rd-party-lt)' },
    { value: 'Roadmap', label: 'Roadmap', color: 'var(--cap-color-roadmap)', backgroundColor: 'var(--cap-color-roadmap-lt)' },
];

const getCapabilityStyles = (capability) => {
    switch (capability) {
        case 'Standard':
            return {
                borderColor: 'var(--cap-color-standard)',
                backgroundColor: 'var(--cap-color-standard-lt)',
            };
        case 'Not Offered':
            return {
                borderColor: 'var(--cap-color-not-offered)',
                backgroundColor: 'var(--cap-color-not-offered-lt)',
            };
        case 'Custom':
            return {
                borderColor: 'var(--cap-color-custom)',
                backgroundColor: 'var(--cap-color-custom-lt)',
            };
        case '3rd-Party':
            return {
                borderColor: 'var(--cap-color-3rd-party)',
                backgroundColor: 'var(--cap-color-3rd-party-lt)',
            };
        case 'Roadmap':
            return {
                borderColor: 'var(--cap-color-roadmap)',
                backgroundColor: 'var(--cap-color-roadmap-lt)',
            };
        default:
            return {
                borderColor: 'var(--cap-color-default)',
                backgroundColor: 'var(--cap-color-default-lt)',
            };
    }
};

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderColor: state.selectProps.styles.borderColor,
        backgroundColor: state.selectProps.styles.backgroundColor,
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.data.color,
        backgroundColor: state.data.backgroundColor,
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: state.selectProps.styles.borderColor,
        backgroundColor: state.selectProps.styles.backgroundColor,
    }),
};

const CapabilitySelect = ({ capability, onChange }) => {
    const capabilityStyles = getCapabilityStyles(capability);

    return (
        <Select
            value={capabilityOptions.find(option => option.value === capability)}
            onChange={onChange}
            options={capabilityOptions}
            styles={{ ...customStyles, styles: capabilityStyles }}
        />
    );
};

export default CapabilitySelect;
