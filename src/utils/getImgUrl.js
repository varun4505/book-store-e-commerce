export const getImgUrl = (imageUrl) => {
    if (!imageUrl) return '';
    
    // If it's already a full URL, return as is
    if (imageUrl.startsWith('http') || imageUrl.startsWith('https')) {
        return imageUrl;
    }
    
    // Try to dynamically import the image
    try {
        // For production builds, use the /assets path
        return `/assets/books/${imageUrl}`;
    } catch (error) {
        console.error('Error loading image:', error);
        return '';
    }
}
