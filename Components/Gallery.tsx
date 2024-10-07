'use client'

import Image from 'next/image'
import images from "../Data/StaticImages"
import { useEffect, useState } from 'react'

// Helper function to shuffle an array
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Gallery = () => {
  const [rows, setRows] = useState<any[][]>([[], [], []]); // 3 arrays for the rows

  useEffect(() => {
    // Repeat the images 5 times
    let repeatedImages = Array(5).fill([...images]).flat();

    // Shuffle the repeated images
    let shuffledImages = shuffleArray(repeatedImages);

    // Distribute the images across 3 rows in a round-robin manner
    const rowDistribution: string[][]  = [[], [], []];
    shuffledImages.forEach((image: any, index: number) => {
      const rowIndex = index % 3; // Cycle between 0, 1, and 2
      rowDistribution[rowIndex].push(image);
    });

    // Set the rows with distributed images
    setRows(rowDistribution);
  }, [images]);

  return (
    <div className='w-full h-fit flex gap-3'>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className='w-[calc(33%-0.75rem)] flex flex-col items-start justify-start gap-3'>
          {row.map((image: any, index: number) => (
            <div
              key={index}
              className='group hover:animate-round-corner hover:rounded-xl w-full overflow-hidden relative flex items-center justify-center'
            >
              <div className='absolute bg-black bg-opacity-0 group-hover:bg-opacity-10 w-full h-full top-0 z-10 left-0'></div>
              <Image
                src={image}
                className='w-full object-cover'
                alt='any'
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;