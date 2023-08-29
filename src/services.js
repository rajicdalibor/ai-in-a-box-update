export const goToLink = (URL) => {
    window.open(URL, '_blank');
}

export const imageSrc = (name) => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        return `/images/${name}`;
    } else {
        return `images/${name}`;
    }
}