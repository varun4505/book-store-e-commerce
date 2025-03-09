export const getImgUrl = (imageUrl) => {
    if (!imageUrl) return '';
    
    // If it's already a full URL, return as is
    if (imageUrl.startsWith('http') || imageUrl.startsWith('https')) {
        return imageUrl;
    }
    
    // Try loading from public assets first (production)
    try {
        const publicUrl = `/assets/books/${imageUrl}`;
        return publicUrl;
    } catch (error) {
        // If that fails, try loading from src assets (development)
        try {
            return new URL(`../assets/books/${imageUrl}`, import.meta.url).href;
        } catch (error) {
            console.error('Error loading image:', error);
            return '';
        }
    }
}
