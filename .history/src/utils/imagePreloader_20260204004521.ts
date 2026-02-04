// Image preloader utility for better performance
export const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
        img.src = url;
      });
    })
  );
};

// Critical images that should be preloaded
export const criticalImages = [
  "/InterviewBuddy.png",
  "/verity.png",
  "/devtinderImg.png",
  "/textgeneratorImg.jpg",
];

export const preloadCriticalImages = () => {
  if (typeof window !== "undefined") {
    preloadImages(criticalImages).catch((error) => {
      console.warn("Some images failed to preload:", error);
    });
  }
};