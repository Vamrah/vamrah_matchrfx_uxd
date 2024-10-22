export const getCapabilityStyles = (capability) => {
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
