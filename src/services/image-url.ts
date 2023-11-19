import noImage from '../assets/no-image-placeholder.webp'

// This is a service which crops images on the fly, saving loading times
// Also handles cards without images

const getCroppedImageurl = (url: string) => {
    if (!url) return noImage;

    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);

}

export default getCroppedImageurl;