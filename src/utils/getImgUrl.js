export const getImgUrl = (imageUrl) => {
    if (!imageUrl) return '';
    
    // If it's already a full URL, return as is
    if (imageUrl.startsWith('http') || imageUrl.startsWith('https')) {
        return imageUrl;
    }
    
    // For local assets, use direct path
    return `/src/assets/books/${imageUrl}`;
}