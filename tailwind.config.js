module.exports = {
    purge: {
        enabled: true,
        content: ['*.html']
    },
    darkMode: "media", // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: "2rem"
        },
        extend: {
            zIndex: {
                '-10': '-10',
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}