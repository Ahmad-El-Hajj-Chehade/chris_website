const additionalImages = Array.from({ length: 32 }, (_, i) => {
  const num = i + 1;
  // Wenn num < 10, füge eine "0" davor (01, 02...), sonst nimm nur die Zahl
  const fileName = num < 10 ? `0${num}` : `${num}`;
  
  return {
    image: `/images/${fileName}.jpg`
  };
});

export const milestones = [
  { image: "/images/gallery_4.jpg" },
  { image: "/images/gallery_2.jpg" },
  { image: "/images/gallery_3.jpg" },
  { image: "/images/gallery_5.jpg" },
  { image: "/images/gallery_6.jpg" },
  { image: "/images/gallery_1.jpg" },
  ...additionalImages
];